import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Brand } from '@/constants/Colors';

type IconBadgeProps = {
  icon: ComponentProps<typeof FontAwesome>['name'];
  label: string;
  variant?: 'onLight' | 'onDark';
};

export function IconBadge({ icon, label, variant = 'onLight' }: IconBadgeProps) {
  const onDark = variant === 'onDark';

  return (
    <View style={styles.row}>
      <View style={[styles.badge, onDark && styles.badgeOnDark]}>
        <FontAwesome name={icon} size={14} color={Brand.white} />
      </View>
      <Text style={[styles.label, onDark && styles.labelOnDark]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Brand.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeOnDark: {
    backgroundColor: Brand.blueBright,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: Brand.text,
    letterSpacing: 0.2,
  },
  labelOnDark: {
    color: Brand.textOnDark,
  },
});
