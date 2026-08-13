import Image from 'next/image';
import { Button } from '@/components/ui/button';

import type { HeroBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/common/_Container';
import { HTag } from '../common/Htag';
import { SURFACE_THEME } from '@/lib/layout/constants';
import { BulletList } from '../common/BulletList';

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
		<section
			className={cn(
				'bg-background round relative mt-12 overflow-hidden rounded-md py-12 md:py-24',
				SURFACE_THEME['solid'],
			)}
		>
			<Container width="wide">
				<div className={cn('grid grid-cols-1 items-center gap-12 lg:grid-cols-2')}>
					<div className={cn('space-y-8')}>
						<div className="space-y-4">
							<HTag level={1}>{contentRender(title, { variables, addNofollow: true })}</HTag>

							{description && (
								<div className="max-w-2xl text-xl">
									{contentRender(description, { variables, addNofollow: true })}
								</div>
							)}
						</div>

						{bullets && bullets.length > 0 && (
							<BulletList marker="dash" items={bullets.map((b) => b.text)} />
						)}

						{(primaryCta || secondaryCta) && (
							<div className="flex flex-wrap gap-4 pt-4">
								{primaryCta?.label && (
									<Button variant="secondary" size="lg" asChild>
										<a href={primaryCta.link}>{primaryCta.label}</a>
									</Button>
								)}
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
