import { Image, ImageSourcePropType, Platform, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '@/components/site/ActionButton';
import { Brand } from '@/constants/Colors';
import { Radius, Shadow } from '@/constants/theme';
import { useIsCompact } from '@/hooks/useIsCompact';

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  authors?: string;
  logo?: ImageSourcePropType;
  comingSoon?: boolean;
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
  comingSoon,
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
            resizeMode="contain"
            accessibilityLabel={`${name} logo`}
          />
        </View>
      ) : null}
      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.category}>{category}</Text>
          {comingSoon ? (
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonText}>Coming soon</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.name}>{name}</Text>
        {authors ? <Text style={styles.authors}>by {authors}</Text> : null}
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.actions}>
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
          label={comingSoon ? 'Preview site' : `Visit ${name}`}
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
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 280,
    flexDirection: 'column',
    backgroundColor: Brand.white,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Brand.border,
    overflow: 'hidden',
    ...Shadow.card,
  },
  cardCompact: {
    flex: undefined,
    minWidth: undefined,
    width: '100%',
  },
  logoWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    backgroundColor: Brand.surfaceMuted,
    borderBottomWidth: 1,
    borderBottomColor: Brand.border,
    padding: 16,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  body: {
    padding: 24,
    paddingBottom: 16,
    flex: 1,
  },
  actions: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  comingSoonBadge: {
    backgroundColor: Brand.accentSoft,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(43, 108, 176, 0.28)',
  },
  comingSoonText: {
    fontSize: 11,
    fontWeight: '700',
    color: Brand.blue,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  category: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blue,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  name: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '700',
    color: Brand.navy,
    letterSpacing: -0.2,
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
    lineHeight: 24,
    color: Brand.textMuted,
  },
  linkButton: {
    borderRadius: Radius.pill,
    marginTop: 0,
  },
  linkButtonCompact: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  linkButtonSecondary: {
    marginTop: 0,
  },
});
