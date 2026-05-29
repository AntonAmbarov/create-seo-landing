import { SettingsType } from '@/lib/layout/types';
import { getClassesForSattings } from '@/lib/layout/utils';
import { cn } from '@/lib/utilities/ui';
import { HTMLAttributes } from 'react';

interface LayoutWrapperProps extends HTMLAttributes<HTMLDivElement> {
	settings: SettingsType;
}

export function LayoutWrapper({ settings, children, className }: LayoutWrapperProps) {
	if (!children) return null;

	const classes = getClassesForSattings(settings);

	return (
		<section className={cn('w-full', classes.wrapper, className)}>
			<div className={cn('mx-auto px-4 sm:px-6 lg:px-8', classes.width)}>{children}</div>
		</section>
	);
}
