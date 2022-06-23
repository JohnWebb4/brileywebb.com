<template>
  <div>
    <h2 class="title is-flex is-centered">Welcome</h2>
    <div class="container is-flex is-centered">
      <img src="images/desert.jpg" />
    </div>
    <div class="columns is-flex is-centered">
      <div class="column is-flex is-centered">
        <img src="images/bird.jpg" />
      </div>
      <div class="column is-centered">
        <h3>{{ screenplays }}</h3>
        <h4 v-bind:key="text" v-for="text in featuresAndShort">
          {{ text }}
        </h4>
      </div>
      <div class="column is-flex is-centered">
        <img src="images/tess2_0.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    screenplays: "screenplays",
    featuresAndShort: "featuresAndShort",
  }),
};
</script>
