import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import { SiteHeader } from '@/components/site/SiteHeader';
import { Brand } from '@/constants/Colors';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const pricelessTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Brand.blue,
    background: Brand.offWhite,
    card: Brand.white,
    text: Brand.text,
    border: Brand.border,
  },
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontError) console.warn('Font load error:', fontError);
  }, [fontError]);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: Brand.offWhite }}>
        <ThemeProvider value={pricelessTheme}>
          <Stack
            screenOptions={{
              header: () => <SiteHeader />,
              contentStyle: { flex: 1, backgroundColor: Brand.offWhite },
            }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="products" />
            <Stack.Screen name="contact" />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </View>
    </SafeAreaProvider>
  );
}
