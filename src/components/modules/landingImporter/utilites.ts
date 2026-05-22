import { Page } from '@/payload/payload-types';
import { Blocks } from '@/types/blocks';

type ValidationResult = {
	title: string;
	slug: string;
	blocks: Blocks;
	meta: Page['meta'];
	noindex: boolean;
};

export function validateInput(input: unknown): ValidationResult {
	if (!input || typeof input !== 'object') {
		throw new Error('JSON must be an object');
	}

	const obj = input as Record<string, unknown>;

	if (!obj.title || typeof obj.title !== 'string') {
		throw new Error('Missing or invalid field: title (string)');
	}

	if (!obj.slug || typeof obj.slug !== 'string') {
		throw new Error('Missing or invalid field: slug (string)');
	}

	if (!/^[a-z0-9-]+$/.test(obj.slug)) {
		throw new Error('Invalid slug: use only lowercase letters, numbers and hyphens');
	}

	let blocks: Blocks = [] as Blocks;
	if (obj.blocks !== undefined) {
		if (!Array.isArray(obj.blocks)) {
			throw new Error('blocks must be an array');
		}
		blocks = obj.blocks as Blocks;
	}

	let meta: Page['meta'] = undefined;
	if (obj.meta !== undefined) {
		if (typeof obj.meta !== 'object' || obj.meta === null) {
			throw new Error('meta must be an object');
		}
		meta = obj.meta as Page['meta'];
	}

	let noindex: boolean = false;
	if (obj.noindex !== undefined) {
		if (typeof obj.noindex !== 'boolean') {
			throw new Error('noindex must be a boolean');
		}
		noindex = obj.noindex;
	}

	if (obj.image !== undefined && typeof obj.image !== 'number') {
		throw new Error('image must be a number (media ID)');
	}

	return {
		title: obj.title,
		slug: obj.slug,
		blocks,
		meta,
		noindex,
	};
}
