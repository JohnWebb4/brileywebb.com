import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import Vue from "vue";

import App from "@src/app.vue";
import "@src/styles.scss";

const vueApp = new Vue({
  components: { App },
  el: "#app",
  render: (h) => h(App),
});
