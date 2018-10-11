<template>
  <div class="tile is-child is-light notification">
    <div class="columns">
      <div class="column is-four-fifths">
        <p v-if="title" class="title">{{title}}</p>
        <p v-if="subtitle" class="subtitle">{{subtitle}}</p>
        <p class="content">{{content}}</P>
        <slot></slot>
      </div>
      <div class="column is-one-fifth">
        <figure class="image is-128x128">
          <img v-if="image" v-bind:src="image">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: String,
      image: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
    },
  };
</script>