import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import { translations } from './locales';


export const onBeforeLift = async () => {
  await use(initReactI18next).init({
    resources: translations,
    lng: Localization.locale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    parseMissingKeyHandler: () => 'Translation missing',
  });
};


/*
  i18n.use passes instance to react-i18next
  which will make it available for all the components.

  ie:
  import { useTranslation } from 'react-i18next';

  If you need to access the t function or the i18next instance from
  outside of a React component you can simply import this file's
  default export and use the exported i18next instance:

  ie:
  import i18n from '<root>/translations';

  i18n.t('my.key');
*/

export default i18n;
