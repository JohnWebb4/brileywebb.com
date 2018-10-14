<template>
  <div>
    <h1>Books</h1>
    <div class="tile is-ancestor">
      <card
        v-bind:title="content.title"
        v-bind:subtitle="content.subtitle"
        v-bind:key="content.title"
        v-bind:content="content.content"
        v-bind:image="content.image"
        v-for="content in filteredContents"
      >
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import contentScript from './content.script';

export default contentScript;
</script>
