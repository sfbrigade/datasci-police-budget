<template>
  <v-app style="background: #f1f8f8">
    <v-container fluid class="HomePage-Container" fill-height>
      <div class="Background-Wrapper">
        <div class="origin">
            <v-row justify="center" align="center">
                <div class="TopNavigation">
                    <v-btn
                        color="transparent"
                        depressed
                        v-for="(button, i) in buttons"
                                :key="i"
                                :class="{ active: i === activeTab }"
                                class="ma-2 TopNavigation-Button black--text"
                                @click="viewPage(i)"
                        >
                        <v-icon
                                v-if="button.icon === 'see_budget'"
                                class="TopNavigation-IconContainer"
                                size="20"
                        >
                            far fa-newspaper
                        </v-icon>
                        <InfoOutlineIcon
                        v-else-if="button.icon === 'balance_budget'"
                        class="TopNavigation-IconContainer"
                        />
                        <v-icon
                        v-if="button.icon === 'see_budget'"
                        class="TopNavigation-IconContainer"
                        size="20"
                        >
                                            far fa-newspaper
                        </v-icon>
                        <v-icon
                        v-if="button.icon === 'city_budget_tracker'"
                        class="TopNavigation-IconContainer"
                        size="20"
                        >
                        far fa-newspaper
                        </v-icon>
                        <PollOutlineIcon
                        v-if="button.icon === 'about_us'"
                        class="TopNavigation-IconContainer"
                        />
                        <v-icon
                        v-else-if="button.icon === 'take_action'"
                        class="TopNavigation-IconContainer"
                        size="20"
                        >
                        far fa-newspaper
                        </v-icon>
                        {{ button.title }}
                    </v-btn>
                </div>
            </v-row>
            <v-row>
                <BalanceBudgetHeader />
            </v-row>
        </div>
      </div>
      <CategoryBreakdown />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer.vue'
import BalanceBudgetHeader from '@/components/BalanceBudgetHeader.vue'

export default Vue.extend({
  components: {
    Footer
  },
  data() {
    return {
      width: 1024,
      height: 768
    }
  },
  computed: {
    buttons() {
        return [
          {
            icon: 'see_budget',
            title: 'See Budget',
            tab: 'FAQ'
          },
          {
            icon: 'balance_budget',
            title: 'Balance Budget',
            tab: 'Stats'
          },
          {
            icon: 'city_budget_tracker',
            title: 'City Budget Tracker',
            tab: 'FAQ'
          },
          {
             icon: 'about_us',
             title: 'About Us',
             tab: 'FAQ'
          },
          {
             icon: 'contact_us',
             title: 'Contact Us',
             tab: 'Stats'
          }
        ]
      }
  },
  mounted() {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }
})
</script>
<style lang="scss">
.v-application--wrap {
  justify-content: space-between;
}
.HomePage-Container {
  margin: 0 auto;
  padding: 0 !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .Background-Wrapper {
    background: #f1f8f8;
  }

  .origin {
    display: flex;
    flex-direction: column;
    height: auto;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;

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
}
@media screen and (max-width: 930px) {
  .Background-Wrapper {
    background: #f1f8f8 !important;
  }
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
  .Background-Wrapper {
    background: #f1f8f8 !important;
  }

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
  .HomePage-Container {
    .Background-Wrapper {
      background: #f1f8f8 !important;
    }
    .logo {
      margin: 20px 20px 40px 20px;
      .headericond {
        width: 40px;
        height: 40px;
      }
      .logo-title-container {
        padding: 0 10px;
        .logotitle {
          @include font-size(16);
          margin-bottom: 0;
        }
        .logosubtitle {
          @include font-size(10);
        }
      }
    }

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
}
</style>
