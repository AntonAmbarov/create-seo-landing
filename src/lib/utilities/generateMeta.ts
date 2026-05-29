import type { Metadata } from 'next';

import type { Media, Page, Post, Config, Homepage } from '@/payload/payload-types';

import { mergeOpenGraph } from './mergeOpenGraph';
import { getServerSideURL } from './getURL';

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
	const serverUrl = getServerSideURL();

	let url = serverUrl + '/website-template-OG.webp';

	if (image && typeof image === 'object' && 'url' in image) {
		const ogUrl = image.sizes?.og?.url;

		url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url;
	}

	return url;
};

export function generateMeta(args: {
	doc: Partial<Page> | Partial<Post> | Partial<Homepage> | null;
}): Metadata {
	const { doc } = args;

	if (!doc)
		return {
			title: 'SEO Landing Constructor',
			description: 'Create high-converting SEO-optimized landing pages',
		};

	const title = `${doc.meta?.title || doc?.title || ''} | Create SEO-landing`;
	const description = doc.meta?.description || '';
	const canonical = doc.meta?.canonicalURL;
	const ogImage = getImageURL(doc.meta?.image);

	return {
		title,
		description,
		alternates: {
			canonical: canonical || undefined,
		},
		openGraph: mergeOpenGraph({
			description: doc?.meta?.description || '',
			images: ogImage
				? [
						{
							url: ogImage,
						},
					]
				: undefined,
			title,
			url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
		}),
		robots: { index: !doc.noindex, follow: true },
	};
}
