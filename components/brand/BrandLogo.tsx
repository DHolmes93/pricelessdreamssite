import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { Brand } from '@/constants/Colors';

export const BRAND_LOGO_SOURCE = require('@/assets/images/logo.png') as ImageSourcePropType;

type BrandLogoProps = {
  size?: number;
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  compact?: boolean;
};

function Wordmark({
  variant,
  compact,
}: {
  variant: 'dark' | 'light';
  compact?: boolean;
}) {
  const color = variant === 'light' ? Brand.white : Brand.navy;

  return (
    <View style={styles.wordmark}>
      <Text style={[styles.wordmarkLine, compact && styles.wordmarkCompact, { color }]}>
        PRICELESS
      </Text>
      <Text style={[styles.wordmarkLine, compact && styles.wordmarkCompact, { color }]}>
        DREAMS
      </Text>
    </View>
  );
}

export function BrandLogo({
  size = 96,
  variant = 'dark',
  showWordmark = false,
  compact = false,
}: BrandLogoProps) {
  const markSize = compact ? 108 : size;

  return (
    <View style={styles.wrap}>
      <Image
        source={BRAND_LOGO_SOURCE}
        style={{ width: markSize, height: markSize }}
        resizeMode="contain"
        accessibilityLabel="Priceless Dreams logo"
      />
      {showWordmark ? <Wordmark variant={variant} compact={compact} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
  },
  wordmark: {
    alignItems: 'center',
    gap: 2,
    marginTop: 8,
  },
  wordmarkLine: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 3,
  },
  wordmarkCompact: {
    fontSize: 11,
    letterSpacing: 1.4,
    lineHeight: 13,
  },
});
