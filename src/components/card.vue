<template>
  <div
    class="tile is-parent is-wrap"
    v-bind:class="{ 'is-max-quarter-desktop': isJustImage }"
  >
    <div
      class="tile is-child is-light"
      v-bind:class="{ notification: !isJustImage }"
    >
      <div class="columns is-desktop">
        <div
          class="column is-centered"
          v-bind:class="{ 'is-one-fifth': !isJustImage }"
        >
          <figure class="image">
            <img
              v-bind:key="image"
              v-for="image in images"
              v-bind:src="image"
            />
          </figure>
        </div>
        <div v-if="!isJustImage" class="column is-four-fifths">
          <h2 v-if="title" class="title">{{ $t(title) }}</h2>
          <p v-if="subtitle" class="subtitle">{{ $t(subtitle) }}</p>
          <p
            class="content"
            v-bind:key="text"
            v-for="text in $t(content).split('\n')"
          >
            {{ text }}
          </p>
          <slot></slot>
          <div class="columns is-desktop">
            <div v-if="sections.length > 0" class="column">
              <h4 v-if="sectionsTitle" class="title is-4">
                {{ $t(sectionsTitle) }}
              </h4>
              <ol v-if="isSectionOrdered">
                <li
                  v-bind:key="section"
                  v-for="section in $t(sections).split('\n')"
                >
                  {{ section }}
                </li>
              </ol>
              <ul v-if="!isSectionOrdered">
                <li
                  v-bind:key="section"
                  v-for="section in $t(sections).split('\n')"
                >
                  {{ section }}
                </li>
              </ul>
            </div>
            <div v-if="extras.length > 0" class="column">
              <h4 v-if="extrasTitle" class="title is-4">
                {{ $t(extraTitle) }}
              </h4>
              <p
                class="content"
                v-bind:key="extra"
                v-for="extra in $t(extras).split('\n')"
              >
                {{ extra }}
              </p>
            </div>
          </div>
          <div v-if="links.length > 0">
            <h4 class="title is-4">{{ $t(linksTitle) }}</h4>
            <a
              class="content is-block"
              v-bind:key="link.text"
              v-bind:href="link.ref"
              v-for="link in links"
            >
              {{ $t(link.text) }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import cardScript from "./card.script";

export default cardScript;
</script>
