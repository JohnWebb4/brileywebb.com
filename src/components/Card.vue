<template>
  <article class="tile">
    <p class="content">{{content}}</P>
    <p v-if="title" class="title">{{title}}</p>
    <figure class="image is-4by3">
      <img v-if="image" v-bind:src="image">
    </figure>
  </article>
</template>

<script>
  export default {
    props: {
      content: String,
      image: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
  }
    },
</script>