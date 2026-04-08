import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import configPromise from '@/payload/config'
import type { Page } from '@/payload/payload-types'

export const queryPageBySlug = cache(async ({ slug }: { slug: string }): Promise<Page | null> => {
  const { isEnabled: isDraft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft: isDraft,
    limit: 1,
    depth: 2,
    pagination: false,
    overrideAccess: isDraft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
