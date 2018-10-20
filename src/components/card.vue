<template>
  <div class="tile is-parent">
    <div class="tile is-child is-light" v-bind:class="{notification: !isJustImage}">
      <div class="columns is-desktop">
        <div
          class="column is-flex is-centered"
          v-bind:class="{ 'is-one-fifth': !isJustImage }"
        >
          <figure class="image">
            <img v-if="image" v-bind:src="image">
          </figure>
        </div>
        <div v-if="!isJustImage" class="column is-four-fifths">
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
          <div class="columns is-desktop">
            <div class="column">
              Hello
            </div>
            <div class="column">
              Hi
            </div>
          </div>
        </div>
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
