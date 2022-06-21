import { translations } from '../translations/locales';


declare module 'react-i18next' {
  // @ts-expect-error Modify translation globals
  type CustomTypeOptions = {
    resources: typeof translations['en']
  }
}
