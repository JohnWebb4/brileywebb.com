<template>
  <div class="tile is-ancestor">
    <card
      v-bind:title="book.title"
      v-bind:subtitle="book.subtitle"
      v-bind:key="book.title"
      v-bind:content="book.content"
      v-bind:image="book.image"
      v-for="book in books"
    >
    </card>
  </div>
</template>

<script>
  import Card from '../components/Card.vue'

  export default {
    data: () => ({
      books: [
        { 
          title: "A title",
          subtitle: "A subtitle",
          content: "hello",
          image: "/images/desert.jpg",
        },
      ],
    }),
    components: {
      Card,
    }
  }
</script>
