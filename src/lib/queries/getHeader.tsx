import { getPayload } from 'payload'
import configPromise from '@/payload/config'
import type { Header as HeaderType } from '@/payload/payload-types'

export async function getHeader(): Promise<HeaderType> {
  const payload = await getPayload({ config: configPromise })
  return payload.findGlobal({
    slug: 'header',
    draft: false,
  })
}
