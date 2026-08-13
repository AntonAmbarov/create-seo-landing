import { SURFACE_THEME, type SurfaceTheme } from '@/lib/layout/surfaceTheme';
import { cn } from '@/lib/utilities/ui';

interface SplitMediaPanelProps {
	media: React.ReactNode;
	children: React.ReactNode;
	mediaPosition?: 'left' | 'right';
	theme?: SurfaceTheme;
	className?: string;
}

export function SplitMediaPanel({
	media,
	children,
	mediaPosition = 'right',
	theme = 'solid',
	className,
}: SplitMediaPanelProps) {
	return (
		<div className={cn('grid overflow-hidden rounded-3xl sm:grid-cols-2', className)}>
			<div
				className={cn(
					'flex flex-col justify-center gap-4 p-8 sm:p-10',
					SURFACE_THEME[theme],
					mediaPosition === 'left' && 'sm:order-2',
				)}
			>
				{children}
			</div>
			<div className={cn('relative min-h-64 w-full', mediaPosition === 'left' && 'sm:order-1')}>
				{media}
			</div>
		</div>
	);
}
