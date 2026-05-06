import type { GlobalConfig } from 'payload';

export const Contacts: GlobalConfig = {
	slug: 'contacts',
	label: 'Contacts',
	access: {
		read: () => true,
	},
	fields: [
		{ name: 'phone', type: 'number' },
		{ name: 'email', type: 'email' },
		{ name: 'address', type: 'text' },
	],
};
