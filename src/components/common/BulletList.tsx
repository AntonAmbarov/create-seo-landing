import { cn } from '@/lib/utilities/ui';

interface BulletListProps {
	items: React.ReactNode[];
	marker?: 'dot' | 'dash';
	className?: string;
}

export function BulletList({ items, marker = 'dot', className }: BulletListProps) {
	if (!items.length) return null;

	return (
		<ul className={cn('space-y-3', className)}>
			{items.map((item, index) => (
				<li key={index} className="flex items-start gap-3">
					{marker === 'dot' ? (
						<div className="bg-primary mt-1.5 size-2 shrink-0 rounded-full" />
					) : (
						<span className="font-medium leading-normal">–</span>
					)}
					<span className="text-lg">{item}</span>
				</li>
			))}
		</ul>
	);
}
