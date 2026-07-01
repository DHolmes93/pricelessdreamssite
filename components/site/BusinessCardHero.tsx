import { Linking, Platform, StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { CircuitPattern } from '@/components/brand/CircuitPattern';
import { ActionButton } from '@/components/site/ActionButton';
import { IconBadge } from '@/components/site/IconBadge';
import { Brand } from '@/constants/Colors';
import { COMPANY, FOUNDER_ROLES } from '@/constants/content';

export function BusinessCardHero() {
  const openPhone = () => Linking.openURL(`tel:${COMPANY.phone.replace(/-/g, '')}`);
  const openEmail = () => Linking.openURL(`mailto:${COMPANY.email}`);

  return (
    <View style={styles.shell}>
      <View style={styles.card}>
        <View style={styles.brandPanel}>
          <CircuitPattern />
          <View style={styles.brandContent}>
            <BrandLogo size={112} variant="light" showWordmark />
            <View style={styles.brandDivider}>
              <View style={styles.brandDividerLine} />
              <View style={styles.brandDividerDot} />
              <View style={styles.brandDividerLine} />
            </View>
            <Text style={styles.brandUrl}>{COMPANY.website}</Text>
          </View>
        </View>

        {Platform.OS === 'web' ? <View style={styles.curve} /> : null}

        <View style={styles.infoPanel}>
          <Text style={styles.founderName}>{COMPANY.founder.name.toUpperCase()}</Text>
          <View style={styles.titleRule} />
          <Text style={styles.founderTitle}>{COMPANY.founder.title.toUpperCase()}</Text>
          <Text style={styles.tagline}>{COMPANY.tagline}</Text>

          <View style={styles.contactRows}>
            <IconBadge icon="envelope" label={COMPANY.email} />
            <IconBadge icon="phone" label={COMPANY.phone} />
          </View>

          <View style={styles.roles}>
            {FOUNDER_ROLES.map((role) => (
              <IconBadge key={role.label} icon={role.icon} label={role.label} />
            ))}
          </View>

          <View style={styles.actions}>
            <ActionButton href="/contact" label="Get in touch" style={styles.primaryCta} />
            <ActionButton
              href={COMPANY.websiteUrl}
              label="Visit site"
              variant="secondary"
              style={styles.secondaryCta}
            />
          </View>

          {Platform.OS === 'web' ? null : (
            <View style={styles.nativeLinks}>
              <Text style={styles.nativeLink} onPress={openEmail}>
                Email
              </Text>
              <Text style={styles.nativeLink} onPress={openPhone}>
                Call
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 12,
  },
  card: {
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: Brand.white,
    borderWidth: 1,
    borderColor: Brand.border,
    ...Platform.select({
      web: {
        boxShadow: '0 18px 50px rgba(27, 43, 57, 0.12)',
      },
      default: {
        shadowColor: Brand.navy,
        shadowOpacity: 0.12,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 6,
      },
    }),
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    minHeight: Platform.select({ web: 420, default: undefined }),
  },
  brandPanel: {
    flex: Platform.select({ web: 0.42, default: undefined }),
    backgroundColor: Brand.navy,
    paddingHorizontal: 28,
    paddingVertical: 36,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  brandContent: {
    alignItems: 'center',
    gap: 16,
    zIndex: 1,
  },
  brandDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '72%',
    maxWidth: 180,
  },
  brandDividerLine: {
    flex: 1,
    height: 2,
    backgroundColor: Brand.blueBright,
    borderRadius: 999,
  },
  brandDividerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Brand.blueBright,
  },
  brandUrl: {
    fontSize: 14,
    fontWeight: '600',
    color: Brand.textMutedOnDark,
    letterSpacing: 0.4,
  },
  curve: {
    width: 28,
    marginLeft: -1,
    backgroundColor: Brand.white,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
    borderLeftWidth: 4,
    borderLeftColor: Brand.blue,
  },
  infoPanel: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 36,
    gap: 14,
    backgroundColor: Brand.white,
  },
  founderName: {
    fontSize: Platform.select({ web: 30, default: 26 }),
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: 1.2,
  },
  titleRule: {
    width: 72,
    height: 3,
    borderRadius: 999,
    backgroundColor: Brand.blue,
    marginTop: 2,
  },
  founderTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Brand.blue,
    letterSpacing: 1.6,
  },
  tagline: {
    fontSize: 16,
    lineHeight: 24,
    color: Brand.textMuted,
    maxWidth: 520,
    marginTop: 4,
  },
  contactRows: {
    gap: 10,
    marginTop: 8,
  },
  roles: {
    gap: 10,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 18,
    rowGap: 10,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  primaryCta: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 999,
  },
  secondaryCta: {
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 999,
  },
  nativeLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  nativeLink: {
    color: Brand.blue,
    fontWeight: '600',
  },
});
