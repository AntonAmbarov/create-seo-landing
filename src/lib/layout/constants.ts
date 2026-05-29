import { LayoutSettings } from '@/payload/payload-types';

export const SPACING = {
	none: { py: 'py-0', my: 'my-0', pt: 'pt-0', pb: 'pb-0', mt: 'mt-0', mb: 'mb-0' },
	small: { py: 'py-8', my: 'my-8', pt: 'pt-8', pb: 'pb-8', mt: 'mt-8', mb: 'mb-8' },
	medium: { py: 'py-16', my: 'my-16', pt: 'pt-16', pb: 'pb-16', mt: 'mt-16', mb: 'mb-16' },
	large: { py: 'py-24', my: 'my-24', pt: 'pt-24', pb: 'pb-24', mt: 'mt-24', mb: 'mb-24' },
	xlarge: { py: 'py-32', my: 'my-32', pt: 'pt-32', pb: 'pb-32', mt: 'mt-32', mb: 'mb-32' },
} as const;

export const BACKGROUND = {
	none: '',
	light: 'bg-gray-50',
	dark: 'bg-gray-900 text-white',
	accent: 'bg-primary/5',
	gradient: 'bg-gradient-to-br from-primary/10 via-transparent to-secondary/10',
} as const;

export const WIDTH = {
	narrow: 'max-w-3xl',
	normal: 'max-w-5xl',
	wide: 'max-w-7xl',
	full: 'max-w-none',
} as const;

export const COMMON_DEFAULT_SETTINGS: Partial<LayoutSettings> = {
	width: 'wide',
	paddingTop: 'medium',
	paddingBottom: 'medium',
	marginTop: 'none',
	marginBottom: 'none',
	background: 'none',
};
