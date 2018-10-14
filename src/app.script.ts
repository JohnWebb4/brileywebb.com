import Vue from "vue";
import VueRouter from "vue-router";

import { ContentTypes } from "../typings/contenttypes";
import { IContent } from "../typings/icontent";
import Contact from "./screens/contact.vue";
import Content from "./screens/content.vue";
import Home from "./screens/home.vue";

Vue.use(VueRouter);

const contents: IContent[] = [
  {
    content: "hi",
    image: "images/bird.jpg",
    subtitle: "Sub",
    title: "title",
    type: ContentTypes.Book,
  },
  {
    content: "yes",
    image: "images/desert.jpg",
    subtitle: "any",
    title: "something",
    type: ContentTypes.Screenplay,
  },
];

// Route order is order appears on screen
const routes = [
  {
    component: Home,
    icon: "fa-home",
    path: "/",
    text: __("menu.home"),
  },
  {
    component: Content,
    icon: "fa-book",
    path: "/books",
    props: {
      contents,
      type: ContentTypes.Book,
    },
    text: __("menu.books"),
  },
  {
    component: Content,
    icon: "fa-film",
    path: "/screenplays",
    props: {
      contents,
      type: ContentTypes.Screenplay,
    },
    text: __("menu.screenplays"),
  },
  {
    component: Content,
    icon: "fa-camera",
    path: "/photographs",
    props: {
      contents,
      type: ContentTypes.Photograph,
    },
    text: __("menu.photographs"),
  },
  {
    component: Contact,
    icon: "fa-envelope",
    path: "/contact",
    text: __("menu.contact"),
  },
];

const router = new VueRouter({
  routes,
});

export default {
  data: () => ({
    headerText: __("header.text"),
    headerTitle: __("header.title"),
    mobileShowMenu: false,
    routes,
  }),
  router,
};
