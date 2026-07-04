import FontAwesome from '@expo/vector-icons/FontAwesome';
import type { ComponentProps } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Brand } from '@/constants/Colors';
import { Radius, Shadow } from '@/constants/theme';

type ServiceCardProps = {
  icon: ComponentProps<typeof FontAwesome>['name'];
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <FontAwesome name={icon} size={20} color={Brand.white} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 240,
    padding: 24,
    backgroundColor: Brand.white,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Brand.border,
    ...Shadow.card,
    ...Platform.select({
      web: {
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      },
    }),
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Brand.navy,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Brand.navy,
    marginBottom: 8,
    letterSpacing: -0.2,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: Brand.textMuted,
  },
});
