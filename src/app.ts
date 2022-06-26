import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "bulma/css/bulma.css";
import Vue from "vue";
import VueI18n from "vue-i18n";

import App from "@src/app.vue";
import messages from "@locales/index";
import "@src/styles.scss";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  messages,
});

const vueApp = new Vue({
  components: { App },
  el: "#app",
  i18n,
  render: (h) => h(App),
});
