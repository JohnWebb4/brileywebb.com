import "semantic-ui-less/semantic.less";
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Books from "./components/Books.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Photographs from "./components/Photographs.vue";
import Screenplay1 from "./components/Screenplay1.vue";
import Screenplay2 from "./components/Screenplay2.vue";
import Screenplay3 from "./components/Screenplay3.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/books", component: Books},
  { path: "/contact", component: Contact },
  { path: "/home", component: Home },
  { path: "/photographs", component: Photographs },
  { path: "/screenplay1", component: Screenplay1 },
  { path: "/screenplay2", component: Screenplay2 },
  { path: "/screenplay3", component: Screenplay3 },
];

const router = new VueRouter({
  routes,
});

const vueApp  = new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
