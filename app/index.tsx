import { Platform, StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { ServiceCard } from '@/components/site/ServiceCard';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHero } from '@/components/site/SiteHero';
import { ProductCard } from '@/components/site/ProductCard';
import { ActionButton } from '@/components/site/ActionButton';
import { Brand } from '@/constants/Colors';
import { PRODUCTS, PURPOSE, SERVICES, STATS } from '@/constants/content';
import { Layout } from '@/constants/theme';
import { useIsCompact } from '@/hooks/useIsCompact';

export default function HomeScreen() {
  const compact = useIsCompact();
  const ventures = PRODUCTS.filter((product) => product.category !== 'Book');

  return (
    <Screen>
      <SiteHero />

      <View style={styles.purposeBand}>
        <View style={[styles.purposeInner, compact && styles.purposeInnerCompact]}>
          <Text style={styles.purposeEyebrow}>{PURPOSE.eyebrow}</Text>
          <Text style={[styles.purposeTitle, compact && styles.purposeTitleCompact]}>
            {PURPOSE.title}
          </Text>
          <View style={styles.purposeRule} />
          <Text style={[styles.purposeStatement, compact && styles.purposeStatementCompact]}>
            {PURPOSE.statement}
          </Text>
          <View style={[styles.purposePillars, compact && styles.purposePillarsCompact]}>
            {PURPOSE.pillars.map((pillar, index) => (
              <View
                key={pillar.word}
                style={[
                  styles.purposePillar,
                  compact && styles.purposePillarCompact,
                  index < PURPOSE.pillars.length - 1 && !compact && styles.purposePillarBorder,
                ]}>
                <Text style={styles.purposeWord}>{pillar.word}</Text>
                <Text style={styles.purposeLine}>{pillar.line}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Section
        eyebrow="Capabilities"
        title="What we build"
        subtitle="From mobile apps to cloud platforms—we design, engineer, and ship products at scale."
        variant="muted">
        <View style={styles.grid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </View>
      </Section>

      <View style={styles.statsBand}>
        <View style={styles.statsInner}>
          {STATS.map((stat, index) => (
            <View
              key={stat.label}
              style={[
                styles.statItem,
                index < STATS.length - 1 && !compact && styles.statItemBorder,
              ]}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Section
        eyebrow="Portfolio"
        title="Our products"
        subtitle="Apps, platforms, and ventures built and operated by Priceless Dreams."
        variant="light">
        <View style={styles.productGrid}>
          {ventures.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </View>
        <ActionButton
          href="/products"
          label="View all products & books"
          variant="secondary"
          style={styles.productsLink}
        />
      </Section>

      <View style={styles.ctaBand}>
        <View style={styles.ctaInner}>
          <Text style={styles.ctaEyebrow}>Partner with us</Text>
          <Text style={styles.ctaTitle}>Ready to build something priceless?</Text>
          <Text style={styles.ctaText}>
            Partner with us on your next app, platform, or product launch.
          </Text>
          <ActionButton
            href="/contact"
            label="Start a conversation"
            style={styles.ctaButton}
            textStyle={styles.ctaButtonText}
          />
        </View>
      </View>

      <SiteFooter />
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  purposeBand: {
    backgroundColor: Brand.navyDark,
    paddingVertical: 64,
    borderBottomWidth: 1,
    borderBottomColor: Brand.borderOnDark,
  },
  purposeInner: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    alignItems: 'flex-start',
  },
  purposeInnerCompact: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  purposeEyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blueLight,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  purposeTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: -0.5,
    lineHeight: 42,
  },
  purposeTitleCompact: {
    fontSize: 28,
    lineHeight: 34,
  },
  purposeRule: {
    width: 48,
    height: 3,
    borderRadius: 999,
    backgroundColor: Brand.blueLight,
    marginTop: 16,
    marginBottom: 20,
  },
  purposeStatement: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: '500',
    color: Brand.textMutedOnDark,
    maxWidth: 640,
    marginBottom: 40,
  },
  purposeStatementCompact: {
    fontSize: 17,
    lineHeight: 28,
    marginBottom: 28,
  },
  purposePillars: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: 0,
  },
  purposePillarsCompact: {
    flexDirection: 'column',
    gap: 20,
  },
  purposePillar: {
    flex: 1,
    minWidth: 140,
    paddingRight: 24,
    paddingVertical: 4,
  },
  purposePillarCompact: {
    paddingRight: 0,
    minWidth: undefined,
  },
  purposePillarBorder: {
    borderRightWidth: 1,
    borderRightColor: Brand.borderOnDark,
  },
  purposeWord: {
    fontSize: 22,
    fontWeight: '800',
    color: Brand.blueLight,
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  purposeLine: {
    fontSize: 14,
    lineHeight: 22,
    color: Brand.textMutedOnDark,
    maxWidth: 200,
  },
  statsBand: {
    backgroundColor: Brand.navyDark,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Brand.borderOnDark,
  },
  statsInner: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
    minWidth: 140,
    paddingHorizontal: 16,
  },
  statItemBorder: {
    borderRightWidth: 1,
    borderRightColor: Brand.borderOnDark,
  },
  statValue: {
    fontSize: 38,
    fontWeight: '800',
    color: Brand.blueLight,
    letterSpacing: -0.5,
  },
  statLabel: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
    color: Brand.textMutedOnDark,
    textAlign: 'center',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  productsLink: {
    marginTop: 28,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 999,
  },
  ctaBand: {
    backgroundColor: Brand.navy,
    paddingVertical: 64,
  },
  ctaInner: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    alignItems: 'flex-start',
    gap: 14,
  },
  ctaEyebrow: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blueLight,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: -0.4,
    maxWidth: 520,
    lineHeight: 38,
  },
  ctaText: {
    fontSize: 17,
    color: Brand.textMutedOnDark,
    maxWidth: 480,
    lineHeight: 27,
  },
  ctaButton: {
    marginTop: 8,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 999,
  },
  ctaButtonText: {
    fontSize: 16,
  },
});
