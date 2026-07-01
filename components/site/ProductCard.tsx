import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { Brand } from '@/constants/Colors';

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  appStoreUrl: string;
};

export function ProductCard({ name, category, description, appStoreUrl }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <ExternalLink href={appStoreUrl} asChild>
        <Pressable style={({ pressed }) => [styles.storeLink, pressed && styles.pressed]}>
          <FontAwesome name="apple" size={18} color={Brand.navy} />
          <Text style={styles.storeLinkText}>Download on the App Store</Text>
        </Pressable>
      </ExternalLink>
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
  storeLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    alignSelf: 'flex-start',
    backgroundColor: Brand.gold,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  storeLinkText: {
    fontSize: 14,
    fontWeight: '700',
    color: Brand.navy,
  },
  pressed: {
    opacity: 0.88,
  },
});
