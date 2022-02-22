// @ts-nocheck
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

// bootstrap
import "bootstrap";
import JQuery from "jquery";

// css & scss
import "bootstrap/scss/bootstrap.scss";
import "hooper/dist/hooper.css";
import "vue-scroll-picker/dist/style.css";

// libraries importing
import VueCountdown from "@chenfengyuan/vue-countdown";
import VueAnalytics from "vue-analytics";
import VueUploadComponent from "vue-upload-component";
import VueYoutube from "vue-youtube";
import VueScrollPicker from "vue-scroll-picker";
window.$ = JQuery;

Vue.config.productionTip = false;

Vue.component("file-upload", VueUploadComponent);
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueScrollPicker);
Vue.use(VueYoutube);
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-159915865-1",
  router,
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
