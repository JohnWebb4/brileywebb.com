<template>
  <div>
    <header>
      <card content="hello" title="A title" image="/images/desert.jpg"/>
    </header>
    <section>
    </section>
  </div>
</template>

<script>
  import Card from '../components/Card.vue'

  export default {
    components: {
      Card,
    }
  }
</script>
