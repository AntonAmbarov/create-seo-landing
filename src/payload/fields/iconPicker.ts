import type { Field } from 'payload';
import * as Icons from 'lucide-react';

const iconNames = Object.keys(Icons).filter(
	(key) =>
		typeof (Icons as any)[key] === 'function' && key !== 'createLucideIcon' && /^[A-Z]/.test(key),
);

export function iconPickerField(name = 'icon', label = 'Icon'): Field {
	return {
		name,
		label,
		type: 'text',
	};
}
