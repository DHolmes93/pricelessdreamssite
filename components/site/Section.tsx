import { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { Brand } from '@/constants/Colors';
import { useIsCompact } from '@/hooks/useIsCompact';

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  style?: ViewStyle;
  variant?: 'light' | 'muted';
};

export function Section({ title, subtitle, children, style, variant = 'light' }: SectionProps) {
  const onMuted = variant === 'muted';
  const compact = useIsCompact();

  return (
    <View style={[styles.section, onMuted && styles.sectionMuted, compact && styles.sectionCompact, style]}>
      {(title || subtitle) && (
        <View style={[styles.header, compact && styles.headerCompact]}>
          {title ? <Text style={[styles.title, compact && styles.titleCompact]}>{title}</Text> : null}
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: Brand.white,
  },
  sectionMuted: {
    backgroundColor: Brand.offWhite,
  },
  sectionCompact: {
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  header: {
    marginBottom: 32,
  },
  headerCompact: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Brand.navy,
    letterSpacing: -0.5,
  },
  titleCompact: {
    fontSize: 26,
    letterSpacing: -0.3,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 26,
    color: Brand.textMuted,
    maxWidth: 560,
  },
});
