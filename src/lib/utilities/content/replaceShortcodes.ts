import type { Sitevariable } from '@/payload/payload-types';

export function replaceShortcodes(
	conten: string | null | undefined,
	variables: Sitevariable['variables'],
): string {
	if (!conten) return '';

	let result = conten;

	variables &&
		variables.forEach(({ key, value }) => {
			const regexp = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
			result = result.replace(regexp, value || '');
		});

	return result;
}
