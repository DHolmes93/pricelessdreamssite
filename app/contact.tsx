import { Linking, StyleSheet, Text, View } from 'react-native';

import { BusinessCardHero } from '@/components/site/BusinessCardHero';
import { ContactForm } from '@/components/site/ContactForm';
import { IconBadge } from '@/components/site/IconBadge';
import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Brand } from '@/constants/Colors';
import { COMPANY, FOUNDER_ROLES } from '@/constants/content';

export default function ContactScreen() {
  const openEmail = () => Linking.openURL(`mailto:${COMPANY.email}`);
  const openPhone = () => Linking.openURL(`tel:${COMPANY.phone.replace(/-/g, '')}`);

  return (
    <Screen>
      <BusinessCardHero />

      <View style={styles.header}>
        <Text style={styles.title}>Contact us</Text>
        <Text style={styles.subtitle}>
          Tell us about your project, partnership, or product idea. We typically respond
          within one business day.
        </Text>
      </View>

      <View style={styles.layout}>
        <Section style={styles.formSection}>
          <ContactForm />
        </Section>

        <View style={styles.sidebar}>
          <View style={styles.infoCard}>
            <IconBadge icon="envelope" label={COMPANY.email} />
            <Text style={styles.infoAction} onPress={openEmail}>
              Send email
            </Text>
          </View>
          <View style={styles.infoCard}>
            <IconBadge icon="phone" label={COMPANY.phone} />
            <Text style={styles.infoAction} onPress={openPhone}>
              Call now
            </Text>
          </View>
          <View style={styles.infoCard}>
            <IconBadge icon="briefcase" label="Partnerships" />
            <Text style={styles.infoValue}>
              Enterprise, startups, and creators welcome.
            </Text>
          </View>
          <View style={styles.rolesCard}>
            <Text style={styles.rolesTitle}>{COMPANY.founder.name}</Text>
            <Text style={styles.rolesSubtitle}>{COMPANY.founder.title}</Text>
            <View style={styles.rolesList}>
              {FOUNDER_ROLES.map((role) => (
                <IconBadge key={role.label} icon={role.icon} label={role.label} variant="onDark" />
              ))}
            </View>
          </View>
        </View>
      </View>

      <SiteFooter />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: -0.5,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 26,
    color: Brand.textMuted,
    maxWidth: 560,
  },
  layout: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
  formSection: {
    flex: 2,
    minWidth: 300,
    paddingVertical: 24,
  },
  sidebar: {
    flex: 1,
    minWidth: 260,
    gap: 16,
    paddingVertical: 24,
  },
  infoCard: {
    backgroundColor: Brand.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Brand.border,
    padding: 20,
    gap: 10,
  },
  infoAction: {
    fontSize: 14,
    fontWeight: '700',
    color: Brand.blue,
  },
  infoValue: {
    fontSize: 15,
    lineHeight: 22,
    color: Brand.textMuted,
  },
  rolesCard: {
    backgroundColor: Brand.navy,
    borderRadius: 18,
    padding: 22,
    gap: 12,
  },
  rolesTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Brand.white,
    letterSpacing: 0.6,
  },
  rolesSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blueLight,
    letterSpacing: 1.2,
  },
  rolesList: {
    gap: 10,
    marginTop: 4,
  },
});
