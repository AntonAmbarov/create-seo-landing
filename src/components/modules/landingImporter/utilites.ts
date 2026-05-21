export function validateInput(input: unknown): {
	title: string;
	slug: string;
	blocks?: Array<{ blockType: string; [key: string]: unknown }>;
} {
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

	// if (!Array.isArray(obj.blocks) || obj.blocks.length === 0) {
	// 	/* log */
	// 	console.log('Check 5');
	// 	/* ---- */
	// 	throw new Error('Missing or empty field: blocks (array)');
	// }

	return { title: obj.title, slug: obj.slug };
}
