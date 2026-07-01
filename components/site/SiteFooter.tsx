import { Href, Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { Brand } from '@/constants/Colors';
import { COMPANY } from '@/constants/content';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <View style={styles.inner}>
        <View style={styles.brandRow}>
          <BrandLogo size={36} variant="light" />
          <View>
            <Text style={styles.logoTop}>PRICELESS</Text>
            <Text style={styles.logoBottom}>DREAMS</Text>
          </View>
        </View>
        <Text style={styles.copy}>
          © {year} {COMPANY.name}. All rights reserved.
        </Text>
        <Text style={styles.website}>{COMPANY.website}</Text>
        <View style={styles.links}>
          <Link href="/" style={styles.link}>
            <Text style={styles.linkText}>Home</Text>
          </Link>
          <Link href="/contact" style={styles.link}>
            <Text style={styles.linkText}>Contact</Text>
          </Link>
          <Link href={'/products' as Href} style={styles.link}>
            <Text style={styles.linkText}>Products</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: Brand.borderOnDark,
    backgroundColor: Brand.navy,
    paddingVertical: 44,
    marginTop: 0,
  },
  inner: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 12,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoTop: {
    fontSize: 12,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 1.6,
    lineHeight: 14,
  },
  logoBottom: {
    fontSize: 12,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 1.6,
    lineHeight: 14,
  },
  copy: {
    fontSize: 14,
    color: Brand.textMutedOnDark,
  },
  website: {
    fontSize: 14,
    fontWeight: '600',
    color: Brand.blueLight,
  },
  links: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 8,
  },
  link: {},
  linkText: {
    fontSize: 15,
    color: Brand.blueLight,
    fontWeight: '600',
  },
});
