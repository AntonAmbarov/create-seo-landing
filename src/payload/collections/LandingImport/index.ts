import { slugField, type CollectionConfig } from 'payload';
import { authenticated } from '@/access/authenticated';

import { HeroConfig } from '@/payload/blocks/hero.config';
import { ContactSection } from '@/payload/blocks/contactSection.config';
import { FeautersConfig } from '@/payload/blocks/feauters.config';
import { CTAConfig } from '@/payload/blocks/cta.config';
import { PricingConfig } from '@/payload/blocks/pricing.config';
import { TestimonialsConfig } from '@/payload/blocks/testimonials.config';
import { TeamConfig } from '@/payload/blocks/team.config';
import { FaqConfig } from '@/payload/blocks/faq.config';
import { generateCheatsheet } from './generateCheatsheet';
import { createPage } from './hooks/createPage';

const ALL_BLOCKS = [
	HeroConfig,
	ContactSection,
	FeautersConfig,
	CTAConfig,
	PricingConfig,
	TestimonialsConfig,
	TeamConfig,
	FaqConfig,
];

export const LandingImport: CollectionConfig = {
	slug: 'landing-import',
	labels: {
		singular: 'Landing Import',
		plural: 'Landings Import',
	},
	access: {
		create: authenticated,
		read: authenticated,
		update: () => false,
		delete: authenticated,
	},
	admin: {
		defaultColumns: ['importedSlug', 'status', 'createdAt'],
		description: 'Create landing pages by pasting a JSON object.',
	},
	fields: [
		{
			name: 'json',
			type: 'json',
			required: true,
			label: 'Landing JSON',
			admin: {
				description: generateCheatsheet(ALL_BLOCKS),
			},
		},
		{
			name: 'result',
			type: 'textarea',
			label: 'Result',
			admin: {
				readOnly: true,
			},
		},
	],
	hooks: {
		afterChange: [createPage],
	},
};
