import type { GlobalConfig } from 'payload';

export const Header: GlobalConfig = {
	slug: 'header',
	label: 'Header',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'navItems',
			type: 'array',
			label: 'Navigation Menu',
			fields: [
				{
					name: 'label',
					type: 'text',
					required: true,
					label: 'Link Text',
				},
				{
					name: 'link',
					type: 'text',
					required: true,
					label: 'Link URL',
				},
				{
					name: 'isExternal',
					type: 'checkbox',
					label: 'Open in new tab',
					defaultValue: false,
				},
			],
			maxRows: 6,
			admin: {
				initCollapsed: true,
				description: 'Main navigation items',
			},
		},
		{
			name: 'showCta',
			type: 'checkbox',
			label: 'Show CTA Button',
			defaultValue: true,
		},
		{
			name: 'ctaLabel',
			type: 'text',
			label: 'CTA Button Text',
			defaultValue: 'Get Started',
			admin: {
				condition: (_, siblingData) => siblingData.showCta === true,
			},
		},
		{
			name: 'ctaLink',
			type: 'text',
			label: 'CTA Button Link',
			defaultValue: '/contact',
			admin: {
				condition: (_, siblingData) => siblingData.showCta === true,
			},
		},
	],
};
