import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Linking, StyleSheet, Text, View } from 'react-native';

import { ContactForm } from '@/components/site/ContactForm';
import { Screen } from '@/components/site/Screen';
import { Section } from '@/components/site/Section';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Brand } from '@/constants/Colors';
import { COMPANY } from '@/constants/content';

export default function ContactScreen() {
  const openEmail = () => Linking.openURL(`mailto:${COMPANY.email}`);

  return (
    <Screen>
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
            <FontAwesome name="envelope" size={20} color={Brand.gold} />
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.infoValue} onPress={openEmail}>
              {COMPANY.email}
            </Text>
          </View>
          <View style={styles.infoCard}>
            <FontAwesome name="briefcase" size={20} color={Brand.gold} />
            <Text style={styles.infoTitle}>Partnerships</Text>
            <Text style={styles.infoValue}>
              Enterprise, startups, and creators welcome.
            </Text>
          </View>
          <View style={styles.infoCard}>
            <FontAwesome name="map-marker" size={20} color={Brand.gold} />
            <Text style={styles.infoTitle}>Global</Text>
            <Text style={styles.infoValue}>
              Remote-first team building products worldwide.
            </Text>
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
    paddingTop: 32,
    paddingBottom: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Brand.text,
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
    backgroundColor: Brand.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Brand.border,
    padding: 24,
    gap: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Brand.text,
  },
  infoValue: {
    fontSize: 15,
    lineHeight: 22,
    color: Brand.textMuted,
  },
});
