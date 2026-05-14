import type { FaqBlock } from '@/payload/payload-types';
import { cn } from '@/lib/utilities/ui';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { Container } from '@/components/common/Container';
import { HTag } from '../common/Htag';
import { PlusIcon } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export async function Faq({ title, description, items, defaultOpenIndex = 0 }: FaqBlock) {
	const variables = (await getVariables()).variables;

	if (!items?.length) return null;

	return (
		<section className="w-full px-6 py-20">
			<Container width="full">
				<div className="mx-auto w-full max-w-2xl">
					<HTag level={2} className="text-4xl/snug font-medium tracking-[-0.04em]">
						{contentRender(title, { variables })}
					</HTag>
					<p className="text-muted-foreground mt-2 text-xl">
						{contentRender(description, { variables })}
					</p>

					<Accordion
						className="mt-8 space-y-4 sm:mt-10"
						type="single"
						collapsible
						defaultValue={`question-${defaultOpenIndex}`}
					>
						{items.map((item, index) => (
							<AccordionItem
								key={index}
								value={`question-${index}`}
								className="bg-muted rounded-xl border-none px-4"
							>
								<AccordionTrigger className="text-start text-lg [&[data-state=open]>svg]:rotate-45">
									{contentRender(item.question, { variables })}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-base">
									{contentRender(item.answer, { variables })}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</Container>
		</section>
	);
}
