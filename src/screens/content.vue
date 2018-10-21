<template>
  <div>
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent is-wrap">
      <card
        v-for="content in filteredContents"
        v-bind:content="content.content"
        v-bind:extras="content.extras"
        v-bind:extrasTitle="content.extrasTitle"
        v-bind:images="content.images"
        v-bind:isSectionOrdered="content.isSectionOrdered"
        v-bind:key="content.title"
        v-bind:links="content.links"
        v-bind:sections="content.sections"
        v-bind:sectionsTitle="content.sectionsTitle"
        v-bind:subtitle="content.subtitle"
        v-bind:title="content.title"
      />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import contentScript from './content.script';

export default contentScript;
</script>
