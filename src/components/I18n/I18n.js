import I18n from 'i18next';
import { ar, en } from './locales';

I18n.init(
  {
    interpolation: {
      // React already does escaping
      escapeValue: false
    },
    lng: 'en',
    // Using simple hardcoded resources for simple example
    resources: {
      ar,
      en
    }
  },
  (err, t) => {
    if (err) {
      return console.error(err);
    }
  }
);

export default I18n;
