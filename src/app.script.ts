import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Links from "@assets/links.json";
import Contact from "@screens/contact.vue";
import Content from "@screens/content.vue";
import Home from "@screens/home.vue";
import { ContentTypes } from "@typings/contenttypes";
import { IContent } from "@typings/icontent";

Vue.use(VueRouter);

const contents: IContent[] = [
  {
    content: __("content.tess_2_0.content").split("\n"),
    extras: __("content.tess_2_0.links").split("\n"),
    images: ["images/tess2_0.jpg"],
    links: [
      {
        ref: Links.tess2_0.amazon,
        text: __("availableAmazon"),
      },
    ],
    sections: __("content.tess_2_0.chapters").split("\n"),
    sectionsTitle: __("chapterTitles"),
    title: __("content.tess_2_0.title"),
    type: ContentTypes.Book,
  },
  {
    extras: __("content.women_history.extras").split("\n"),
    images: ["images/women_history.jpg"],
    links: [
      {
        ref: Links.women_history.amazon,
        text: __("availableAmazon"),
      },
      {
        ref: Links.women_history.rusa,
        text: __("rusaWinner"),
      },
    ],
    sections: __("content.women_history.sections").split("\n"),
    sectionsTitle: __("volumes"),
    title: __("content.women_history.title"),
    type: ContentTypes.Book,
  },
  {
    content: __("content.truer_detective.content").split("\n"),
    images: ["images/truer_detective_1.jpg"],
    subtitle: __("content.truer_detective.subtitle"),
    title: __("content.truer_detective.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.lone_wolf_carnival.content").split("\n"),
    images: ["images/lone_wolf_carnival.jpg"],
    title: __("content.lone_wolf_carnival.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.gun_club_rules.content").split("\n"),
    title: __("content.gun_club_rules.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.russian_snowflake.content").split("\n"),
    extras: __("content.russian_snowflake.extras").split("\n"),
    images: ["images/russian_snowflake.jpg"],
    title: __("content.russian_snowflake.title"),
    type: ContentTypes.Screenplay,
  },
  {
    content: __("content.casa_desert.content").split("\n"),
    extras: __("content.casa_desert.extras").split("\n"),
    images: ["images/casa_desert.jpg"],
    isSectionOrdered: false,
    sections: __("content.casa_desert.sections").split("\n"),
    sectionsTitle: __("characters"),
    title: __("content.casa_desert.title"),
    type: ContentTypes.Screenplay,
   },
  {
    content: __("content.tess_2_0_stage.content").split("\n"),
    images: ["images/tess2_0_remi.jpg"],
    title: __("content.tess_2_0.title"),
    type: ContentTypes.Screenplay,
  },
  {
    images: ["images/bird_2.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/hummingbird.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/cactus.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/sunset.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/bluebird.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/roadrunner.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/cactus_2.jpg"],
    type: ContentTypes.Photograph,
  },
  {
    images: ["images/flower.jpg"],
    type: ContentTypes.Photograph,
  },
];

// Route order as in menu
const routes: RouteConfig[] = [
  {
    component: async () => Home,
    meta: {
      icon: "fa-home",
      text: __("menu.home"),
    },
    name: "home",
    path: "/",
  },
  {
    component: async () => Content,
    meta: {
      icon: "fa-book",
      text: __("menu.books"),
    },
    name: "contentBooks",
    path: "/books",
    props: {
      contents,
      type: ContentTypes.Book,
    },
  },
  {
    component: async () => Content,
    meta: {
      icon: "fa-film",
      text: __("menu.screenplays"),
    },
    name: "contentScreenplays",
    path: "/screenplays",
    props: {
      contents,
      type: ContentTypes.Screenplay,
    },
  },
  {
    component: async () => Content,
    meta: {
      icon: "fa-camera",
      text: __("menu.photographs"),
    },
    name: "contentPhotographs",
    path: "/photographs",
    props: {
      contents,
      type: ContentTypes.Photograph,
    },
  },
  {
    component: async () => Contact,
    meta: {
      icon: "fa-envelope",
      text: __("menu.contact"),
    },
    name: "contact",
    path: "/contact",
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
