import { StyleSheet, Text, View } from 'react-native';

import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { Brand } from '@/constants/Colors';
import { useIsCompact } from '@/hooks/useIsCompact';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const compact = useIsCompact();

  return (
    <View style={styles.wrap}>
      <CircuitPattern />
      <View style={[styles.content, compact && styles.contentCompact]}>
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
    backgroundColor: Brand.navy,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 36,
    zIndex: 1,
  },
  contentCompact: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 28,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 0.4,
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
