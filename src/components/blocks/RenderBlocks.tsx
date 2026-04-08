import { Page } from '../../payload/payload-types'
import { Hero } from '@/components/blocks/Hero'

const blockComponents = {
  hero: Hero,
} as const

type BlockType = keyof typeof blockComponents

type Props = {
  blocks: Page['blocks'] | null | undefined
}

export function RenderBlocks({ blocks }: Props) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.blockType as BlockType]

        if (!BlockComponent) {
          console.warn(`The component for the type block was not found.: ${block.blockType}`)
          return null
        }

        return (
          <section key={block.id || index} className="my-16 first:mt-0 last:mb-0">
            <BlockComponent {...block} />
          </section>
        )
      })}
    </>
  )
}
