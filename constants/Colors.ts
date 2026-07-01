/** Priceless Dreams brand palette */
export const Brand = {
  navy: '#0a0e1a',
  navyLight: '#121829',
  slate: '#1e2640',
  gold: '#d4af37',
  goldLight: '#f0d78c',
  violet: '#7c5cff',
  violetMuted: '#9b8cff',
  text: '#f4f6fb',
  textMuted: '#9aa3b8',
  border: 'rgba(255, 255, 255, 0.08)',
  card: 'rgba(255, 255, 255, 0.04)',
} as const;

const tintColorLight = Brand.violet;
const tintColorDark = Brand.gold;

export default {
  light: {
    text: Brand.navy,
    background: '#f8f9fc',
    tint: tintColorLight,
    tabIconDefault: '#9aa3b8',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: Brand.text,
    background: Brand.navy,
    tint: tintColorDark,
    tabIconDefault: Brand.textMuted,
    tabIconSelected: tintColorDark,
  },
};
