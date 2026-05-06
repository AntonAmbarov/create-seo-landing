import { Page } from '../../payload/payload-types';
import { Hero } from '@/components/blocks/Hero';
import { ComponentType } from 'react';
import { ContactSection } from './ContactSection';

type Block = NonNullable<Page['blocks']>[number];

const blockComponents: {
	[K in Block['blockType']]: ComponentType<Extract<Block, { blockType: K }>>;
} = {
	hero: Hero,
	contactSection: ContactSection,
};

type BlockType = keyof typeof blockComponents;

type Props = {
	blocks: Page['blocks'] | null | undefined;
};

export function RenderBlocks({ blocks }: Props) {
	if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
		return null;
	}

	return (
		<>
			{blocks.map((block, index) => {
				const BlockComponent = blockComponents[block.blockType as BlockType] as ComponentType<
					typeof block
				>;

				if (!BlockComponent) {
					console.warn(`The component for the type block was not found.: ${block.blockType}`);
					return null;
				}

				return <BlockComponent key={block.id || index} {...block} />;
			})}
		</>
	);
}
