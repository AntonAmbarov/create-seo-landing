import type { FaqBlock, LayoutSettings } from '@/payload/payload-types';
import { contentRender } from '@/lib/utilities/content/contentRender';
import { getVariables } from '@/lib/queries/getVariables';
import { HTag } from '../common/Htag';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { LayoutWrapper } from '../common/LayoutWrapper';
import { removeNulls } from '@/lib/utilities/removeNulls';
import { getLayoutSettings } from '@/lib/layout/utils';

const FAQ_DEFAULT: Partial<LayoutSettings> = {
	width: 'narrow',
	paddingTop: 'medium',
	paddingBottom: 'medium',
	marginTop: 'none',
	marginBottom: 'none',
	background: 'dark',
};

export async function Faq({
	title,
	description,
	items,
	defaultOpenIndex = 0,
	layoutSettings,
}: FaqBlock) {
	const variables = (await getVariables()).variables;

	if (!items?.length) return null;

	const settings = getLayoutSettings(layoutSettings, FAQ_DEFAULT);

	return (
		<LayoutWrapper settings={settings}>
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
						<AccordionTrigger className="text-foreground text-start text-lg [&[data-state=open]>svg]:rotate-45">
							{contentRender(item.question, { variables })}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground text-base">
							{contentRender(item.answer, { variables })}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</LayoutWrapper>
	);
}
