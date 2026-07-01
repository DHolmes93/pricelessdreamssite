import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { ServiceCard } from '@/components/site/ServiceCard';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHero } from '@/components/site/SiteHero';
import { ProductCard } from '@/components/site/ProductCard';
import { ActionButton } from '@/components/site/ActionButton';
import { Brand } from '@/constants/Colors';
import { PRODUCTS, SERVICES, STATS } from '@/constants/content';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <Screen>
      <SiteHero />

      <Section
        title="What we build"
        subtitle="From mobile apps to cloud platforms—we design, engineer, and ship products at scale."
        variant="light">
        <View style={styles.grid}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </View>
      </Section>

      <View style={styles.statsBand}>
        <View style={styles.statsInner}>
          {STATS.map((stat) => (
            <View key={stat.label} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Section
        title="Our products"
        subtitle="Books, apps, and platforms from Priceless Dreams."
        variant="light">
        <View style={styles.productGrid}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </View>
      </Section>

      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to build something priceless?</Text>
        <Text style={styles.ctaText}>
          Partner with us on your next app, platform, or product launch.
        </Text>
        <ActionButton
          href="/contact"
          label="Start a conversation"
          style={styles.primaryButton}
          textStyle={styles.primaryButtonText}
        />
      </View>

      <SiteFooter />
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  statsBand: {
    backgroundColor: Brand.navy,
    paddingVertical: 44,
  },
  statsInner: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,
  },
  statItem: {
    minWidth: 120,
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 36,
    fontWeight: '800',
    color: Brand.blueLight,
  },
  statLabel: {
    marginTop: 6,
    fontSize: 14,
    color: Brand.textMutedOnDark,
    textAlign: 'center',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  cta: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 56,
    alignItems: 'flex-start',
    gap: 16,
    backgroundColor: Brand.offWhite,
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Brand.navy,
  },
  ctaText: {
    fontSize: 17,
    color: Brand.textMuted,
    maxWidth: 480,
    lineHeight: 26,
  },
  primaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 999,
  },
  primaryButtonText: {
    fontSize: 16,
  },
});
