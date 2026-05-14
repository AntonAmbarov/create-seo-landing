import type { PricingBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/common/Container';
import { HTag } from '../common/Htag';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { toHref } from '@/lib/utilities/toHref';

type Plan = PricingBlock['plans'][number];

async function PricingPlan({ plan }: { plan: Plan }) {
	const variables = (await getVariables()).variables;

	return (
		<div
			className={cn('border-border/85 bg-card shadow-xs/3 relative rounded-lg border p-6', {
				'border-primary border-2 py-10': plan.isPopular,
			})}
		>
			{plan.isPopular && (
				<Badge className="absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2">
					Most Popular
				</Badge>
			)}
			<h3 className="text-lg font-medium">{contentRender(plan.name, { variables })}</h3>
			<p className="font-satoshi mt-2 text-4xl font-semibold">${plan.price}</p>
			<p className="text-muted-foreground mt-4 font-medium">
				{contentRender(plan.description, { variables })}
			</p>
			<Separator className="my-4" />
			<ul className="space-y-2">
				{plan.features.map((feature, idx) => (
					<li className="flex items-start gap-2" key={idx}>
						<CircleCheck className="mt-1 h-4 w-4 text-green-600" />
						{contentRender(feature.feature, { variables })}
					</li>
				))}
			</ul>
			<Button
				className="mt-6 w-full"
				size="lg"
				variant={plan.isPopular ? 'default' : 'outline'}
				asChild
			>
				<Link href={toHref(plan.buttonLink)}>{contentRender(plan.buttonText, { variables })}</Link>
			</Button>
		</div>
	);
}

export async function Pricing({ title, description, plans }: PricingBlock) {
	const variables = (await getVariables()).variables;

	return (
		<section className="px-6 py-20">
			<Container width="wide">
				<HTag
					level={2}
					className="text-center text-4xl font-medium tracking-[-0.04em] sm:text-[2.75rem]"
				>
					{contentRender(title, { variables })}
				</HTag>
				<p className="text-muted-foreground mt-3 text-center text-xl -tracking-[0.01em] md:text-2xl">
					{contentRender(description, { variables })}
				</p>

				<div className="max-w-(--breakpoint-lg) mx-auto mt-12 grid grid-cols-1 items-center gap-8 sm:mt-16 lg:grid-cols-3">
					{plans.map((plan, i) => (
						<PricingPlan key={i} plan={plan} />
					))}
				</div>
			</Container>
		</section>
	);
}
