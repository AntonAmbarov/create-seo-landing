'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Header as HeaderType } from '@/payload/payload-types'

interface HeaderProps {
  data: HeaderType
}

export function Header({ data }: HeaderProps) {
  const { navItems, showCta, ctaLabel, ctaLink } = data

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-bold text-xl tracking-tight">SEO Landing</div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {showCta && ctaLabel && ctaLink && (
            <Button asChild>
              <Link href={ctaLink}>{ctaLabel}</Link>
            </Button>
          )}

          <div className="md:hidden">{/* There will be a mobile menu here */}</div>
        </div>
      </div>
    </header>
  )
}
