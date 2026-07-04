import { Href, Link, router, usePathname } from 'expo-router';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { ActionButton } from '@/components/site/ActionButton';
import { Brand } from '@/constants/Colors';
import { Layout, Shadow } from '@/constants/theme';
import { useIsCompact } from '@/hooks/useIsCompact';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const compact = useIsCompact();

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
            <BrandLogo variant="dark" compact />
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
          {!compact ? (
            <ActionButton
              href="/contact"
              label="Get in touch"
              style={styles.navCta}
              textStyle={styles.navCtaText}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderBottomWidth: 1,
    borderBottomColor: Brand.border,
    ...Shadow.header,
    ...Platform.select({
      web: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      },
    }),
  },
  inner: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  logoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
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
  navCta: {
    marginLeft: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },
  navCtaText: {
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
