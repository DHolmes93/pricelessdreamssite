import { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { Brand } from '@/constants/Colors';

type SectionProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  style?: ViewStyle;
  variant?: 'light' | 'muted';
};

export function Section({ title, subtitle, children, style, variant = 'light' }: SectionProps) {
  const onMuted = variant === 'muted';

  return (
    <View style={[styles.section, onMuted && styles.sectionMuted, style]}>
      {(title || subtitle) && (
        <View style={styles.header}>
          {title ? (
            <Text style={[styles.title, onMuted && styles.titleOnDark]}>{title}</Text>
          ) : null}
          {subtitle ? (
            <Text style={[styles.subtitle, onMuted && styles.subtitleOnDark]}>{subtitle}</Text>
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
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: Brand.white,
  },
  sectionMuted: {
    backgroundColor: Brand.offWhite,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Brand.navy,
    letterSpacing: -0.5,
  },
  titleOnDark: {
    color: Brand.textOnDark,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 26,
    color: Brand.textMuted,
    maxWidth: 560,
  },
  subtitleOnDark: {
    color: Brand.textMutedOnDark,
  },
});
