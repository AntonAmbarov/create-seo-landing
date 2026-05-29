import { BACKGROUND, SPACING, WIDTH } from './constants';

export type SpacingType = keyof typeof SPACING;
export type BackgroundType = keyof typeof BACKGROUND;
export type WidthType = keyof typeof WIDTH;

export type SettingsType = {
	paddingTop?: SpacingType | null;
	paddingBottom?: SpacingType | null;
	marginTop?: SpacingType | null;
	marginBottom?: SpacingType | null;
	width?: WidthType | null;
	background?: BackgroundType | null;
};
