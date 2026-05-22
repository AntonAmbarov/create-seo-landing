import type { Payload } from 'payload';
import { validateInput } from './utilites';
import { Page } from '@/payload/payload-types';

export async function importLanding(rawJson: unknown, payload: Payload): Promise<Page> {
	const data = validateInput(rawJson);

	const existingPage = await payload.find({
		collection: 'pages',
		where: { slug: { equals: data.slug } },
		limit: 1,
	});

	if (existingPage.totalDocs > 0) {
		throw new Error(`Page with slug "${data.slug}" already exists`);
	}

	const page = await payload.create({
		collection: 'pages',
		data: {
			title: data.title,
			slug: data.slug,
			blocks: data.blocks,
			meta: data.meta,
			noindex: data.noindex,
			_status: 'draft',
		},
	});

	return page;
}
