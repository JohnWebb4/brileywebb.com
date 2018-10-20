<template>
  <div>
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent"
        v-bind:key="row.key"
        v-for="row in filteredContentRows">
      <card
        v-bind:title="content.title"
        v-bind:subtitle="content.subtitle"
        v-bind:key="content.title"
        v-bind:content="content.content"
        v-bind:image="content.image"
        v-for="content in row"
      />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import contentScript from './content.script';

export default contentScript;
</script>
