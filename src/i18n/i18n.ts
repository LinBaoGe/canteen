import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import cn from './resources/cn'
import en from './resources/en'

i18next.use(initReactI18next).init({
  resources: {
    en,
    cn
  },
  lng: "cn",
  interpolation: {
    escapeValue: false
  }
})

export default i18next;
