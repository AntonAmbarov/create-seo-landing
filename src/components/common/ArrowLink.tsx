import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utilities/ui';

interface ArrowLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	newTab?: boolean;
}

export function ArrowLink({ href, children, className, newTab }: ArrowLinkProps) {
	const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {};

	return (
		<Link
			href={href}
			className={cn('inline-flex items-center gap-3 text-base font-medium', className)}
			{...newTabProps}
		>
			<span>{children}</span>
			<span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-current">
				<ArrowRight className="size-3.5" />
			</span>
		</Link>
	);
}
