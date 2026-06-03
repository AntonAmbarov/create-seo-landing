import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
import { redirects } from './redirects';

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
	? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
	: process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000';

const nextConfig: NextConfig = {
	images: {
		localPatterns: [
			{
				pathname: '/media/',
			},
		],
		qualities: [100],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.public.blob.vercel-storage.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	webpack: (webpackConfig) => {
		webpackConfig.resolve.extensionAlias = {
			'.cjs': ['.cts', '.cjs'],
			'.js': ['.ts', '.tsx', '.js', '.jsx'],
			'.mjs': ['.mts', '.mjs'],
		};

		return webpackConfig;
	},
	reactStrictMode: true,
	redirects,
	experimental: {
		staleTimes: {
			dynamic: 0,
			static: 30,
		},
	},
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
