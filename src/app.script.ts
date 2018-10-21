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
    extras: __("content.tess_2_0.links").split("\n"),
    images: ["images/tess2_0.jpg"],
    links: [
      {
        ref: "http://www.amazon.com/dp/1494204932",
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
    images: [__("images/women_history.jpg")],
    links: [
      {
        text: __("availableAmazon"),
        ref: "https://www.amazon.com/Women-American-History-volumes-Encyclopedia/dp/1610696026/ref=sr_1_1?s=books&ie=UTF8&qid=1540158800&sr=1-1&keywords=women+in+american+history",
      },
      {
        text: __("rusaWinner"),
        ref: "https://www.rusaupdate.org/2018/02/reference-experts-announce-annual-outstanding-reference-sources-list-for-adults/",
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
