/** Priceless Dreams brand palette — business card navy, blue, and white */
export const Brand = {
  navy: '#1B2B39',
  navyDark: '#14202B',
  navyLight: '#243447',
  blue: '#2B6CB0',
  blueBright: '#3182CE',
  blueLight: '#63B3ED',
  white: '#FFFFFF',
  offWhite: '#F7F9FC',
  slate: '#4A5568',
  text: '#1B2B39',
  textOnDark: '#FFFFFF',
  textMuted: '#5A6B7D',
  textMutedOnDark: '#A8B8C8',
  border: 'rgba(27, 43, 57, 0.12)',
  borderOnDark: 'rgba(255, 255, 255, 0.14)',
  card: '#FFFFFF',
  cardShadow: 'rgba(27, 43, 57, 0.08)',
  accent: '#2B6CB0',
  accentSoft: 'rgba(43, 108, 176, 0.12)',
} as const;

const tintColorLight = Brand.blue;
const tintColorDark = Brand.blueLight;

export default {
  light: {
    text: Brand.text,
    background: Brand.offWhite,
    tint: tintColorLight,
    tabIconDefault: Brand.textMuted,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: Brand.textOnDark,
    background: Brand.navy,
    tint: tintColorDark,
    tabIconDefault: Brand.textMutedOnDark,
    tabIconSelected: tintColorDark,
  },
};
