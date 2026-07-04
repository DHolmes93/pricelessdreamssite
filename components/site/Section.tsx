import { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { Brand } from '@/constants/Colors';
import { Layout } from '@/constants/theme';
import { useIsCompact } from '@/hooks/useIsCompact';

type SectionProps = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
  style?: ViewStyle;
  variant?: 'light' | 'muted' | 'dark';
  align?: 'left' | 'center';
};

export function Section({
  title,
  subtitle,
  eyebrow,
  children,
  style,
  variant = 'light',
  align = 'left',
}: SectionProps) {
  const compact = useIsCompact();
  const centered = align === 'center';

  return (
    <View
      style={[
        styles.section,
        variant === 'muted' && styles.sectionMuted,
        variant === 'dark' && styles.sectionDark,
        compact && styles.sectionCompact,
        style,
      ]}>
      {(eyebrow || title || subtitle) && (
        <View style={[styles.header, centered && styles.headerCenter, compact && styles.headerCompact]}>
          {eyebrow ? (
            <Text style={[styles.eyebrow, variant === 'dark' && styles.eyebrowDark]}>{eyebrow}</Text>
          ) : null}
          {title ? (
            <Text
              style={[
                styles.title,
                variant === 'dark' && styles.titleDark,
                centered && styles.titleCenter,
                compact && styles.titleCompact,
              ]}>
              {title}
            </Text>
          ) : null}
          {title ? <View style={[styles.rule, centered && styles.ruleCenter, variant === 'dark' && styles.ruleDark]} /> : null}
          {subtitle ? (
            <Text
              style={[
                styles.subtitle,
                variant === 'dark' && styles.subtitleDark,
                centered && styles.subtitleCenter,
              ]}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    paddingVertical: 56,
    backgroundColor: Brand.white,
  },
  sectionMuted: {
    backgroundColor: Brand.offWhite,
  },
  sectionDark: {
    backgroundColor: Brand.navy,
  },
  sectionCompact: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 36,
    maxWidth: 640,
  },
  headerCenter: {
    alignSelf: 'center',
    alignItems: 'center',
    maxWidth: 720,
  },
  headerCompact: {
    marginBottom: 28,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blue,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  eyebrowDark: {
    color: Brand.blueLight,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: -0.6,
    lineHeight: 40,
  },
  titleDark: {
    color: Brand.white,
  },
  titleCenter: {
    textAlign: 'center',
  },
  titleCompact: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.4,
  },
  rule: {
    width: 48,
    height: 3,
    borderRadius: 999,
    backgroundColor: Brand.blue,
    marginTop: 14,
    marginBottom: 14,
  },
  ruleCenter: {
    alignSelf: 'center',
  },
  ruleDark: {
    backgroundColor: Brand.blueLight,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 27,
    color: Brand.textMuted,
  },
  subtitleDark: {
    color: Brand.textMutedOnDark,
  },
  subtitleCenter: {
    textAlign: 'center',
  },
});
