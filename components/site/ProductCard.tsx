import { Platform, StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: Brand.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Brand.border,
    padding: 24,
    ...Platform.select({
      web: {
        boxShadow: '0 8px 24px rgba(27, 43, 57, 0.06)',
      },
      default: {
        shadowColor: Brand.navy,
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
      },
    }),
  },
  category: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blue,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: Brand.navy,
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: Brand.textMuted,
  },
  linkButton: {
    marginTop: 20,
    borderRadius: 999,
  },
  linkButtonSecondary: {
    marginTop: 12,
  },
});
