import { CTABlock } from '@/payload/payload-types';
import { Container } from '../common/Container';
import { cn } from '@/lib/utilities/ui';
import { Logo } from '../common/Logo/Logo';
import { Button } from '../ui/button';
import Link from 'next/link';
import { toHref } from '@/lib/utilities/toHref';

export async function CTA({ title, description, button, href }: CTABlock) {
	return (
		<section className={cn('w-full py-16')}>
			<Container width="full">
				<div className="px-0">
					<div className="bg-foreground text-background dark:bg-foreground/7 dark:text-foreground relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center rounded-3xl py-16">
						<Logo />
						<h2 className="mt-10 text-5xl font-medium tracking-tighter">{title}</h2>
						<p className="text-muted-foreground mx-auto mt-6 max-w-xl text-center text-xl/normal">
							{description}
						</p>
						<Button className="mt-8">{href && <Link href={toHref(href)}>{button}</Link>}</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
