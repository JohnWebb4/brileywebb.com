import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "bulma/css/bulma.css";
import Vue from "vue";
import VueI18n from 'vue-i18n'

import App from "@src/app.vue";
import messages from '@locales/index';
import "@src/styles.scss";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', 
  messages, 
});

const vueApp = new Vue({
  components: { App },
  el: "#app",
  i18n,
  render: (h) => h(App),
});