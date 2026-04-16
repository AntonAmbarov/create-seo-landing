import { Sitevariable } from '@/payload/payload-types';
import { replaceShortcodes } from './replaceShortcodes';
import { addNofollowToLinks } from './addNofollowToLinks';

type ContentRenderOptions = {
	variables?: Sitevariable['variables'];
	addNofollow?: boolean;
};

export function contentRender(
	html: string | null | undefined,
	options: ContentRenderOptions,
): string {
	if (!html) return '';

	let result = html;

	if (options.variables) {
		result = replaceShortcodes(result, options.variables);
	}

	if (options.addNofollow !== false) {
		result = addNofollowToLinks(result);
	}

	return result;
}
