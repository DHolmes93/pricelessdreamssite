import { Platform, StyleSheet, Text, View } from 'react-native';

import { BrandDivider } from '@/components/brand/BrandDivider';
import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { ActionButton } from '@/components/site/ActionButton';
import { IconBadge } from '@/components/site/IconBadge';
import { Brand } from '@/constants/Colors';
import { COMPANY, FOUNDER_ROLES } from '@/constants/content';

export function SiteHero() {
  return (
    <View style={styles.hero}>
      <View style={styles.brandSide}>
        <CircuitPattern placement="edge" edgeWidth={100} />
        <View style={styles.brandContent}>
          <Text style={styles.brandNameTop}>PRICELESS</Text>
          <Text style={styles.brandNameBottom}>DREAMS</Text>
          <BrandDivider width="64%" />
          <Text style={styles.website}>{COMPANY.website}</Text>
        </View>
      </View>

      <View style={styles.contentColumn}>
        <View style={styles.contentSide}>
          {Platform.OS === 'web' ? <View style={styles.curveAccent} /> : null}

          <Text style={styles.eyebrow}>{COMPANY.founder.title.toUpperCase()}</Text>
          <Text style={styles.headline}>{COMPANY.founder.name}</Text>
          <View style={styles.titleRule} />
          <Text style={styles.tagline}>{COMPANY.tagline}</Text>
          <Text style={styles.description}>{COMPANY.description}</Text>

          <View style={styles.actions}>
            <ActionButton href="/contact" label="Get in touch" style={styles.cta} />
            <ActionButton href="/products" label="View products" style={styles.cta} />
          </View>

          <View style={styles.roles}>
            {FOUNDER_ROLES.map((role) => (
              <IconBadge key={role.label} icon={role.icon} label={role.label} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    backgroundColor: Brand.navyDark,
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    minHeight: Platform.select({ web: 520, default: undefined }),
  },
  brandSide: {
    flex: Platform.select({ web: 0.42, default: undefined }),
    backgroundColor: Brand.navyDark,
    paddingHorizontal: Platform.select({ web: 40, default: 28 }),
    paddingVertical: Platform.select({ web: 64, default: 44 }),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: Platform.select({ web: 520, default: 340 }),
    borderRightWidth: Platform.select({ web: 1, default: 0 }),
    borderRightColor: Brand.borderOnDark,
  },
  contentColumn: {
    flex: 1,
    backgroundColor: Brand.white,
    minWidth: 0,
    justifyContent: 'center',
  },
  brandContent: {
    alignItems: 'center',
    gap: 16,
    zIndex: 1,
    maxWidth: 300,
    paddingHorizontal: 8,
  },
  brandNameTop: {
    fontSize: Platform.select({ web: 28, default: 24 }),
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 4,
  },
  brandNameBottom: {
    marginTop: -2,
    fontSize: Platform.select({ web: 28, default: 24 }),
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 4,
  },
  website: {
    fontSize: 13,
    fontWeight: '600',
    color: Brand.textMutedOnDark,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  contentSide: {
    width: '100%',
    maxWidth: 760,
    alignSelf: Platform.select({ web: 'center', default: 'stretch' }),
    backgroundColor: Brand.white,
    paddingHorizontal: 32,
    paddingVertical: Platform.select({ web: 56, default: 36 }),
    gap: 12,
    justifyContent: 'center',
    position: 'relative',
    flex: 1,
  },
  curveAccent: {
    position: 'absolute',
    left: -20,
    top: '12%',
    bottom: '12%',
    width: 24,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
    borderLeftWidth: 4,
    borderLeftColor: Brand.blue,
    backgroundColor: Brand.white,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blue,
    letterSpacing: 1.8,
  },
  headline: {
    fontSize: Platform.select({ web: 42, default: 34 }),
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: 0.4,
    lineHeight: Platform.select({ web: 48, default: 40 }),
  },
  titleRule: {
    width: 72,
    height: 3,
    borderRadius: 999,
    backgroundColor: Brand.blue,
    marginTop: 4,
    marginBottom: 4,
  },
  tagline: {
    fontSize: Platform.select({ web: 22, default: 19 }),
    fontWeight: '600',
    color: Brand.navy,
    lineHeight: 30,
    maxWidth: 560,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: Brand.textMuted,
    maxWidth: 560,
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  cta: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 999,
  },
  roles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
    columnGap: 20,
    rowGap: 10,
  },
});
