import { StyleSheet, Text, View } from 'react-native';

import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { Brand } from '@/constants/Colors';
import { Layout } from '@/constants/theme';
import { useIsCompact } from '@/hooks/useIsCompact';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const compact = useIsCompact();

  return (
    <View style={styles.wrap}>
      <CircuitPattern placement="edge" edgeWidth={100} />
      <View style={[styles.content, compact && styles.contentCompact]}>
        <Text style={styles.eyebrow}>Priceless Dreams</Text>
        <Text style={[styles.title, compact && styles.titleCompact]}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.rule} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    backgroundColor: Brand.navyDark,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    paddingTop: 48,
    paddingBottom: 40,
    zIndex: 1,
  },
  contentCompact: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 32,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blueLight,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: -0.4,
    lineHeight: 48,
  },
  titleCompact: {
    fontSize: 32,
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 26,
    color: Brand.textMutedOnDark,
    maxWidth: 560,
  },
  rule: {
    width: 72,
    height: 3,
    borderRadius: 999,
    backgroundColor: Brand.blueBright,
    marginTop: 20,
  },
});
