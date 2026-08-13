import { cn } from '@/lib/utilities/ui';

interface StepNumberProps {
	number: number;
	className?: string;
}

export function StepNumber({ number, className }: StepNumberProps) {
	return (
		<div
			className={cn(
				'bg-accent-purple text-accent-purple-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold',
				className,
			)}
		>
			{number}
		</div>
	);
}
