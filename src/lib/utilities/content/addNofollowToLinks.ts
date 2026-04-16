export function addNofollowToLinks(html: string): string {
	if (!html) return '';

	return html.replace(
		/<a\s+([^>]*?href=["']([^"']*)["'][^>]*?)>/gi,
		(match: string, attributes: string, href: string) => {
			const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

			if (!isExternal) {
				return match;
			}

			const hasRel = /rel\s*=\s*["'][^"']*["']/i.test(attributes);

			let newAttributes = attributes;

			if (hasRel) {
				newAttributes = newAttributes.replace(
					/rel\s*=\s*["']([^"']*)["']/i,
					(_, relValue: string) => {
						const relParts = relValue.split(/\s+/).filter(Boolean);

						if (!relParts.includes('nofollow')) relParts.push('nofollow');
						if (!relParts.includes('noopener')) relParts.push('noopener');
						if (!relParts.includes('noreferrer')) relParts.push('noreferrer');

						return `rel="${relParts.join(' ')}"`;
					},
				);
			} else {
				newAttributes += ' rel="nofollow noopener noreferrer"';
			}

			if (!/target\s*=\s*["']/i.test(newAttributes)) {
				newAttributes += ' target="_blank"';
			}

			return `<a ${newAttributes}>`;
		},
	);
}
