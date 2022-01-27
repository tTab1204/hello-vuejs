import Vue from "vue";
import VueI18n from "vue-i18n";
import dateTimeFormats from "@/locales/dateTime";
import ruPluralizationRule from "@/utils/i18n/ruPluralizationRule";
import arPluralizationRule from "@/utils/i18n/arPluralizationRule";

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const locales = require.context(
    "./locales/messages",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};

  locales.keys().map((key) => {
    const matched = key.slice(2, 4);

    if (matched && matched.length > 1) {
      messages[matched] = locales(key);
    }
  });
  return messages;
};

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  dateTimeFormats,
  pluralizationRules: {
    ru: ruPluralizationRule,
    ar: arPluralizationRule,
  },
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
});
