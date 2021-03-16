<template>
  <v-app>
    <div id="header-wrapper">
      <v-row>
        <Header />
      </v-row>
    </div>

    <v-container
      fluid
      class="balance-budget-container floating-card-container no-padding"
      fill-height
    >
      <v-row justify="center" class="body-row">
        <h2 class="Section-Title">Balance My City's Budget</h2>
      </v-row>

      <v-row class="Balance-Budget-Header-Dropdown-Container">
        <v-col class="Balance-Budget-Header-Dropdown" xs="3" md="3">
          <CitySelect @update-city="refreshRealAmounts" />
        </v-col>
      </v-row>

      <v-row class="mb-10">
        <v-col :cols="showBudgetOverviewWithOverlay ? 4 : 6">
          <v-row>
            <div class="Subsection-Title">
              {{ hasAnyAmount ? "Remaining" : "" }} Revenue
            </div>
          </v-row>
          <v-row><div class="Subsection-Subtitle">(in millions)</div></v-row>
          <v-row class="mb-5">
            <div class="Subsection-Amount">${{ remainingAmount }} mil</div>
          </v-row>
          <v-row><div class="Subsection-Title">Expenses</div></v-row>
          <v-row><div class="Subsection-Subtitle">(in millions)</div></v-row>
          <v-row
            ><div class="Subsection-Body">
              There are 7 categories that make up San Francisco's budget. Use
              the levers to adjust and balance the spending for each category,
              then compare to the actual budget.
            </div></v-row
          >
          <v-row class="mb-0">
            <div class="Slider-Hint" :class="{ invisible: !exceedsLimit }">
              Note: Total expenses allocated exceeds revenue.
            </div>
          </v-row>
        </v-col>
        <v-col :cols="showBudgetOverviewWithOverlay ? 8 : 6" class="pie-charts-container">
          <div class="pie-chart-container">
            <PieChart :chartData="userPieData" :options="pieOptions" />
            Your Budget
          </div>
          <div v-if="showBudgetOverviewWithOverlay" class="pie-chart-container">
            <PieChart :chartData="realPieData" :options="pieOptions" />
            Mayor's Budget
          </div>
        </v-col>
      </v-row>

      <v-row v-if="showBudgetOverview || showBudgetOverviewWithOverlay" justify="center">
        <v-col class='slider col-12 col-sm-6 col-md-3'
               v-for="dept in budgetData" :key="dept.key">
          <v-spacer />
          <div class="Slider-Title">
            <div class="slider-title-internal">
              <div class="color" v-bind:style="{ 'background-color': dept.color }" />
              <v-tooltip bottom color="white" close-delay="750">
                <template v-slot:activator="{ on, attrs }">
                  <span class='slider-title-span' v-bind="attrs" v-on="on">{{ dept.name }}</span>
                </template>
                <div>
                  <span class="Tool-Tip"
                    >{{ dept.description }}</span
                  ><br />
                  <span class="Tool-Tip-Link">MORE DETAILS</span>
                </div>
              </v-tooltip>
            </div>
          </div>
          <div class="Slider-Amount">${{ dept.total }} mil</div>
          <div v-if="!showBudgetOverviewWithOverlay">
            <v-row class="slider-input-container" justify="center">
            <v-slider
              class="slider-input"
              :value="dept.total"
              @input="updateAmount(dept.key, $event)"
              :max="sliderMax(dept.realTotal)"
              :min="sliderMin"
              :rules="sliderRules"
              label=" "
              track-color="#B6DADA"
              color="#2A6465"
              vertical
            />
            <v-slider
              class="slider-input slider-input--overlay"
              v-if="showBudgetOverviewWithOverlay"
              :value="dept.realTotal"
              :max="sliderMax"
              :min="sliderMin"
              label=" "
              readonly
              track-color="rgba(0,0,0,0)"
              color="#EF896E"
              vertical
            />
          </v-row>
        </div>
        <div v-else>
          <v-row class="slider-input-container" justify="center">
            <v-slider
              class="slider-input"
              :value="dept.total"
              :max="sliderMax(dept.realTotal)"
              :min="sliderMin"
              readonly
              :rules="sliderRules"
              label=" "
              track-color="#B6DADA"
              color="#2A6465"
              vertical
            />
            <v-slider
              class="slider-input slider-input--overlay"
              :value="dept.realTotal"
              :max="sliderMax(dept.realTotal)"
              :min="sliderMin"
              label=" "
              readonly
              track-color="rgba(0,0,0,0)"
              color="#EF896E"
              vertical
            />
          </v-row>
          <div class="Slider-RealAmount">${{ dept.realTotal }} mil</div>
        </div>
        </v-col>
      </v-row>

      <v-row justify="center" v-if="showBudgetOverview || showBudgetOverviewWithOverlay">
        <div class="section">
          <h2 class="Section-Title body-row" v-if="showBudgetOverview">Your Proposed Budget</h2>
          <h2 class="Section-Title body-row" v-else>Your Budget vs. The Mayor’s Budget</h2>
          <p class="section-content" v-if="showBudgetOverview">
            Congrats, you’ve created a spending budget for the city of San Francisco, with a
            ${{Math.abs(remainingAmount)}}mil {{remainingAmount > 0 ? 'surplus' : 'deficit'}}.
            Make any additional adjustments, then compare your numbers to the mayor’s planned
            budget.
          </p>
          <p class="section-content" v-else>
            How do your numbers differ from the proposed budget? Learn more about the Mayor’s
            Budget here or voice your opinions by taking action.
          </p>
          <v-btn class="section-button" rounded color="#EF896E" dark
                 @click="goToOverviewWithOverlay" v-if="showBudgetOverview">
            COMPARE TO ACTUAL BUDGET
          </v-btn>
          <div v-if="showBudgetOverviewWithOverlay">
            <v-btn class="section-button" rounded color="#2A6465" dark @click="print">
              PRINT
            </v-btn>
            <v-btn class="section-button" rounded color="#2A6465" dark to="/take-action" nuxt>
              TAKE ACTION
            </v-btn>
          </div>
          <v-btn class="section-button" text color="#2a6465"
               @click="resetAndStartOver" v-if="showBudgetOverviewWithOverlay">
            RESET & START OVER
          </v-btn>
        </div>
      </v-row>
    </v-container>
    <v-dialog v-model="showLandingModal" max-width="624" overlay-opacity="0.7" >
      <BudgetLandingBox :onExit="dismissLandingModal" @update-city="refreshRealAmounts" />
    </v-dialog>
    <DepartmentsWalkthrough />
    <v-row class="my-10" justify="center">
      <v-spacer />
    </v-row>
    <div id="footer-wrapper">
      <v-row>
        <Footer />
      </v-row>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PieChart from '@/components/PieChart.vue';
