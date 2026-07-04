import { StyleSheet, View } from 'react-native';

import { PageHeader } from '@/components/site/PageHeader';
import { ProductCard } from '@/components/site/ProductCard';
import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { SiteFooter } from '@/components/site/SiteFooter';
import { PRODUCTS } from '@/constants/content';
import { useIsCompact } from '@/hooks/useIsCompact';

export default function ProductsScreen() {
  const compact = useIsCompact();
  const books = PRODUCTS.filter((product) => product.category === 'Book');
  const ventures = PRODUCTS.filter((product) => product.category !== 'Book');

  return (
    <Screen>
      <PageHeader
        title="Products"
        subtitle="Books, apps, and platforms from Priceless Dreams — written and built by Donovan Holmes."
      />

      <Section eyebrow="Ventures" title="Apps & platforms" subtitle="Products we own, build, and ship.">
        <View style={[styles.grid, compact && styles.gridCompact]}>
          {ventures.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </View>
      </Section>

      <Section
        eyebrow="Publishing"
        title="Books"
        subtitle="By Donovan Holmes and Bishop Don."
        variant="muted">
        <View style={[styles.grid, compact && styles.gridCompact]}>
          {books.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </View>
      </Section>

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
  gridCompact: {
    flexDirection: 'column',
    gap: 14,
  },
});
