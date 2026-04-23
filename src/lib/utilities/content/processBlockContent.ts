import { Page } from '@/payload/payload-types';

type Blocks = Page['blocks'];

export function processBlockContent(blocks: Blocks | null | undefined): Blocks | null | undefined {
	if (!blocks) return blocks;

	const processed = { ...blocks };

	for (const blockName of blocks) {
	}
}
