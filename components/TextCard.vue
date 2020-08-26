<template>
  <div class="TextCard">
    <h3 v-if="title" class="TextCard-Heading">
      <a v-if="link" :href="link" target="_blank" rel="noopener">
        {{ title }}
      </a>
      <template v-else>
        {{ title }}
      </template>
    </h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-if="body" class="TextCard-Body" v-html="body" />
    <p class="TextCard-Body">
      <slot />
    </p>
  </div>
</template>

<style lang="scss">
.TextCard {
  @include card-container();
  padding: 20px;
  margin-bottom: 20px;
  &-Heading {
    @include h3();
    margin-bottom: 12px;
    a {
      @include h3();
    }
  }
  &-Body {
    * {
      @include p();
    }
    a {
      word-break: break-all;
      color: $link;
      text-decoration: none;
    }
  }
}
</style>
