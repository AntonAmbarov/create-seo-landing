import type { Payload } from 'payload';
import { validateInput } from './utilites';
import { Page } from '@/payload/payload-types';

export async function importLanding(rawJson: unknown, payload: Payload): Promise<Page> {
	console.log('[importLanding] Starting import process');
	console.log('[importLanding] Raw input:', JSON.stringify(rawJson, null, 2));

	const data = validateInput(rawJson);
	console.log('[importLanding] Validated data:', data);

	console.log('[importLanding] Checking for existing page with slug:', data.slug);
	const existingPage = await payload.find({
		collection: 'pages',
		where: { slug: { equals: data.slug } },
		limit: 1,
	});

	if (existingPage.totalDocs > 0) {
		console.warn(
			`[importLanding] Page with slug "${data.slug}" already exists. Total docs: ${existingPage.totalDocs}`,
		);
		throw new Error(`Page with slug "${data.slug}" already exists`);
	}
	console.log('[importLanding] No existing page found, proceeding with creation');

	console.log('[importLanding] Creating new page with status: draft');
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

	console.log('[importLanding] Page created successfully:', {
		id: page.id,
		title: page.title,
		slug: page.slug,
		status: page._status,
	});

	return page;
}
