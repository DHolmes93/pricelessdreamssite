import { Href, Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { Brand } from '@/constants/Colors';
import { COMPANY } from '@/constants/content';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <CircuitPattern placement="edge" edgeWidth={100} />
      <View style={styles.inner}>
        <BrandLogo variant="light" compact />
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
    backgroundColor: Brand.navyDark,
    paddingVertical: 44,
    marginTop: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 12,
    zIndex: 1,
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
