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

const mockHeaderData = {
	id: 2,
	navItems: [
		{
			label: 'О нас',
			link: '/#',
			id: 'about',
		},
		{
			label: 'Услуги',
			link: '/#',
			isExternal: false,
			id: 'services',
		},
		{
			label: 'Блог',
			link: '/#',
			id: 'blog',
		},
		{
			label: 'Контакты',
			link: '/#',
			id: 'contact',
		},
	],
	showCta: true,
	ctaLabel: 'Открыть счет',
	ctaLink: '/#',
	createdAt: '2026-01-15T10:00:00.000Z',
	updatedAt: '2026-08-19T14:30:00.000Z',
};

const mockFooterData = {
	id: 1,
	columns: [
		{
			title: 'Компания',
			links: [
				{
					label: 'О нас',
					link: '/#',
					isExternal: false,
				},
				{
					label: 'Команда',
					link: '/#',
					isExternal: false,
				},
				{
					label: 'Блог',
					link: '/#',
					isExternal: false,
				},
			],
		},
		{
			title: 'Услуги',
			links: [
				{
					label: 'Расчетный счет',
					link: '/#',
					isExternal: false,
				},
				{
					label: 'ВЭД',
					link: '/#',
					isExternal: false,
				},
				{
					label: 'ЭДО',
					link: '/#',
					isExternal: false,
				},
			],
		},
		{
			title: 'Поддержка',
			links: [
				{
					label: 'FAQ',
					link: '/faq',
					isExternal: false,
				},
				{
					label: 'Документация',
					link: '/docs',
					isExternal: false,
				},
				{
					label: 'Контакты',
					link: '/contact',
					isExternal: false,
				},
			],
		},
		{
			title: 'Социальные сети',
			links: [
				{
					label: 'Telegram',
					link: 'https://t.me/company',
					isExternal: true,
				},
				{
					label: 'GitHub',
					link: 'https://github.com/company',
					isExternal: true,
				},
				{
					label: 'YouTube',
					link: 'https://youtube.com/company',
					isExternal: true,
				},
			],
		},
	],
	copyright: '© 2026 ООО Точка Банк',
	updatedAt: '2026-08-19T14:30:00.000Z',
	createdAt: '2026-01-15T10:00:00.000Z',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// const [headerData, footerData] = await Promise.all([getHeader(), getFooter()]);

	return (
		<html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
			<head>
				<InitTheme />
				<link href="/favicon.ico" rel="icon" sizes="32x32" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>
			<body>
				<Providers>
					{/* <Header data={headerData} /> */}
					<Header data={mockHeaderData} />

					<main className={cn('flex flex-1 flex-col items-center')}>{children}</main>
					{/* <Footer data={footerData} /> */}
					<Footer data={mockFooterData} />
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
