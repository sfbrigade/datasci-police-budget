<template>
  <div class="origin">
    <v-container fill-height>
      <v-layout justify="center" align="center">
        <div class="TopNavigation">
          <v-btn
            class="ma-2 px-10 TopNavigation-Button black--text"
            color="transparent"
            depressed
            v-for="(button, i) in buttons"
            :key="i"
            :style="{'text-transform': button.style, 'font-size': button.size}"
          >{{ button.title }}</v-btn>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  computed: {
    buttons() {
      return [
        {
          icon: "see_budget",
          title: "See Budget",
          tab: "FAQ",
          style: "uppercase",
          size: "16px"
        },
        {
          icon: "balance_budget",
          title: "Balance Budget",
          tab: "Stats",
          style: "uppercase",
          size: "16px"
        },
        {
          icon: "city_budget_tracker",
          title: "City Budget Tracker",
          tab: "FAQ",
          style: "none",
          size: "28px"
        },
        {
          icon: "about_us",
          title: "About Us",
          tab: "FAQ",
          style: "uppercase",
          size: "16px"
        },
        {
          icon: "take_action",
          title: "Take Action",
          tab: "Actions",
          style: "uppercase",
          size: "16px"
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.origin {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: auto;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  top: 0;
  position: absolute;
  left: 29px;
  .TopNavigation {
    display: flex;
    margin: 60px 40px;
    text-align: center;
  }
  .navigationicon {
    width: 14px;
    height: 24px;
  }
}

@media screen and (max-width: 930px) {
  .origin {
    .title {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      h1 {
        @include font-size(32);
      }
    }

    .navigation {
      flex-direction: column;
      margin-top: 40px !important;
      margin-bottom: 40px !important;
      .v-card--link {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .origin {
    .title {
      h1 {
        @include font-size(26);
        max-width: 325px !important;
      }
    }
    .navigation {
      align-items: center;
    }
  }
}

@media screen and (max-width: 445px) {
  .origin {
    .title {
      margin: 20px;
      h1 {
        @include font-size(24);
        max-width: 325px !important;
      }
    }
  }
}
</style>
