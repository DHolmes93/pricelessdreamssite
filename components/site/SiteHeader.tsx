import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Href, Link, router, usePathname } from 'expo-router';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { Brand } from '@/constants/Colors';
const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
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
        { paddingTop: Math.max(insets.top, Platform.OS === 'web' ? 10 : 0) },
      ]}>
      <View style={styles.inner}>
        <Link href="/" asChild>
          <Pressable style={({ pressed }) => [styles.logoBtn, pressed && styles.pressed]}>
            <BrandLogo size={42} variant="dark" />
            <View style={styles.logoTextWrap}>
              <Text style={styles.logoTop}>PRICELESS</Text>
              <Text style={styles.logoBottom}>DREAMS</Text>
            </View>
          </Pressable>
        </Link>

        <View style={styles.nav}>
          {NAV.map(({ href, label }) => {
            const active = isActive(href);

            return (
              <Pressable
                key={href}
                accessibilityRole="link"
                onPress={() => router.push(href as Href)}
                style={({ pressed }) => [
                  styles.navItem,
                  active && styles.navItemActive,
                  pressed && styles.pressed,
                ]}>
                <Text style={[styles.navText, active && styles.navTextActive]}>{label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Brand.white,
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
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  logoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 4,
  },
  logoTextWrap: {
    gap: 0,
  },
  logoTop: {
    fontSize: 11,
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: 1.4,
    lineHeight: 13,
  },
  logoBottom: {
    fontSize: 11,
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: 1.4,
    lineHeight: 13,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  navItem: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  navItemActive: {
    backgroundColor: Brand.accentSoft,
  },
  navText: {
    fontSize: 15,
    fontWeight: '600',
    color: Brand.textMuted,
  },
  navTextActive: {
    color: Brand.blue,
  },
  pressed: {
    opacity: 0.75,
  },
});
