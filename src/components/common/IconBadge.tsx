import { icons } from 'lucide-react';

import { cn } from '@/lib/utilities/ui';

type IconNames = keyof typeof icons;

const toIconName = (name: string): IconNames => {
	return name
		.replace(/[-_\s]+(.)/g, (_, char) => char.toUpperCase())
		.replace(/^(.)/, (char) => char.toUpperCase()) as IconNames;
};

const SIZE = {
	sm: { wrapper: 'size-8', icon: 'size-4' },
	md: { wrapper: 'size-10', icon: 'size-5' },
	lg: { wrapper: 'size-12', icon: 'size-6' },
};

interface IconBadgeProps {
	icon: string;
	size?: keyof typeof SIZE;
	className?: string;
}

export function IconBadge({ icon, size = 'md', className }: IconBadgeProps) {
	const Icon = icons[toIconName(icon)];

	if (!Icon) return null;

	return (
		<div
			className={cn(
				'bg-lavender text-accent-purple inline-flex shrink-0 items-center justify-center rounded-full',
				SIZE[size].wrapper,
				className,
			)}
		>
			<Icon className={SIZE[size].icon} />
		</div>
	);
}
