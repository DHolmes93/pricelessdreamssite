import { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Brand } from '@/constants/Colors';

type ScreenProps = {
  children: ReactNode;
};

/** Scrollable page body — works on web, iOS, and Android. */
export function Screen({ children }: ScreenProps) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: Brand.offWhite,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 48,
  },
});
