import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Brand } from '@/constants/Colors';
import { COMPANY } from '@/constants/content';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <View style={styles.inner}>
        <Text style={styles.logo}>{COMPANY.name}</Text>
        <Text style={styles.copy}>© {year} {COMPANY.name}. All rights reserved.</Text>
        <View style={styles.links}>
          <Link href="/" style={styles.link}>
            <Text style={styles.linkText}>Home</Text>
          </Link>
          <Link href="/contact" style={styles.link}>
            <Text style={styles.linkText}>Contact</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: Brand.border,
    backgroundColor: Brand.navyLight,
    paddingVertical: 40,
    marginTop: 24,
  },
  inner: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    fontSize: 18,
    fontWeight: '700',
    color: Brand.gold,
  },
  copy: {
    fontSize: 14,
    color: Brand.textMuted,
  },
  links: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 8,
  },
  link: {},
  linkText: {
    fontSize: 15,
    color: Brand.violetMuted,
    fontWeight: '500',
  },
});
