import { LayoutSettings } from '@/payload/payload-types';
import { removeNulls } from '../utilities/removeNulls';
import { BACKGROUND, COMMON_DEFAULT_SETTINGS, SPACING, WIDTH } from './constants';
import { cn } from '../utilities/ui';

const normalizeSettings = (
	defaults: Partial<LayoutSettings>,
	userSettings?: LayoutSettings,
): LayoutSettings => {
	const cleanUserSettings = userSettings ? removeNulls(userSettings) : {};
	return { ...defaults, ...cleanUserSettings };
};

export const getDefaultSettings = (defaultSettings?: LayoutSettings) => {
	return { ...COMMON_DEFAULT_SETTINGS, ...defaultSettings };
};

export const getLayoutSettings = (
	userSettings?: LayoutSettings,
	defaultSettings?: LayoutSettings,
) => {
	const settings = normalizeSettings(getDefaultSettings(defaultSettings), userSettings);

	return settings;
};

export const getClassesForSattings = (settings: LayoutSettings) => {
	const { paddingTop, paddingBottom, marginTop, marginBottom, width, background } = settings;

	return {
		wrapper: cn(
			paddingTop && SPACING[paddingTop].pt,
			paddingBottom && SPACING[paddingBottom].pb,
			marginTop && SPACING[marginTop].mt,
			marginBottom && SPACING[marginBottom].mb,
			background && BACKGROUND[background],
		),
		width: cn(width && WIDTH[width]),
	};
};
