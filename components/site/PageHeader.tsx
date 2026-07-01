import { StyleSheet, Text, View } from 'react-native';

import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { Brand } from '@/constants/Colors';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <View style={styles.wrap}>
      <CircuitPattern />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
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
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 0.4,
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
