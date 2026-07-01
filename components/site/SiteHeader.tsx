import { Link, usePathname } from 'expo-router';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Brand } from '@/constants/Colors';
import { COMPANY } from '@/constants/content';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '/index';
    return pathname === href;
  };

  return (
    <View
      style={[
        styles.wrapper,
        { paddingTop: Math.max(insets.top, Platform.OS === 'web' ? 12 : 0) },
      ]}>
      <View style={styles.inner}>
        <Link href="/" asChild>
          <Pressable style={({ pressed }) => [styles.logoBtn, pressed && styles.pressed]}>
            <Text style={styles.logo}>{COMPANY.name}</Text>
          </Pressable>
        </Link>

        <View style={styles.nav}>
          {NAV.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href} asChild>
                <Pressable
                  style={({ pressed }) => [
                    styles.navItem,
                    active && styles.navItemActive,
                    pressed && styles.pressed,
                  ]}>
                  <Text style={[styles.navText, active && styles.navTextActive]}>{label}</Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Brand.navyLight,
    borderBottomWidth: 1,
    borderBottomColor: Brand.border,
    ...Platform.select({
      web: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
      },
    }),
  },
  inner: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  logoBtn: {
    paddingVertical: 4,
  },
  logo: {
    fontSize: 20,
    fontWeight: '800',
    color: Brand.gold,
    letterSpacing: -0.3,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  navItemActive: {
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
  },
  navText: {
    fontSize: 15,
    fontWeight: '500',
    color: Brand.textMuted,
  },
  navTextActive: {
    color: Brand.gold,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.75,
  },
});
