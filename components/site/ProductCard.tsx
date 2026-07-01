import { StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '@/components/site/ActionButton';
import { Brand } from '@/constants/Colors';

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  appStoreUrl?: string;
  websiteUrl?: string;
};

export function ProductCard({
  name,
  category,
  description,
  appStoreUrl,
  websiteUrl,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      {websiteUrl ? (
        <ActionButton
          href={websiteUrl}
          label={`Visit ${name}`}
          icon="globe"
          style={styles.linkButton}
        />
      ) : null}
      {appStoreUrl ? (
        <ActionButton
          href={appStoreUrl}
          label="Download on the App Store"
          icon="apple"
          variant={websiteUrl ? 'secondary' : 'primary'}
          style={[styles.linkButton, websiteUrl && styles.linkButtonSecondary]}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 260,
    backgroundColor: Brand.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Brand.border,
    padding: 24,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: Brand.gold,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: Brand.text,
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: Brand.textMuted,
  },
  linkButton: {
    marginTop: 20,
  },
  linkButtonSecondary: {
    marginTop: 12,
  },
});
