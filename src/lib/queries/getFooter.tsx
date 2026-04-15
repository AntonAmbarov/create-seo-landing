import { getPayload } from 'payload'
import configPromise from '@/payload/config'
import type { Footer as FooterType } from '@/payload/payload-types'

export async function getFooter(): Promise<FooterType> {
  const payload = await getPayload({ config: configPromise })
  return payload.findGlobal({
    slug: 'footer',
    draft: false,
  })
}
