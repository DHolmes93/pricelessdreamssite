import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { ProductCard } from '@/components/site/ProductCard';
import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { ServiceCard } from '@/components/site/ServiceCard';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Brand } from '@/constants/Colors';
import { COMPANY, PRODUCTS, SERVICES, STATS } from '@/constants/content';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <View style={styles.heroBadge}>
          <FontAwesome name="rocket" size={14} color={Brand.gold} />
          <Text style={styles.heroBadgeText}>Tech Enterprise</Text>
        </View>
        <Text style={styles.heroTitle}>{COMPANY.name}</Text>
        <Text style={styles.heroTagline}>{COMPANY.tagline}</Text>
        <Text style={styles.heroDescription}>{COMPANY.description}</Text>
        <View style={styles.heroActions}>
          <Link href="/contact" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
              ]}>
              <Text style={styles.primaryButtonText}>Get in touch</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <Section
        title="What we build"
        subtitle="From mobile apps to cloud platforms—we design, engineer, and ship products at scale.">
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
        subtitle="A growing portfolio of apps, platforms, and tools—plus new ventures from our labs.">
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
        <Link href="/contact" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}>
            <Text style={styles.primaryButtonText}>Start a conversation</Text>
          </Pressable>
        </Link>
      </View>

      <SiteFooter />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 64,
    position: 'relative',
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute',
    top: -80,
    right: -40,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: Brand.violet,
    opacity: 0.15,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
    marginBottom: 24,
  },
  heroBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: Brand.goldLight,
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: Platform.select({ web: 56, default: 42 }),
    fontWeight: '800',
    color: Brand.text,
    letterSpacing: -1,
    lineHeight: Platform.select({ web: 64, default: 48 }),
  },
  heroTagline: {
    marginTop: 16,
    fontSize: Platform.select({ web: 22, default: 18 }),
    fontWeight: '600',
    color: Brand.gold,
    lineHeight: 30,
    maxWidth: 640,
  },
  heroDescription: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 28,
    color: Brand.textMuted,
    maxWidth: 600,
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 36,
  },
  primaryButton: {
    backgroundColor: Brand.gold,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.88,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: Brand.navy,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  statsBand: {
    backgroundColor: Brand.navyLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Brand.border,
    paddingVertical: 40,
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
    color: Brand.gold,
  },
  statLabel: {
    marginTop: 6,
    fontSize: 14,
    color: Brand.textMuted,
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
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Brand.text,
  },
  ctaText: {
    fontSize: 17,
    color: Brand.textMuted,
    maxWidth: 480,
    lineHeight: 26,
  },
});
