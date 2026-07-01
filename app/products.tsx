import { StyleSheet, View } from 'react-native';

import { PageHeader } from '@/components/site/PageHeader';
import { ProductCard } from '@/components/site/ProductCard';
import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { SiteFooter } from '@/components/site/SiteFooter';
import { PRODUCTS } from '@/constants/content';

export default function ProductsScreen() {
  const books = PRODUCTS.filter((product) => product.category === 'Book');
  const ventures = PRODUCTS.filter((product) => product.category !== 'Book');

  return (
    <Screen>
      <PageHeader
        title="Products"
        subtitle="Books, apps, and platforms from Priceless Dreams — written and built by Donovan Holmes."
      />

      <Section title="Books" subtitle="By Donovan Holmes and Bishop Don.">
        <View style={styles.grid}>
          {books.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </View>
      </Section>

      <Section
        title="Apps & platforms"
        subtitle="Products we own, build, and ship."
        variant="muted">
        <View style={styles.grid}>
          {ventures.map((product) => (
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
});
