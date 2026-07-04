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
import { Radius, Shadow } from '@/constants/theme';

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
          {icon ? (
            <FontAwesome
              name={icon}
              size={18}
              color={variant === 'primary' ? Brand.white : Brand.blue}
            />
          ) : null}
          <Text
            style={[
              styles.label,
              variant === 'primary' ? styles.labelPrimary : styles.labelSecondary,
              textStyle,
            ]}>
            {label}
          </Text>
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
    borderRadius: Radius.sm,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  primary: {
    backgroundColor: Brand.blue,
    ...Shadow.button,
  },
  secondary: {
    backgroundColor: Brand.accentSoft,
    borderWidth: 1,
    borderColor: 'rgba(43, 108, 176, 0.28)',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    flexShrink: 1,
  },
  labelPrimary: {
    color: Brand.white,
  },
  labelSecondary: {
    color: Brand.blue,
  },
  pressed: {
    opacity: 0.88,
  },
});
