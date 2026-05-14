import type { TeamBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/common/Container';
import { HTag } from '../common/Htag';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { toHref } from '@/lib/utilities/toHref';

type TeamMember = TeamBlock['members'][number];

async function TeamMemberCard({ name, title, bio, image }: TeamMember) {
	const variables = (await getVariables()).variables;

	const imageUrl = typeof image === 'object' && image?.url ? image.url : null;
	const imageAlt = typeof image === 'object' && image?.alt ? image.alt : name;

	return (
		<div className="flex flex-col">
			{imageUrl ? (
				<div className="bg-secondary relative h-20 w-20 overflow-hidden rounded-full">
					<Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
				</div>
			) : (
				<div className="bg-muted h-20 w-20 rounded-full" />
			)}
			<h3 className="mt-4 text-lg font-medium">{contentRender(name, { variables })}</h3>
			<p className="text-muted-foreground text-sm">{contentRender(title, { variables })}</p>
			<p className="text-foreground/90 mt-3">{contentRender(bio, { variables })}</p>
		</div>
	);
}

export async function Team({ eyebrow, title, description, members, joinButton }: TeamBlock) {
	const variables = (await getVariables()).variables;

	if (!members?.length) return null;

	return (
		<section className="py-8 sm:py-20">
			<Container width="wide">
				<div className="max-w-(--breakpoint-xl) mx-auto flex flex-col justify-center">
					{eyebrow && (
						<b className="text-muted-foreground text-sm font-medium uppercase">
							{contentRender(eyebrow, { variables })}
						</b>
					)}

					<HTag level={2} className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
						{contentRender(title, { variables })}
					</HTag>

					<p className="text-muted-foreground mt-3 text-pretty text-lg -tracking-[0.01em] sm:text-xl">
						{contentRender(description, { variables })}
					</p>

					<div className="mt-14 grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 md:grid-cols-4">
						{members.map((member, idx) => (
							<TeamMemberCard key={idx} {...member} />
						))}
					</div>

					{joinButton?.label && joinButton?.link && (
						<div className="mt-12 flex justify-center">
							<Button asChild variant="outline" size="lg">
								<Link href={toHref(joinButton.link)}>
									{contentRender(joinButton.label, { variables })}
								</Link>
							</Button>
						</div>
					)}
				</div>
			</Container>
		</section>
	);
}
