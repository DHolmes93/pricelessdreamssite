import { Linking, StyleSheet, Text, View } from 'react-native';

import { ContactForm } from '@/components/site/ContactForm';
import { IconBadge } from '@/components/site/IconBadge';
import { PageHeader } from '@/components/site/PageHeader';
import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Brand } from '@/constants/Colors';
import { Layout, Radius, Shadow } from '@/constants/theme';
import { COMPANY, FOUNDER_ROLES } from '@/constants/content';

export default function ContactScreen() {
  const openEmail = () => Linking.openURL(`mailto:${COMPANY.email}`);
  const openPhone = () => Linking.openURL(`tel:${COMPANY.phone.replace(/-/g, '')}`);

  return (
    <Screen>
      <PageHeader
        title="Get in touch"
        subtitle="Tell us about your project, partnership, or product idea. We typically respond within one business day."
      />

      <View style={styles.layout}>
        <Section style={styles.formSection}>
          <ContactForm />
        </Section>

        <View style={styles.sidebar}>
          <View style={styles.infoCard}>
            <Text style={styles.sidebarLabel}>{COMPANY.founder.name}</Text>
            <Text style={styles.sidebarTitle}>{COMPANY.founder.title}</Text>
            <View style={styles.rule} />
          </View>

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
            <Text style={styles.rolesTitle}>What we bring</Text>
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
  layout: {
    width: '100%',
    maxWidth: Layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.pagePadding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    backgroundColor: Brand.offWhite,
    paddingBottom: 16,
  },
  formSection: {
    flex: 2,
    minWidth: 300,
    paddingVertical: 32,
    backgroundColor: 'transparent',
  },
  sidebar: {
    flex: 1,
    minWidth: 260,
    gap: 16,
    paddingVertical: 32,
  },
  sidebarLabel: {
    fontSize: 20,
    fontWeight: '800',
    color: Brand.navy,
    letterSpacing: 0.3,
  },
  sidebarTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Brand.blue,
    letterSpacing: 1.4,
    marginTop: 4,
  },
  rule: {
    width: 48,
    height: 3,
    borderRadius: 999,
    backgroundColor: Brand.blue,
    marginTop: 12,
  },
  infoCard: {
    backgroundColor: Brand.white,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Brand.border,
    padding: 22,
    gap: 10,
    ...Shadow.card,
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
    backgroundColor: Brand.navyDark,
    borderRadius: Radius.lg,
    padding: 24,
    gap: 12,
    ...Shadow.card,
  },
  rolesTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Brand.blueLight,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  rolesList: {
    gap: 10,
  },
});
