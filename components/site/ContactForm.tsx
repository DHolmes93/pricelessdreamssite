import { useState } from 'react';
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Brand } from '@/constants/Colors';
import { Radius, Shadow } from '@/constants/theme';
import { COMPANY } from '@/constants/content';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      const msg = 'Please fill in your name, email, and message.';
      if (Platform.OS === 'web') {
        window.alert(msg);
      } else {
        Alert.alert('Missing fields', msg);
      }
      return;
    }

    const subject = encodeURIComponent(`Contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company.trim() || '—'}\n\n${message.trim()}`
    );
    const mailto = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    Linking.openURL(mailto);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.formTitle}>Send a message</Text>
      <Text style={styles.formSubtitle}>We typically respond within one business day.</Text>
      <View style={styles.form}>
      <View style={styles.row}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            placeholderTextColor={Brand.textMuted}
            autoComplete="name"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="you@company.com"
            placeholderTextColor={Brand.textMuted}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        </View>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Company (optional)</Text>
        <TextInput
          style={styles.input}
          value={company}
          onChangeText={setCompany}
          placeholder="Your organization"
          placeholderTextColor={Brand.textMuted}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={message}
          onChangeText={setMessage}
          placeholder="Tell us about your project or partnership idea..."
          placeholderTextColor={Brand.textMuted}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send message</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Brand.white,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Brand.border,
    padding: 28,
    ...Shadow.card,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Brand.navy,
    letterSpacing: -0.3,
  },
  formSubtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 15,
    color: Brand.textMuted,
    lineHeight: 22,
  },
  form: {
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  field: {
    flex: 1,
    minWidth: 200,
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Brand.navy,
  },
  input: {
    backgroundColor: Brand.offWhite,
    borderWidth: 1,
    borderColor: Brand.border,
    borderRadius: Radius.md,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Brand.text,
  },
  textArea: {
    minHeight: 140,
    paddingTop: 14,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: Brand.blue,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 999,
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: Brand.white,
  },
});
