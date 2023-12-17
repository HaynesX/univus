import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export function useAppReady() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf')
    // Include other fonts here if necessary
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Wait for the fonts to load
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  return fontsLoaded; // This indicates whether the app is ready (fonts loaded)
}
