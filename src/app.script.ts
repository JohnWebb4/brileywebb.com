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
    content: __("content.tess_2_0.content").split("\n"),
    image: "images/tess2_0.jpg",
    subtitle: "Sub",
    title: __("content.tess_2_0.title"),
    type: ContentTypes.Book,
  },
  {
    content: __("content.truer_detective.content").split("\n"),
    image: "images/truer_detective_1.jpg",
    subtitle: __("content.truer_detective.subtitle"),
    title: __("content.truer_detective.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.lone_wolf_carnival.content").split("\n"),
    image: "images/lone_wolf_carnival.jpg",
    title: __("content.lone_wolf_carnival.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.gun_club_rules.content").split("\n"),
    title: __("content.gun_club_rules.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.tess_2_0_stage.content").split("\n"),
    image: "images/tess2_0.jpg",
    subtitle: "Sub",
    title: __("content.tess_2_0.title"),
    type: ContentTypes.Screenplay,
  },
  {
    image: "images/bird_2.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/hummingbird.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/cactus.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/sunset.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/bluebird.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/roadrunner.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/cactus.jpg",
    type: ContentTypes.Photograph,
  },
  {
    image: "images/flower.jpg",
    type: ContentTypes.Photograph,
  },
];

// Route order as in menu
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
      perLine: 3,
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
