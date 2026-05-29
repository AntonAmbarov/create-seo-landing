import type { Field } from 'payload';

export function blockOptions(): Field {
	return {
		name: 'layoutSettings',
		type: 'group',
		interfaceName: 'LayoutSettings',
		fields: [
			{
				name: 'paddingTop',
				type: 'select',
				dbName: 'pad_t',
				options: ['none', 'small', 'medium', 'large', 'xlarge'],
			},
			{
				name: 'paddingBottom',
				type: 'select',
				dbName: 'pad_btm',
				options: ['none', 'small', 'medium', 'large', 'xlarge'],
			},
			{
				name: 'marginTop',
				type: 'select',
				dbName: 'mar_t',
				options: ['none', 'small', 'medium', 'large', 'xlarge'],
			},
			{
				name: 'marginBottom',
				type: 'select',
				dbName: 'mar_btn',
				options: ['none', 'small', 'medium', 'large', 'xlarge'],
			},
			{
				name: 'width',
				type: 'select',
				options: ['narrow', 'normal', 'wide', 'full'],
			},
			{
				name: 'background',
				type: 'select',
				dbName: 'bg',
				options: ['none', 'light', 'dark', 'accent', 'gradient'],
			},
		],
	};
}
