import 'react-native-reanimated';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

export default Storybook
