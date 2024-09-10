import en from './en.json'
import it from './it.json'

export default defineI18nConfig(() => ({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: en,
      it: it
    }
  }))
  