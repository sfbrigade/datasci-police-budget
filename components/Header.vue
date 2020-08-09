<template>
  <div class="origin">
    <v-container fill-height>
      <v-layout justify="center" align="center">
        <div class="TopNavigation">
          <v-btn
            color="transparent"
            depressed
            v-for="(button, i) in buttons"
            :key="i"
            class="ma-2 TopNavigation-Button black--text"
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
          tab: "FAQ"
        },
        {
          icon: "balance_budget",
          title: "Balance Budget",
          tab: "Stats"
        },
        {
          icon: "city_budget_tracker",
          title: "City Budget Tracker",
          tab: "FAQ"
        },
        {
          icon: "about_us",
          title: "About Us",
          tab: "FAQ"
        },
        {
          icon: "contact_us",
          title: "Contact Us",
          tab: "Stats"
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
  align: center;
  height: auto;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  top: 0;
  position: absolute;

  .TopNavigation {
    display: flex;
    margin: 60px 40px;
    max-width: 900px;
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
