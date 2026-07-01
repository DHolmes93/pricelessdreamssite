import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';

import { Brand } from '@/constants/Colors';

type BrandLogoProps = {
  size?: number;
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
};

export function BrandLogo({ size = 96, variant = 'dark', showWordmark = false }: BrandLogoProps) {
  const stroke = variant === 'light' ? Brand.white : Brand.navy;
  const fill = variant === 'light' ? Brand.white : Brand.navy;
  const contrast = variant === 'light' ? Brand.navy : Brand.white;
  const iconHeight = size * 0.62;
  const iconWidth = size;

  return (
    <View style={[styles.wrap, showWordmark && styles.withWordmark]}>
      <Svg width={iconWidth} height={iconHeight} viewBox="0 0 120 74" fill="none">
        <Path
          d="M18 42C10 42 4 36.5 4 29.5C4 23.5 8 18.5 13.5 17C14 11.5 19 7 25 7C28 7 30.8 8.2 33 10.2C35.8 6.8 39.8 4.5 44.5 4.5C52.8 4.5 59.5 11 59.5 19C59.5 19.8 59.4 20.5 59.3 21.2C64.5 22.8 68 27.5 68 33C68 40.2 62 46 54.5 46H18Z"
          stroke={stroke}
          strokeWidth={4}
          strokeLinejoin="round"
        />
        <Path
          d="M58 24H88C93 24 97 28 97 33V52C97 57 93 61 88 61H70L58 68V61C53 61 49 57 49 52V33C49 28 53 24 58 24Z"
          fill={fill}
        />
        <Circle cx="73" cy="42.5" r="10" fill={contrast} />
        <Path
          d="M70.5 39.5C72.2 37.8 74.8 37.8 76.5 39.5C78.2 41.2 78.2 43.8 76.5 45.5C74.8 47.2 72.2 47.2 70.5 45.5"
          stroke={fill}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
        <Line x1="69" y1="47" x2="77" y2="38" stroke={fill} strokeWidth={1.8} strokeLinecap="round" />
        <Path
          d="M86 20L92 16V24L86 20Z"
          fill={fill}
        />
      </Svg>
      {showWordmark ? (
        <View style={styles.wordmark}>
          <Text style={[styles.wordmarkLine, { color: fill }]}>PRICELESS</Text>
          <Text style={[styles.wordmarkLine, { color: fill }]}>DREAMS</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
  },
  withWordmark: {
    gap: 12,
  },
  wordmark: {
    alignItems: 'center',
    gap: 2,
  },
  wordmarkLine: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2.4,
  },
});