import { mapGetters } from 'vuex';

import CitySelect from '@/components/CitySelect';
import DepartmentsWalkthrough from '@/components/DepartmentsWalkthrough';
import ALL_BUDGETS_BY_YEAR from '../assets/data/all_yearly_budgets_by_org.json';

const MOST_RECENT_YEAR_BY_CITY = {
  oakland: '2020',
  san_francisco: '2017',
};

const DEPARTMENT_COLOR_MAP = Object.freeze({
  health: '#2A6465',
  culture: '#EF896E',
  admin: '#F5BD41',
  city: '#CAAA97',
  welfare: '#4DA54A',
  protection: '#4296AD',
  transport: '#CF722A',
});

export default Vue.extend({
  title: 'Balance Budget | Police Trends',
  components: {
    CitySelect,
    Header,
    Footer,
    PieChart,
    DepartmentsWalkthrough,
  },
  mounted() {
    this.updateRealAmounts(this.city);
    this.isMounted = true;
  },
  computed: {
    ...mapGetters({
      allAmounts: 'budget/getAllAmounts',
      exceedsLimit: 'budget/getExceedsLimit',
      hasAnyAmount: 'budget/hasAnyAmount',
      remainingAmount: 'budget/getRemainingAmount',
      showBudgetOverview: 'departments/shouldShowOverview',
      showBudgetOverviewWithOverlay: 'departments/shouldShowOverviewWithOverlay',
      city: 'getCity',
    }),
    pieData() {
      const userData = [];
      const realData = [];
      const labels = [];
      const backgroundColor = [];
      Object.entries(this.allAmounts).forEach(([key, [total, realTotal]]) => {
        userData.push(total);
        realData.push(realTotal);
        labels.push(this.$t(`departments.${key}.name`));
        backgroundColor.push(DEPARTMENT_COLOR_MAP[key]);
      });
      return [
        { datasets: [{ data: userData, backgroundColor }], labels },
        { datasets: [{ data: realData, backgroundColor }], labels },
      ];
    },
    userPieData() {
      return this.pieData[0];
    },
    realPieData() {
      return this.pieData[1];
    },
    pieOptions() {
      return {
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label(tooltipItem, data) {
              let label = data.labels[tooltipItem.index] || '';
              if (label) {
                label += `: ${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]} mil`;
              }
              return label;
            },
          },
        },
      };
    },
    budgetData() {
      return Object.entries(this.allAmounts).map(([key, [total, realTotal]]) => ({
        key,
        total,
        realTotal,
        name: this.$t(`departments.${key}.name`),
        description: this.$t(`departments.${key}.description`),
        color: DEPARTMENT_COLOR_MAP[key],
      }));
    },
    sliderRules() {
      // return false for error state
      return [!this.exceedsLimit];
    },
  },
  data() {
    return {
      showLandingModal: true,
      isMounted: false,
      sliderMin: 0,
    };
  },
  methods: {
    print() {
      window.print();
    },
    refreshRealAmounts() {
      this.updateRealAmounts(this.city);
    },
    sliderMax(actualAmount) {
      return actualAmount * 1.3;
    },
    updateRealAmounts(city) {
      const cityYearKey = `${city}-${MOST_RECENT_YEAR_BY_CITY[city]}`;
      const values = ALL_BUDGETS_BY_YEAR[cityYearKey];
      console.log(cityYearKey);
      console.log(values);
      if (values) {
        this.$store.commit('budget/updateRealAmounts', values);
      } else {
        this.$store.commit('budget/resetRealAmounts');
      }
    },
    updateAmount(key, value) {
      this.$store.commit('budget/updateAmounts', { [key]: value });
    },
    dismissLandingModal() {
      this.showLandingModal = false;
    },
    resetAndStartOver() {
      this.$store.commit('budget/resetAmounts');
      this.$store.commit('departments/goToWalkthrough');
    },
    goToOverviewWithOverlay() {
      this.$store.commit('departments/goToOverviewWithOverlay');
    },
  },
});
</script>

