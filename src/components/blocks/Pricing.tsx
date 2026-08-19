import type { PricingBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { HTag } from '../common/Htag';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { toHref } from '@/lib/utilities/toHref';
import { getLayoutSettings } from '@/lib/layout/utils';
import { LayoutWrapper } from '../common/LayoutWrapper';
import { SURFACE_THEME } from '@/lib/layout/constants';

type Plan = PricingBlock['plans'][number];

async function PricingPlan({ plan }: { plan: Plan }) {
	const variables = (await getVariables()).variables;
	const theme = plan.isPopular ? SURFACE_THEME['solid'] : SURFACE_THEME['soft'];

	return (
		<div className={cn('items-justify relative flex flex-col rounded-lg p-6', theme)}>
			{plan.isPopular && (
				<Badge className="absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2">
					Most Popular
				</Badge>
			)}

			<h3 className="text-lg font-medium">{contentRender(plan.name, { variables })}</h3>
			<p className="font-satoshi mt-2 text-4xl font-semibold">${plan.price}</p>
			<p className="mt-4 font-medium">{contentRender(plan.description, { variables })}</p>
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

export async function Pricing({ title, description, plans, layoutSettings }: PricingBlock) {
	const variables = (await getVariables()).variables;
	const settings = getLayoutSettings(layoutSettings);

	return (
		<LayoutWrapper settings={settings}>
			<HTag
				level={2}
				className="text-center text-4xl font-medium tracking-[-0.04em] sm:text-[2.75rem]"
			>
				{contentRender(title, { variables })}
			</HTag>
			<p className="text-muted-foreground mt-3 text-center text-xl -tracking-[0.01em] md:text-2xl">
				{contentRender(description, { variables })}
			</p>

			<div className="mx-auto mt-12 grid grid-cols-1 items-stretch gap-12 sm:mt-16 lg:grid-cols-3">
				{plans.map((plan, i) => (
					<PricingPlan key={i} plan={plan} />
				))}
			</div>
		</LayoutWrapper>
	);
}
