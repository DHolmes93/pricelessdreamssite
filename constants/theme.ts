import { Platform } from 'react-native';

import { Brand } from '@/constants/Colors';

export const Layout = {
  maxWidth: 1120,
  pagePadding: 24,
} as const;

export const Radius = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export const Shadow = {
  card: Platform.select({
    web: {
      boxShadow: '0 1px 2px rgba(27, 43, 57, 0.04), 0 8px 24px rgba(27, 43, 57, 0.07)',
    },
    default: {
      shadowColor: Brand.navy,
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3,
    },
  }),
  cardHover: Platform.select({
    web: {
      boxShadow: '0 4px 8px rgba(27, 43, 57, 0.06), 0 16px 40px rgba(27, 43, 57, 0.1)',
    },
    default: {},
  }),
  header: Platform.select({
    web: {
      boxShadow: '0 1px 0 rgba(27, 43, 57, 0.06), 0 4px 16px rgba(27, 43, 57, 0.04)',
    },
    default: {
      shadowColor: Brand.navy,
      shadowOpacity: 0.06,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
  }),
  button: Platform.select({
    web: {
      boxShadow: '0 2px 8px rgba(43, 108, 176, 0.28)',
    },
    default: {},
  }),
} as const;
