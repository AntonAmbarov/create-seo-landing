import type { TestimonialsBlock } from '@/payload/payload-types';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/common/Container';
import { HTag } from '../common/Htag';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

type Testimonial = TestimonialsBlock['testimonials'][number];

async function TestimonialCard({ name, role, avatar, testimonial }: Testimonial) {
	const variables = (await getVariables()).variables;

	const avatarUrl = typeof avatar === 'object' && avatar?.url ? avatar.url : null;
	const avatarAlt = typeof avatar === 'object' && avatar?.alt ? avatar.alt : name;

	return (
		<div className="border-border/85 bg-card shadow-xs/3 relative flex flex-col rounded-lg border pb-1">
			<p className="grow rounded-t-lg px-5 py-6 text-lg font-medium">
				{contentRender(testimonial, { variables })}
			</p>
			<Separator />
			<div className="flex items-center gap-3 px-5 py-3.5">
				{avatarUrl ? (
					<div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
						<Image src={avatarUrl} alt={avatarAlt} fill className="object-cover" />
					</div>
				) : (
					<div className="bg-muted h-10 w-10 shrink-0 rounded-full" />
				)}
				<div className="flex min-w-0 flex-col">
					<p className="truncate font-medium">{contentRender(name, { variables })}</p>
					<p className="text-muted-foreground truncate text-sm">
						{contentRender(role, { variables })}
					</p>
				</div>
			</div>
		</div>
	);
}

export async function Testimonials({ title, description, testimonials }: TestimonialsBlock) {
	const variables = (await getVariables()).variables;

	if (!testimonials?.length) return null;

	return (
		<section className="py-12 sm:py-20">
			<Container width="wide">
				<HTag
					level={2}
					className="text-center text-4xl font-medium tracking-[-0.04em] md:text-[2.75rem]"
				>
					{contentRender(title, { variables })}
				</HTag>
				<p className="text-muted-foreground mt-2.5 text-balance text-center text-lg tracking-normal sm:text-2xl">
					{contentRender(description, { variables })}
				</p>

				<div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, i) => (
						<TestimonialCard key={i} {...testimonial} />
					))}
				</div>
			</Container>
		</section>
	);
}
