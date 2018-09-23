<template>
  <div>
      <aside
        class="ui sidebar inverted vertical menu left"
        v-bind:class="{ visible: showMenu }"
      >
        <router-link v-text="route.text" class="item" v-bind:to="route.path" v-bind:key="route.path" v-for="route in routes">
          <i class="icon" v-bind:class="route.icon"></i>
        </router-link>
      </aside>
      <section class="pusher">
        <header class="ui inverted vertical masthead center aligned segment">
          <div class="ui text container">
            <h1 class="ui huge inverted header">
              BrileyWebb.com
            </h1>
            <h3>
              Books, Screenplays, and Photographs
            </h3>
          </div>
          <div class="ui container">
            <div class="ui large secondary inverted pointing menu">
              <div class="item" v-on:click="showMenu = !showMenu">
                <i class="icon align justify"></i>
              </div>
              <router-link v-text="route.text" class="item" v-bind:to="route.path" v-bind:key="route.path" v-for="route in routes">
                <i class="icon" v-bind:class="route.icon"></i>
              </router-link>
            </div>
          </div>
        </header>
        <router-view class="ui vertical stripe segment"></router-view>
      </section>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  Vue.use(VueRouter);

  import Books from "./components/Books.vue";
  import Contact from "./components/Contact.vue";
  import Home from "./components/Home.vue";
  import Photographs from "./components/Photographs.vue";
  import Screenplay1 from "./components/Screenplay1.vue";
  import Screenplay2 from "./components/Screenplay2.vue";
  import Screenplay3 from "./components/Screenplay3.vue";


  const routes = [
    { path: "/books", component: Books, icon: "book", text: "Go to Books"},
    { path: "/contact", component: Contact, icon: "envelope", text: "Contact Me" },
    { path: "/home", component: Home, icon: "home", text: "Go Home" },
    { path: "/photographs", component: Photographs, icon: "camera", text: "Photographs" },
    { path: "/screenplay1", component: Screenplay1, icon: "film", text: "ScreenPlays 1" },
    { path: "/screenplay2", component: Screenplay2, icon: "film", text: "ScreenPlays 2" },
    { path: "/screenplay3", component: Screenplay3, icon: "film", text: "ScreenPlays 3" },
  ];

const router = new VueRouter({
  routes,
});


export default {
  data: () => ({ 
    showMenu: false,
    routes,
  }),
  router,
};
</script>
