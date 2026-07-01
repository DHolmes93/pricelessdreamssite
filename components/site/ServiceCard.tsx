import FontAwesome from '@expo/vector-icons/FontAwesome';
import type { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Brand } from '@/constants/Colors';

type ServiceCardProps = {
  icon: ComponentProps<typeof FontAwesome>['name'];
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <FontAwesome name={icon} size={22} color={Brand.white} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 220,
    padding: 20,
    backgroundColor: Brand.offWhite,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Brand.border,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Brand.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Brand.navy,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: Brand.textMuted,
  },
});
