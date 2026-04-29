import Image from 'next/image';
import { Button } from '@/components/ui/button';

import type { HeroBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/layouts/Container';

export async function Hero({
	title,
	description,
	bullets,
	primaryCta,
	secondaryCta,
	image,
}: HeroBlock) {
	const imageUrl = typeof image === 'object' && image?.url ? image.url : null;
	const imageAlt = typeof image === 'object' && image?.alt ? image.alt : title;
	const variables = (await getVariables()).variables;

	return (
		<section className={cn('bg-background relative overflow-hidden py-12 md:py-24')}>
			<Container width="wide">
				<div className={cn('grid grid-cols-1 items-center gap-12 lg:grid-cols-2')}>
					<div className={cn('space-y-8')}>
						<div className="space-y-4">
							<h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
								{contentRender(title, { variables, addNofollow: true })}
							</h1>

							{description && (
								<div className="text-muted-foreground max-w-2xl text-xl">
									{contentRender(description, { variables, addNofollow: true })}
								</div>
							)}
						</div>

						{bullets && bullets.length > 0 && (
							<ul className="space-y-3">
								{bullets.map((bullet, index) => (
									<li key={index} className="flex items-start gap-3">
										<div className="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" />
										<span className="text-lg">
											{contentRender(bullet.text, { variables, addNofollow: true })}
										</span>
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
							<div className={cn('aspect-16/10 relative w-full overflow-hidden rounded-2xl')}>
								<Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority />
							</div>
						</div>
					)}
				</div>
			</Container>
		</section>
	);
}
