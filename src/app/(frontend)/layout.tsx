import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import React from 'react';

import { Providers } from '@/providers';
import { InitTheme } from '@/providers/Theme/InitTheme';

import './globals.css';
import { cn } from '@/lib/utilities/ui';
import { getServerSideURL } from '@/lib/utilities/getURL';
import { mergeOpenGraph } from '@/lib/utilities/mergeOpenGraph';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { getHeader } from '@/lib/queries/getHeader';
import { getFooter } from '@/lib/queries/getFooter';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const [headerData, footerData] = await Promise.all([getHeader(), getFooter()]);

	return (
		<html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
			<head>
				<InitTheme />
				<link href="/favicon.ico" rel="icon" sizes="32x32" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>
			<body>
				<Providers>
					<Header data={headerData} />
					<main className={cn('flex flex-1 flex-col items-center')}>{children}</main>
					<Footer data={footerData} />
				</Providers>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	metadataBase: new URL(getServerSideURL()),
	openGraph: mergeOpenGraph(),
	twitter: {
		card: 'summary_large_image',
	},
};
