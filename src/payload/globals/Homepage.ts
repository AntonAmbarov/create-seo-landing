import { authenticated } from '@/access/authenticated';
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished';
import {
	OverviewField,
	MetaTitleField,
	MetaDescriptionField,
	MetaImageField,
} from '@payloadcms/plugin-seo/fields';
import { CollectionConfig } from 'payload';
import {
	HeroConfig,
	ContactSection,
	FeautersConfig,
	CTAConfig,
	PricingConfig,
	TestimonialsConfig,
	TeamConfig,
	FaqConfig,
} from '../blocks';

export const Homepage: CollectionConfig = {
	slug: 'homepage',
	admin: {
		group: 'Глобалы',
		description: 'Главная страница для тенанта',
	},
	access: {
		read: authenticatedOrPublished,
		update: authenticated,
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			defaultValue: 'Homepage',
		},
		{ name: 'slug', type: 'text', defaultValue: '/', hidden: true },
		{
			name: 'noindex',
			type: 'checkbox',
			label: 'Noindex',
			defaultValue: false,
			hidden: true,
		},
		{
			type: 'tabs',
			tabs: [
				{
					label: 'Content',
					fields: [
						{
							name: 'blocks',
							type: 'blocks',
							blocks: [
								HeroConfig,
								ContactSection,
								FeautersConfig,
								CTAConfig,
								PricingConfig,
								TestimonialsConfig,
								TeamConfig,
								FaqConfig,
							],
						},
					],
				},
				{
					name: 'meta',
					label: 'SEO',
					fields: [
						OverviewField({
							titlePath: 'meta.title',
							descriptionPath: 'meta.description',
							imagePath: 'meta.image',
						}),
						MetaTitleField({
							hasGenerateFn: true,
						}),
						MetaDescriptionField({}),
						MetaImageField({
							relationTo: 'media',
							hasGenerateFn: true,
						}),
						{
							name: 'canonicalURL',
							type: 'text',
							label: 'Canonical URL',
						},
					],
				},
			],
		},
	],
};
