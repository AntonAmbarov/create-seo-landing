'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utilities/ui';
import { getLayoutSettings } from '@/lib/layout/utils';
import { SPACING } from '@/lib/layout/constants';
import type { LayoutSettings, StatsBlock } from '@/payload/payload-types';
import { TrendingUp, Users, Star, Zap, Globe, BarChart2 } from 'lucide-react';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
	trending: TrendingUp,
	users: Users,
	star: Star,
	zap: Zap,
	globe: Globe,
	chart: BarChart2,
};

export function Stats({
	theme = 'dark',
	eyebrow,
	heading,
	subheading,
	layout = 'row',
	stats = [],
	layoutSettings,
}: StatsBlock) {
	const settings = getLayoutSettings(layoutSettings);
	const marginClasses = cn(
		settings.marginTop && SPACING[settings.marginTop].mt,
		settings.marginBottom && SPACING[settings.marginBottom].mb,
	);

	const sectionRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setVisible(true);
					obs.disconnect();
				}
			},
			{ threshold: 0.2 },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			className={cn('bg-ink-950 section-padding-sm relative overflow-hidden', marginClasses)}
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="via-brand-500/30 absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
				<div className="via-brand-500/20 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
				<div className="bg-brand-500/5 absolute left-1/2 top-1/2 h-96 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
			</div>

			<div className="container-base relative">
				{(eyebrow || heading || subheading) && (
					<div className="mb-12 text-center">
						{eyebrow && <p className="eyebrow text-brand-400 mb-3">{eyebrow}</p>}
						{heading && <h2 className="heading-section text-white">{heading}</h2>}
						{subheading && <p className="heading-sub text-ink-300 mt-4">{subheading}</p>}
					</div>
				)}

				<div
					className={cn(
						'grid',
						layout === 'row'
							? cn(
									stats.length === 2 && 'mx-auto max-w-2xl grid-cols-2 gap-8',
									stats.length === 3 && 'grid-cols-1 gap-8 sm:grid-cols-3',
									stats.length === 4 && 'grid-cols-2 gap-8 md:grid-cols-4',
									stats.length > 4 && 'grid-cols-2 gap-8 md:grid-cols-3',
								)
							: 'grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
					)}
				>
					{stats.map((stat, i) => {
						const Icon = stat.icon ? ICONS[stat.icon] : null;
						return (
							<div
								key={stat.id || i}
								className={cn(
									'text-center transition-all duration-700',
									layout === 'grid' && 'rounded-xl border border-white/10 bg-white/5 p-6',
									visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
								)}
								style={{ transitionDelay: `${i * 100}ms` }}
							>
								{Icon && (
									<div className="bg-brand-500/15 text-brand-400 mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-lg">
										<Icon className="size-5" />
									</div>
								)}
								<div className="flex items-end justify-center gap-0.5">
									<span className="font-display text-5xl font-bold text-white md:text-6xl">
										{stat.value}
									</span>
									{stat.suffix && (
										<span className="font-display text-brand-400 mb-2 text-2xl font-bold">
											{stat.suffix}
										</span>
									)}
								</div>
								<p className="text-ink-300 mt-2 text-sm font-semibold">{stat.label}</p>
								{stat.description && (
									<p className="text-ink-500 mt-1 text-xs">{stat.description}</p>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
