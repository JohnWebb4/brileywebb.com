<template>
  <div class="tile is-child is-light notification">
    <div class="columns">
      <div class="column is-four-fifths">
        <p v-if="title" class="title">{{title}}</p>
        <p v-if="subtitle" class="subtitle">{{subtitle}}</p>
        <p
          class="content"
          v-bind:key="text"
          v-for="text in content"
        >
          {{text}}
        </p>
        <slot></slot>
      </div>
      <div class="column is-one-fifth">
        <figure class="image">
          <img v-if="image" v-bind:src="image">
        </figure>
      </div>
    </div>
  </div>
</template>

<style>
  img {
    max-width: 100;
  }
</style>

<script lang="ts">
import cardScript from './card.script';

export default cardScript;
</script>
