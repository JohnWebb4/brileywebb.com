<template>
  <div>
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent is-wrap">
      <card
        v-bind:title="content.title"
        v-bind:subtitle="content.subtitle"
        v-bind:key="content.title"
        v-bind:content="content.content"
        v-bind:image="content.image"
        v-bind:extraLeftTitle="content.extraLeftTitle"
        v-bind:extraLeft="content.extraLeft"
        v-bind:extraRightTitle="content.extraRightTitle"
        v-bind:extraRight="content.extraRight"
        v-for="content in filteredContents"
      />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import contentScript from './content.script';

export default contentScript;
</script>
