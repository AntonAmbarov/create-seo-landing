import { cn } from '@/lib/utilities/ui';

interface HTagProps {
	level: 1 | 2 | 3 | 4;
	children: React.ReactNode;
	className?: string;
}

const sizeMap: Record<HTagProps['level'], string> = {
	1: 'text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl',
	2: 'text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
	3: 'text-2xl font-semibold tracking-tight md:text-3xl',
	4: 'text-xl font-semibold md:text-2xl',
};

export const HTag = ({ level, children, className }: HTagProps) => {
	const Tag = `h${level}` as const;
	return <Tag className={cn('text-foreground', sizeMap[level], className)}>{children}</Tag>;
};
