import { RenderBlocks } from '@/components/blocks/RenderBlocks';
import { getHomepage } from '@/lib/queries/getHomepage';
import { generateMeta } from '@/lib/utilities/generateMeta';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
	const homepage = await getHomepage();

	return generateMeta({ doc: homepage });
}
export default async function Page() {
	const homepage = await getHomepage();

	if (!homepage) {
		notFound();
	}

	return (
		<>
			<RenderBlocks blocks={homepage.blocks} />
		</>
	);
}
