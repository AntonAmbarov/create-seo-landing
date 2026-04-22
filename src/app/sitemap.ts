import type { MetadataRoute } from 'next';
import { getPayload } from 'payload';
import config from '@payload-config';
import { getServerSideURL } from '@/lib/utilities/getURL';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const payload = await getPayload({ config });
	const posts = await payload.find({
		collection: 'pages',
		limit: 0,
		where: {},
	});

	const url = getServerSideURL();

	return [
		...posts.docs.map(
			({ slug, updatedAt }: { slug: string | null | undefined; updatedAt: string }) => ({
				url: `${url}/${slug}`,
				lastModified: new Date(updatedAt),
			}),
		),
	];
}
