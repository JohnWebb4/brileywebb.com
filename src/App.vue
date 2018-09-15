<template>
  <div>
      <h1>Hi</h1>

      <router-link to="/home">Go Home</router-link>
      <router-link to="/books">Go to Books</router-link>
      <router-link to="/screenplay1">Screenplays 1</router-link>
      <router-link to="/screenplay2">Screenplays 2</router-link>
      <router-link to="/screenplay3">Screenplays 3</router-link>
      <router-link to="/photographs">Photographs</router-link>
      <router-link to="/contact">Contact Me</router-link>

      <router-view></router-view>
  </div>
</template>
