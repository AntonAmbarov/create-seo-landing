import Link from 'next/link';
import type { Footer as FooterType } from '@/payload/payload-types';

interface FooterProps {
	data: FooterType;
}

export function Footer({ data }: FooterProps) {
	const { columns, copyright } = data;

	return (
		<footer className="border-t bg-background mt-auto">
			<div className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{columns?.map((column, index) => (
						<div key={index}>
							{column.title && (
								<h4 className="font-semibold mb-4 text-foreground">{column.title}</h4>
							)}

							{column.links && column.links.length > 0 && (
								<ul className="space-y-3">
									{column.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<Link
												href={link.link}
												target={link.isExternal ? '_blank' : undefined}
												rel={link.isExternal ? 'noopener noreferrer' : undefined}
												className="text-sm text-muted-foreground hover:text-foreground transition-colors"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>

				{copyright && (
					<div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
						{copyright}
					</div>
				)}
			</div>
		</footer>
	);
}
