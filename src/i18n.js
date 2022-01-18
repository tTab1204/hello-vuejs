import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";
import ru from "@/locales/ru.json";
import ar from "@/locales/ar.json";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "ko",
  fallbackLocale: "ko",
  messages: { en, ko, ru, ar },
});
