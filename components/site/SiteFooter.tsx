import { Href, Link } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { Brand } from '@/constants/Colors';
import { COMPANY } from '@/constants/content';
import { Layout } from '@/constants/theme';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Get in touch' },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <CircuitPattern placement="edge" edgeWidth={100} />
      <View style={styles.inner}>
        <View style={styles.columns}>
          <View style={styles.brandCol}>
            <BrandLogo variant="light" compact />
            <Text style={styles.tagline}>{COMPANY.tagline}</Text>
          </View>

          <View style={styles.linkCol}>
            <Text style={styles.colTitle}>Navigate</Text>
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link key={href} href={href as Href} style={styles.link}>
                <Text style={styles.linkText}>{label}</Text>
              </Link>
            ))}
          </View>

          <View style={styles.contactCol}>
            <Text style={styles.colTitle}>Reach us</Text>
            <Text style={styles.contactLine}>{COMPANY.email}</Text>
            <Text style={styles.contactLine}>{COMPANY.phone}</Text>
            <Text style={styles.contactLine}>{COMPANY.website}</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.copy}>
            © {year} {COMPANY.name}. All rights reserved.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: Brand.borderOnDark,
    backgroundColor: Brand.navyDark,
    paddingVertical: 56,
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    zIndex: 1,
    gap: 40,
  },
  columns: {
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    flexWrap: 'wrap',
    gap: 36,
    justifyContent: 'space-between',
  },
  brandCol: {
    flex: Platform.select({ web: 1.2, default: undefined }),
    minWidth: 220,
    gap: 14,
    alignItems: Platform.select({ web: 'flex-start', default: 'center' }),
  },
  tagline: {
    fontSize: 15,
    lineHeight: 24,
    color: Brand.textMutedOnDark,
    maxWidth: 280,
    textAlign: Platform.select({ web: 'left', default: 'center' }),
  },
  linkCol: {
    minWidth: 120,
    gap: 10,
    alignItems: Platform.select({ web: 'flex-start', default: 'center' }),
  },
  contactCol: {
    minWidth: 200,
    gap: 8,
    alignItems: Platform.select({ web: 'flex-start', default: 'center' }),
  },
  colTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blueLight,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  link: {},
  linkText: {
    fontSize: 15,
    color: Brand.textMutedOnDark,
    fontWeight: '500',
  },
  contactLine: {
    fontSize: 15,
    color: Brand.textMutedOnDark,
    lineHeight: 22,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: Brand.borderOnDark,
    paddingTop: 24,
    alignItems: 'center',
  },
  copy: {
    fontSize: 13,
    color: Brand.textMutedOnDark,
  },
});
