import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Href, router } from 'expo-router';
import { ComponentProps, ReactNode } from 'react';
import {
  Linking,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { Brand } from '@/constants/Colors';

type ActionButtonProps = {
  href: string;
  label: string;
  icon?: ComponentProps<typeof FontAwesome>['name'];
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
};

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export function openHref(href: string) {
  if (isExternal(href)) {
    if (Platform.OS === 'web') {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      Linking.openURL(href);
    }
    return;
  }

  router.push(href as Href);
}

export function ActionButton({
  href,
  label,
  icon,
  variant = 'primary',
  style,
  textStyle,
  children,
}: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => openHref(href)}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
        style,
        pressed && styles.pressed,
      ]}>
      {children ?? (
        <>
          {icon ? <FontAwesome name={icon} size={18} color={Brand.navy} /> : null}
          <Text style={[styles.label, textStyle]}>{label}</Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primary: {
    backgroundColor: Brand.gold,
  },
  secondary: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.35)',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: Brand.navy,
  },
  pressed: {
    opacity: 0.88,
  },
});
