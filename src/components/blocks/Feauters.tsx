import type { FeautersBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/common/Container';
import { HTag } from '../common/Htag';
import { icons } from 'lucide-react';

type Feature = FeautersBlock['features'][number];
type IconNames = keyof typeof icons;

const toIconName = (name: string): IconNames => {
	return name
		.replace(/[-_\s]+(.)/g, (_, char) => char.toUpperCase())
		.replace(/^(.)/, (char) => char.toLowerCase())
		.replace(/^(.)/, (char) => char.toUpperCase()) as IconNames;
};

async function Feature({ title, description, icon }: Feature) {
	const IconComponent = icon ? icons[toIconName(icon)] : null;
	const variables = (await getVariables()).variables;

	return (
		<div className={cn('flex flex-col gap-3 rounded-md border bg-white p-5')}>
			{IconComponent && (
				<div className="bg-muted mb-5 flex h-10 w-10 items-center justify-center rounded-full">
					<IconComponent />
				</div>
			)}
			<div>
				<span className="text-lg font-medium">{contentRender(title, { variables })}</span>
				<p className="mt-1">{contentRender(description, { variables })}</p>
			</div>
		</div>
	);
}

export async function Feauters({ title, description, features }: FeautersBlock) {
	const variables = (await getVariables()).variables;

	return (
		<section
			className={cn('relative overflow-hidden rounded-md border bg-gray-50 py-12 md:mx-5 md:py-24')}
		>
			<Container width="wide">
				<div className={cn('space-y-4')}>
					<HTag level={2} className={cn('text-center')}>
						{contentRender(title, { variables })}
					</HTag>
					<p
						className={cn(
							'text-muted-foreground mt-3 text-pretty text-center text-lg tracking-[-0.01em] sm:text-2xl',
						)}
					>
						{contentRender(description, { variables })}
					</p>
				</div>
				<div
					className={cn('mx-auto mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3')}
				>
					{features.map((f, i) => (
						<Feature key={i} {...f} />
					))}
				</div>
			</Container>
		</section>
	);
}
