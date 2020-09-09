<template>
  <div class="header">
    <v-container class="nav-bar" fluid>
      <v-row class="nav-row" v-if="fullView">
        <v-col v-for="button in leftRoutes" :key="button.key">
          <v-btn
            class="nav-item black--text"
            color="transparent"
            depressed
            :to="button.path"
            nuxt
          >{{ button.title }}</v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            class="nav-item black--text title-item"
            color="transparent"
            depressed
            to="/"
            nuxt
          >City Budget Tracker</v-btn>
        </v-col>
        <v-col v-for="button in rightRoutes" :key="button.key">
          <v-btn
            class="nav-item black--text"
            color="transparent"
            depressed
            :to="button.path"
            nuxt
          >{{ button.title }}</v-btn>
        </v-col>
      </v-row>
      <v-row class="nav-row" v-else>
        <v-col align="left">
          <NuxtLink
            class="nav-item black--text title-item"
            color="transparent"
            depressed
            to="/"
            nuxt
            >City Budget Tracker</NuxtLink
          >
        </v-col>
        <v-col class="nav-icon-col no-grow">
          <img src="../assets/images/menu.svg"
            alt="menu icon"
            class="nav-icon"
            @click="showNavDrawer = true"
            >
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      v-model="showNavDrawer"
      class="nav-drawer"
      absolute
      right
      temporary
    >
      <v-list>
        <v-list-item
          v-for="route in routes"
          :key="route.key"
          link
        >
          <v-list-item-content>
            <NuxtLink :to="route.path" class="nav-item"> 
              {{ route.title }}
            </NuxtLink>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullView: true,
      showNavDrawer: false,
      routes: [
        {
          key: "see-budget",
          path: "/see-budget",
          title: "See Budget"
        },
        {
          key: "balance-budget",
          path: "/balance-budget",
          title: "Balance Budget"
        },
        {
          key: "about",
          path: "/about",
          title: "About Us"
        },
        {
          key: "take-action",
          path: "/take-action",
          title: "Take Action"
        }
      ]
    }
  },
  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.fullView = window.innerWidth > 1200;
      this.showNavDrawer = this.showNavDrawer && !this.fullView;
    }
  },
  computed: {
    routeCount() {
      return this.routes.length;
    },
    leftRoutes() {
      return this.routes.slice(
        0, Math.ceil(this.routeCount / 2)
      );
    },
    rightRoutes() {
      return this.routes.slice(
        Math.ceil(this.routeCount / 2), this.routeCount
      );
    }
  }
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
  margin: 24px auto 0;
}

.nav-bar {
  margin: 0 auto;
  max-width: 1200px;
}

.nav-row {
  margin: 0 24px;
}

.nav-icon-col {
  text-align: right;
  align-self: center;
}

.nav-icon {
  width: 24px;
  height: 24px;
}

.nav-drawer {
  background-color: $light-turquoise;
}

.nav-item {
  @include p();
  color: initial;
  text-decoration: none;
  letter-spacing: 0.09em;
  text-indent: 0.09em;
}

// Have to be super specific to override Vuetify styles
.header .nav-bar .nav-item.title-item {
  @include h3();
  text-transform: none;

  @include largerThan(1200) {
    @include h1();
  }
}

.header .nav-bar .nav-item.v-btn--active::before {
  opacity: 0;
}

.header .nav-bar .nav-item.v-btn--active:hover::before {
  opacity: 0.08;
}
</style>