<style lang="scss">

.balance-budget-container {
  max-width: 90%;
}

.Section-Title {
  color: $dark-turquoise;
}

.section {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section .section-content {
  margin-bottom: 0;
}

.section-button {
  margin: 24px 8px 0;
  width: 315px;
}

.Balance-Budget-Header-Dropdown-Container {
  justify-content: center;
}

.Dropdown-Title {
  text-align: left;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: $black-1;
  background-color: transparent;
}

.theme--dark.v-list {
  background: $white-1;
}

.v-select__selection {
  color: $black-1;
}

.v-list-item__content {
  color: $black-1;
}

.v-icon {
  color: $black-1;
}

.Subsection-Title {
  font-size: 20px;
  line-height: 27px;
  font-weight: 800;
}

.Subsection-Subtitle {
  font-size: 20px;
  line-height: 27px;
  font-weight: normal;
  font-style: italics;
}

.Subsection-Amount {
  font-size: 40px;
  line-height: 55px;
  color: $dark-turquoise;
}

.Subsection-Body {
  font-size: 18px;
  line-height: 25px;
  font-weight: normal;
}

.pie-chart-container {
  text-align: center;
  max-width: 350px;
}

.pie-charts-container {
  display: flex;
  justify-content: space-evenly;
}

.slider {
  margin-bottom: 50px;
}

.slider-title-internal {
  display: inline-block;
  align-self: flex-end;
}

.Slider-Title {
  min-height: 96px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  display: flex;
  justify-content: center;

  @include lessThan($medium) {
    min-height: 32px;
    font-size: 16px;
    line-height: 16px;
  }

  &.Health-Color {
    background-color: $dark-turquoise;
  }
  &.City-Color {
    background-color: $tan;
  }
  &.Culture-Color {
    background-color: $salmon;
  }
  &.Admin-Color {
    background-color: $orange-yellow;
  }
  &.Welfare-Color {
    background-color: $green-5;
  }
  &.Protection-Color {
    background-color: $blue-1;
  }
  &.Transport-Color {
    background-color: $brown-1;
  }
}

.Slider-Amount {
  margin: 24px 0;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: $dark-turquoise;
}

.Slider-RealAmount {
  margin: 24px 0;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: $salmon;
}

.Slider-Hint {
  font-size: 18px;
  font-weight: normal;
  color: #ff5252;
}

.invisible {
  visibility: hidden;
}

.slider-input-container {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
}

.slider-input {
  .v-slider__thumb {
    z-index: 2;
  }
}

.slider-input--overlay {
  z-index: 1;
  margin-left: -100%;

  .v-slider .v-slider__track-background {
    background: rgba(0,0,0,0);
  }

  .v-slider .v-slider__track-fill,
  .v-slider .v-slider__thumb {
    background: #EF896E;
  }
}

.color {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;

  @include lessThan($medium) {
    height: 12px;
    width: 12px;
  }

  &.Health-Color {
    background-color: $dark-turquoise;
  }
  &.City-Color {
    background-color: $tan;
  }
  &.Culture-Color {
    background-color: $salmon;
  }
  &.Admin-Color {
    background-color: $orange-yellow;
  }
  &.Welfare-Color {
    background-color: $green-5;
  }
  &.Protection-Color {
    background-color: $blue-1;
  }
  &.Transport-Color {
    background-color: $brown-1;
  }
}

.floating-card-budget {
  max-width: 600px;
}

.Tool-Tip {
  color: $black-1;
  font-weight: normal;
}

.Tool-Tip-Link {
  color: $dark-turquoise;
  font-weight: 800;
}
</style>
