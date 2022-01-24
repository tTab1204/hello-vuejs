import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/locales/messages/en.json";
import ko from "@/locales/messages/ko.json";
import ru from "@/locales/messages/ru.json";
import ar from "@/locales/messages/ar.json";
import dateTimeFormats from "@/locales/dateTime";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "ko",
  fallbackLocale: "ko",
  dateTimeFormats,
  messages: { en, ko, ru, ar },
});
