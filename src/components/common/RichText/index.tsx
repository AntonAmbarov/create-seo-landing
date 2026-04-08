import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'
import type { DefaultTypedEditorState, DefaultNodeTypes } from '@payloadcms/richtext-lexical'
import { cn } from '@/lib/utilities/ui'

type Props = {
  data: DefaultTypedEditorState | null | undefined
  className?: string
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({
    internalDocToHref: ({ linkNode }) => {
      const { value, relationTo } = linkNode.fields.doc!
      if (typeof value !== 'object' || !value?.slug) return '#'

      return relationTo === 'posts' ? `/posts/${value.slug}` : `/${value.slug}`
    },
  }),
  blocks: {},
})

export default function RichText({
  data,
  className,
  enableGutter = false,
  enableProse = true,
  ...rest
}: Props) {
  if (!data) return null

  return (
    <ConvertRichText
      converters={jsxConverters}
      data={data}
      className={cn(
        'payload-richtext',
        {
          'mx-auto max-w-3xl': enableGutter,
          'prose prose-neutral dark:prose-invert md:prose-lg': enableProse,
          'prose-headings:font-semibold prose-headings:tracking-tight': true,
          'prose-p:leading-relaxed': true,
        },
        className,
      )}
      {...rest}
    />
  )
}
