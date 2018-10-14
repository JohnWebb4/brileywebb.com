<template>
  <div>
    <header class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" v-text="headerTitle"></h1>
          <h2 class="subtitle" v-text="headerText"></h2>
        </div>
      </div>
    </header>
    <nav class="navbar stick-top is-link" role="navigation" aria-label="main navigation">
      <div
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        v-on:click="mobileShowMenu = !mobileShowMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': mobileShowMenu }">
        <div class="navbar-start">
          <router-link
            class="navbar-item"
            v-bind:to="route.path"
            v-bind:key="route.path"
            v-for="route in routes">
            <span class="icon is-medium">
              <i class="fas fa-lg" v-bind:class="route.icon"></i>
            </span>
            <span>
              {{ route.text }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="section">
      <router-view class="ui vertical segment"></router-view>
    </div>
  </div>
</template>

<style scoped>
  .stick-top {
    position: sticky;
    top: 0;
  }
</style>

<script lang="ts">
import appScript from './app.script';
// import appScript from '@src/app.script';

export default appScript;
</script>
