<template>
  <div class="tile is-parent is-wrap" v-bind:class="{'is-max-quarter-desktop': isJustImage}">
    <div class="tile is-child is-light" v-bind:class="{notification: !isJustImage }">
      <div class="columns is-desktop">
        <div
          class="column is-centered"
          v-bind:class="{ 'is-one-fifth': !isJustImage }"
        >
          <figure class="image">
            <img v-bind:key="image" v-for="image in images" v-bind:src="image">
          </figure>
        </div>
        <div v-if="!isJustImage" class="column is-four-fifths">
          <h2 v-if="title" class="title">{{title}}</h2>
          <p v-if="subtitle" class="subtitle">{{subtitle}}</p>
          <p
            class="content"
            v-bind:key="text"
            v-for="text in content"
          >
            {{text}}
          </p>
          <slot></slot>
          <div class="columns is-desktop">
            <div v-if="sections.length > 0" class="column">
              <h4 v-if="sectionsTitle" class="title is-4">{{sectionsTitle}}</h4>
              <ol v-if="isSectionOrdered">
                <li
                  v-bind:key="section"
                  v-for="section in sections"
                >
                  {{section}}
                </li>
              </ol>
              <ul v-if="!isSectionOrdered">
                <li
                  v-bind:key="section"
                  v-for="section in sections"
                >
                  {{section}}
                </li>
              </ul>
            </div>
            <div v-if="extras.length > 0" class="column">
              <h4 v-if="extrasTitle" class="title is-4">{{extraTitle}}</h4>
              <p
                class="content"
                v-bind:key="extra"
                v-for="extra in extras"
              >
                {{extra}}
              </p>
            </div>
          </div>
          <div v-if="links.length > 0">
            <h4 class="title is-4">{{linksTitle}}</h4>
            <a
              class="content is-block"
              v-bind:key="link.text"
              v-bind:href="link.ref"
              v-for="link in links"
            >
            {{link.text}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import cardScript from './card.script';

export default cardScript;
</script>
