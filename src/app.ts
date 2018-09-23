import "semantic-ui-less/semantic.less";
import Vue from "vue";
import App from "./App.vue";

const vueApp  = new Vue({
  components: { App },
  el: "#app",
  template: "<App />",
});
