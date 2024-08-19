import 'react-native-reanimated';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Font from 'expo-font';


i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    'en-US': {
      translation: {}
    }
  },
  fallbackLng: "en-US"
})


import Storybook from '../.storybook';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default () => {
  const [loaded, error] = Font.useFonts({
    'Montserrat': require('../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf')
  })

  return <GestureHandlerRootView>
    <BottomSheetModalProvider >
      <Storybook />
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
}
