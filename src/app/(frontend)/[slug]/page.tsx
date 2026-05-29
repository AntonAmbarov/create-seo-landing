import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

import { type RequiredDataFromCollectionSlug } from 'payload';

import { RenderBlocks } from '@/components/blocks/RenderBlocks';
import { LivePreviewListener } from '@/payload/components/LivePreviewListener';
import { RedirectsHandler } from '@/components/common/RedirectsHandler';
import { generateMeta } from '@/lib/utilities/generateMeta';
import { queryPageBySlug } from '@/lib/queries/queryPageBySlug';
import { queryPages } from '@/lib/queries/queryPages';

type Props = {
	params: Promise<{
		slug?: string;
	}>;
};

export async function generateStaticParams() {
	const pages = await queryPages();
	const slugs = pages
		?.filter((page) => {
			return page.slug !== 'home';
		})
		.map(({ slug }) => {
			return { slug };
		});

	return slugs;
}

export async function generateMetadata({ params: paramsPromise }: Props): Promise<Metadata> {
	const { slug = 'home' } = await paramsPromise;

	const decodedSlug = decodeURIComponent(slug);
	const page = await queryPageBySlug({
		slug: decodedSlug,
	});

	return generateMeta({ doc: page });
}

export default async function Page({ params: paramsPromise }: Props) {
	const { isEnabled: draft } = await draftMode();
	const { slug = '/' } = await paramsPromise;

	const decodedSlug = decodeURIComponent(slug);
	const url = '/' + decodedSlug;
	let page: RequiredDataFromCollectionSlug<'pages'> | null;

	page = await queryPageBySlug({
		slug: decodedSlug,
	});

	if (!page) {
		return <RedirectsHandler url={url} />;
	}

	return (
		<>
			<RedirectsHandler disableNotFound url={url} />

			{draft && <LivePreviewListener />}

			<RenderBlocks blocks={page.blocks} />
		</>
	);
}
