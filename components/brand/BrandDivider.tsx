import { StyleSheet, View } from 'react-native';

import { Brand } from '@/constants/Colors';

type BrandDividerProps = {
  color?: string;
  width?: number | `${number}%`;
  variant?: 'onDark' | 'onLight';
};

export function BrandDivider({
  color,
  width = '72%',
  variant = 'onDark',
}: BrandDividerProps) {
  const lineColor = color ?? (variant === 'onDark' ? Brand.blueBright : Brand.blue);

  return (
    <View style={[styles.wrap, { width }]}>
      <View style={[styles.line, { backgroundColor: lineColor }]} />
      <View style={[styles.dot, { backgroundColor: lineColor }]} />
      <View style={[styles.line, { backgroundColor: lineColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    maxWidth: 220,
  },
  line: {
    flex: 1,
    height: 2,
    borderRadius: 999,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
