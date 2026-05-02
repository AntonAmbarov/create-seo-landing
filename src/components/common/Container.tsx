import { cn } from '@/lib/utilities/ui';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDialogElement> {
	width?: 'narrow' | 'normal' | 'wide' | 'full';
}

export function Container({ width = 'normal', className, children }: ContainerProps) {
	const widthClasses = {
		narrow: 'max-w-3xl',
		normal: 'max-w-5xl',
		wide: 'max-w-7xl',
		full: 'max-w-none',
	};

	return (
		<div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', widthClasses[width], className)}>
			{children}
		</div>
	);
}
