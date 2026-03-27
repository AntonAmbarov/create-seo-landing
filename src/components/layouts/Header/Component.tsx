import { getCachedGlobal } from '@/lib/utilities/getGlobals'
import { HeaderClient } from './Component.client'

import type { Header } from '@/payload/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} />
}
