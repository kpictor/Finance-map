import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTranslation from './zh.json';
import enTranslation from './en.json';

// 获取浏览器语言
const getBrowserLanguage = (): string => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
        return 'zh';
    }
    return 'en';
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            zh: zhTranslation,
            en: enTranslation
        },
        lng: getBrowserLanguage(),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
