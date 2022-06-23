import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "bulma/css/bulma.css";
import Vue from "vue";
import VueI18n from 'vue-i18n'

import messages from '@locales/index';
import App from "@src/app.vue";
import "@src/styles.scss";

console.log('messages', messages)

// const i18n = new VueI18n({
  // locale: 'en', 
  // messages, 
// });

// console.log('i18n');

const vueApp = new Vue({
  components: { App },
  el: "#app",
  // i18n,
  render: (h) => h(App),
});

Vue.use(VueI18n);
