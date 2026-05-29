import { Block } from 'payload';
import { blockOptions } from '../fields/blockOptions';

export const TeamConfig: Block = {
	slug: 'team',
	interfaceName: 'TeamBlock',
	labels: {
		singular: 'Team Member',
		plural: 'Team Sections',
	},
	fields: [
		{
			name: 'eyebrow',
			type: 'text',
			label: 'Eyebrow Text',
			defaultValue: 'Our team',
			admin: {
				description: 'Small uppercase text above the title',
			},
		},
		{
			name: 'title',
			type: 'text',
			label: 'Section Title (H2)',
			required: true,
			defaultValue: 'Meet the people behind the product',
		},
		{
			name: 'description',
			type: 'textarea',
			label: 'Section Description',
			defaultValue: "We're a 100% remote team spread all across the world. Join us!",
			admin: {
				description: 'Supporting text below the title',
			},
		},
		{
			name: 'members',
			type: 'array',
			label: 'Team Members',
			required: true,
			minRows: 1,
			fields: [
				{
					name: 'name',
					type: 'text',
					label: 'Name',
					required: true,
				},
				{
					name: 'title',
					type: 'text',
					label: 'Job Title',
					required: true,
				},
				{
					name: 'bio',
					type: 'textarea',
					label: 'Bio',
					required: true,
					admin: {
						description: 'Short biography or background',
					},
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
					label: 'Profile Image',
					required: true,
					admin: {
						description: 'Square photo of the team member',
					},
				},
			],
		},
		{
			name: 'joinButton',
			type: 'group',
			label: 'Join Us Button (optional)',
			admin: {
				description: 'Optional button to link to careers page',
			},
			fields: [
				{
					name: 'label',
					type: 'text',
					label: 'Button Label',
					defaultValue: 'Join our team',
				},
				{
					name: 'link',
					type: 'text',
					label: 'Button Link',
				},
			],
		},
		blockOptions(),
	],
};
