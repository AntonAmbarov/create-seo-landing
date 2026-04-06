import Image from 'next/image'
import { Button } from '@/components/ui/button'

import type { HeroBlock } from '@/payload/payload-types'
import { cn } from '@/lib/utilities/ui'

export function Hero({ title, description, bullets, primaryCta, secondaryCta, image }: HeroBlock) {
  const imageUrl = typeof image === 'object' && image?.url ? image.url : null
  const imageAlt = typeof image === 'object' && image?.alt ? image.alt : title

  return (
    <section className={cn('relative overflow-hidden bg-background py-16 md:py-24')}>
      <div className="container mx-auto px-6">
        <div className={cn('grid gap-12 items-center grid-cols-1 lg:grid-cols-2')}>
          <div className={cn('space-y-8')}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {title}
              </h1>

              {description && (
                <div className="text-xl text-muted-foreground max-w-2xl">{description}</div>
              )}
            </div>

            {bullets && bullets.length > 0 && (
              <ul className="space-y-3">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-lg">{bullet.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4 pt-4">
                {primaryCta?.label && (
                  <Button size="lg" asChild>
                    <a href={primaryCta.link}>{primaryCta.label}</a>
                  </Button>
                )}

                {/* secondaryCta?.label && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={secondaryCta.link}>{secondaryCta.label}</a>
                  </Button>
                )*/}
              </div>
            )}
          </div>

          {imageUrl && (
            <div className={cn('relative lg:order-1')}>
              <div className={cn('relative aspect-[16/10] w-full overflow-hidden rounded-2xl')}>
                <Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
