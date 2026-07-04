import { Image, ImageSourcePropType, Platform, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '@/components/site/ActionButton';
import { Brand } from '@/constants/Colors';
import { useIsCompact } from '@/hooks/useIsCompact';

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  authors?: string;
  logo?: ImageSourcePropType;
  appStoreUrl?: string;
  websiteUrl?: string;
  amazonUrl?: string;
};

export function ProductCard({
  name,
  category,
  description,
  authors,
  logo,
  appStoreUrl,
  websiteUrl,
  amazonUrl,
}: ProductCardProps) {
  const compact = useIsCompact();
  const linkCount = [amazonUrl, websiteUrl, appStoreUrl].filter(Boolean).length;

  return (
    <View style={[styles.card, compact && styles.cardCompact]}>
      {logo ? (
        <View style={styles.logoWrap}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="cover"
            accessibilityLabel={`${name} logo`}
          />
        </View>
      ) : null}
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.name}>{name}</Text>
      {authors ? <Text style={styles.authors}>by {authors}</Text> : null}
      <Text style={styles.description}>{description}</Text>
      {amazonUrl ? (
        <ActionButton
          href={amazonUrl}
          label="Buy on Amazon"
          icon="book"
          style={[styles.linkButton, compact && styles.linkButtonCompact]}
        />
      ) : null}
      {websiteUrl ? (
        <ActionButton
          href={websiteUrl}
          label={`Visit ${name}`}
          icon="globe"
          variant={linkCount > 1 ? 'secondary' : 'primary'}
          style={[
            styles.linkButton,
            compact && styles.linkButtonCompact,
            amazonUrl && styles.linkButtonSecondary,
          ]}
        />
      ) : null}
      {appStoreUrl ? (
        <ActionButton
          href={appStoreUrl}
          label="Download on the App Store"
          icon="apple"
          variant={amazonUrl || websiteUrl ? 'secondary' : 'primary'}
          style={[
            styles.linkButton,
            compact && styles.linkButtonCompact,
            (amazonUrl || websiteUrl) && styles.linkButtonSecondary,
          ]}
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
  cardCompact: {
    flex: undefined,
    minWidth: undefined,
    width: '100%',
  },
  logoWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 132,
    marginBottom: 16,
    borderRadius: 14,
    backgroundColor: Brand.offWhite,
    borderWidth: 1,
    borderColor: Brand.border,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
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
  authors: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: Brand.textMuted,
    letterSpacing: 0.2,
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
  linkButtonCompact: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  linkButtonSecondary: {
    marginTop: 12,
  },
});
