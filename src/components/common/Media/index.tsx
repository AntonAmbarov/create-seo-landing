import NextImage from 'next/image';

import type { Media as MediaType } from '@/payload/payload-types';
import { getMediaUrl } from '@/lib/utilities/getMediaUrl';
import { cn } from '@/lib/utilities/ui';

type Props = {
	resource?: MediaType | number;
	alt?: string;
	className?: string;
	fill?: boolean;
	priority?: boolean;
	sizes?: string;
	width?: number;
	height?: number;
};

export function Media({
	resource,
	alt = '',
	className,
	fill = false,
	priority = false,
	sizes,
	width,
	height,
}: Props) {
	if (!resource) return null;

	let src: string;
	let finalAlt = alt;
	let finalWidth = width;
	let finalHeight = height;

	if (typeof resource === 'object') {
		src = getMediaUrl(resource.url);
		finalAlt = alt || resource.alt || '';
		finalWidth = width || resource.width || undefined;
		finalHeight = height || resource.height || undefined;
	} else {
		src = '';
	}

	return (
		<div className={cn('relative overflow-hidden', className)}>
			<NextImage
				src={src}
				alt={finalAlt}
				fill={fill}
				width={!fill ? finalWidth : undefined}
				height={!fill ? finalHeight : undefined}
				priority={priority}
				quality={90}
				sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
				className="object-cover"
			/>
		</div>
	);
}
