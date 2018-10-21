<template>
  <div class="tile is-parent is-wrap">
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
          <h2 v-if="title" class="title">{{title}}</h2>
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
              <h4 class="title is-4">{{extraLeftTitle}}</h4>
              <p
                class="content"
                v-bind:key="extraLeftText"
                v-for="extraLeftText in extraLeft"
              >
                {{extraLeftText}}
              </p>
            </div>
            <div class="column">
              <h4 class="title is-4">{{extraRightTitle}}</h4>
              <p
                class="content"
                v-bind:key="extraRightText"
                v-for="extraRightText in extraRight"
              >
                {{extraRightText}}
              </p>
            </div>
          </div>
          <div class="container">
          </div>
          <div class="links">
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
