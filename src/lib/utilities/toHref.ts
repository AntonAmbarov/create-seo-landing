import type { UrlObject } from 'url';

type Href = string | UrlObject;

export interface ToHrefOptions {
	/** Base path to prepend (e.g. "/app"). Default: "" */
	basePath?: string;
	slugify?: boolean;
	query?: Record<string, string | number | boolean | undefined>;

	/** Return a structured UrlObject instead of a plain string. Default: false */
	asObject?: boolean;
}

export function toHref(input: string, options: ToHrefOptions = {}): Href {
	const { basePath = '', slugify = true, query, asObject = false } = options;

	let slug = input.trim();

	if (slugify) {
		slug = slug
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[а-яё]/g, (ch) => CYRILLIC_MAP[ch] ?? ch)
			.replace(/[^a-z0-9\s-_/]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-{2,}/g, '-')
			.replace(/^-+|-+$/g, '');
	} else {
		slug = encodeURIComponent(slug).replace(/%2F/gi, '/');
	}

	const base = basePath.replace(/\/+$/, '');
	const pathname = `${base}/${slug}`;

	const queryRecord = query
		? Object.fromEntries(
				Object.entries(query)
					.filter(([, v]) => v !== undefined)
					.map(([k, v]) => [k, String(v)]),
			)
		: undefined;

	if (asObject) {
		const obj: UrlObject = { pathname };
		if (queryRecord && Object.keys(queryRecord).length) obj.query = queryRecord;
		return obj;
	}

	let href = pathname;

	if (queryRecord && Object.keys(queryRecord).length) {
		const qs = new URLSearchParams(queryRecord as Record<string, string>).toString();
		href += `?${qs}`;
	}

	return href;
}

// Minimal Cyrillic → Latin transliteration map
const CYRILLIC_MAP: Record<string, string> = {
	а: 'a',
	б: 'b',
	в: 'v',
	г: 'g',
	д: 'd',
	е: 'e',
	ё: 'yo',
	ж: 'zh',
	з: 'z',
	и: 'i',
	й: 'y',
	к: 'k',
	л: 'l',
	м: 'm',
	н: 'n',
	о: 'o',
	п: 'p',
	р: 'r',
	с: 's',
	т: 't',
	у: 'u',
	ф: 'f',
	х: 'kh',
	ц: 'ts',
	ч: 'ch',
	ш: 'sh',
	щ: 'sch',
	ъ: '',
	ы: 'y',
	ь: '',
	э: 'e',
	ю: 'yu',
	я: 'ya',
};
