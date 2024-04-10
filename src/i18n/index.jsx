import english from "@/i18n/en.json"
import spanish from "@/i18n/es.json"

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
}

const getI18N = ({ currentLocale = "es" }) => {
  let translations

  if (currentLocale === LANG.ENGLISH) {
    translations = { ...spanish, ...english }
  } else {
    translations = spanish
  }

  return translations
}

export default getI18N
