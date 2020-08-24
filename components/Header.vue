<template>
  <div class="header">
    <v-container class="nav-bar" fluid>
      <v-row>
        <v-col v-for="(button, i) in leftButtons" :key="i-1">
          <v-btn
            class="nav-button black--text"
            color="transparent"
            depressed
            :to="button.path"
            nuxt
          >{{ button.title }}</v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="nav-button black--text title-button"
            color="transparent"
            depressed
            to="/"
            nuxt
          >City Budget Tracker</v-btn>
        </v-col>
        <v-col v-for="(button, i) in rightButtons" :key="i-2">
          <v-btn
            class="nav-button black--text"
            color="transparent"
            depressed
            :to="button.path"
            nuxt
          >{{ button.title }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    leftButtons() {
      return [
        {
          path: '/see-budget',
          title: 'See Budget',
        },
        {
          path: '/balance-budget',
          title: 'Balance Budget',
        },
      ];
    },
    rightButtons() {
      return [
        {
          path: '/about-us',
          title: 'About Us',
        },
        {
          path: '/take-action',
          title: 'Take Action',
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-items: center;
  width: 100%;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  margin: 24px auto;
}

.nav-bar {
  margin: 0 auto;
  max-width: 1200px;
}

.nav-button {
  @include p();
}

.title-button {
  @include h1();
  text-transform: none;
}

.header .nav-button.v-btn--active::before {
  opacity: 0;
}

.header .nav-button.v-btn--active:hover::before {
  opacity: 0.08;
}
</style>
