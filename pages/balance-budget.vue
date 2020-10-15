<template>
  <v-app>
    <div :style="myStyle" id="header-wrapper">
      <v-row>
        <Header />
      </v-row>
    </div>

    <v-container
      :style="myStyle"
      fluid
      class="page-container floating-card-container no-padding"
      fill-height
    >
      <v-row justify="center">
        <h2 class="Section-Title">Balance My City's Budget</h2>
      </v-row>

      <v-row class="Balance-Budget-Header-Dropdown-Container">
        <v-col class="Balance-Budget-Header-Dropdown" xs="3" md="3">
          <CitySelect />
        </v-col>
        <v-col class="Balance-Budget-Header-Dropdown" xs="3" md="3">
          <FiscalYearSelect />
        </v-col>
      </v-row>

      <v-row class="mb-10">
        <v-spacer cols="2" />
        <v-col cols="4">
          <v-row><div class="Subsection-Title">Revenue</div></v-row>
          <v-row><div class="Subsection-Subtitle">(in millions)</div></v-row>
          <v-row class="mb-5">
            <div class="Subsection-Amount">${{ totalExpenses }} mil</div>
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
          <v-row class="mb-0" v-if="exceedsLimit">
            <div class="Slider-Hint">
              Note: Total expenses allocated exceeds revenue.
            </div>
          </v-row>
        </v-col>
        <v-col cols="6">
          <D3PieChart
            v-if="isMounted && amounts"
            :config="budgetPieChartConfig"
            :datum="budgetPieChartData"
          />
        </v-col>
      </v-row>

      <v-row class="hide-for-walkthrough" justify="center">
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
          <v-row justify="center">
            <v-slider
              :value="dept.total"
              @input="updateAmount(dept.key, $event)"
              :max="sliderMax"
              :min="sliderMin"
              @change="refreshPieChartData"
              :rules="revenueLimitRule"
              label=" "
              track-color="#B6DADA"
              color="#2A6465"
              vertical
            />
          </v-row>
        </v-col>
      </v-row>

      <v-row class="hide-for-walkthrough my-10" justify="center">
        <v-spacer />
        <v-col cols="2"
          ><v-btn rounded color="#2A6465" dark block>NEXT</v-btn></v-col
        >
        <v-spacer />
      </v-row>

      <v-row class="hide-for-walkthrough my-10" justify="center">
        <v-spacer />
      </v-row>
      <BudgetLandingBox class="floating-card-budget" />
    </v-container>
    <DepartmentsWalkthrough />
    <div :style="myStyle" id="footer-wrapper">
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
import { D3PieChart } from 'vue-d3-charts';

import CitySelect from '@/components/CitySelect';
import FiscalYearSelect from '@/components/FiscalYearSelect';

import DepartmentsWalkthrough from '@/components/DepartmentsWalkthrough';

const TEMP_TOTAL_AMOUNT = 1234.0;

export default Vue.extend({
  components: {
    CitySelect,
    FiscalYearSelect,
    Header,
    Footer,
    D3PieChart,
    DepartmentsWalkthrough,
  },
  mounted() {
    this.initializeTotalAmount();
    this.refreshPieChartData();
    this.isMounted = true;
  },
  computed: {
    exceedsLimit() {
      return this.$store.getters['budget/getExceedsLimit'];
    },
    totalExpenses() {
      return this.$store.getters['budget/getTotalAmount'];
    },
    amounts() {
      return Object.values(this.$store.getters['budget/getAmounts']).some(
        (amount) => amount > 0,
      );
    },
    healthValue: {
      get() {
        return this.$store.state.budget.amounts.health;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { health: v });
      },
    },
    cultureValue: {
      get() {
        return this.$store.state.budget.amounts.culture;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { culture: v });
      },
    },
    adminValue: {
      get() {
        return this.$store.state.budget.amounts.admin;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { admin: v });
      },
    },
    cityValue: {
      get() {
        return this.$store.state.budget.amounts.city;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { city: v });
      },
    },
    welfareValue: {
      get() {
        return this.$store.state.budget.amounts.welfare;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { welfare: v });
      },
    },
    protectionValue: {
      get() {
        return this.$store.state.budget.amounts.protection;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { protection: v });
      },
    },
    transportValue: {
      get() {
        return this.$store.state.budget.amounts.transport;
      },
      set(v) {
        this.$store.commit('budget/updateAmounts', { transport: v });
      },
    },
    budgetData() {
      return [
        {
          key: 'health',
          name: this.$t('departments.health.name'),
          description: this.$t('departments.health.description'),
          total: this.healthValue,
          color: '#2A6465',
        },
        {
          key: 'culture',
          name: this.$t('departments.culture.name'),
          description: this.$t('departments.culture.description'),
          total: this.cultureValue,
          color: '#EF896E',
        },
        {
          key: 'admin',
          name: this.$t('departments.admin.name'),
          description: this.$t('departments.admin.description'),
          total: this.adminValue,
          color: '#F5BD41',
        },
        {
          key: 'city',
          name: this.$t('departments.city.name'),
          description: this.$t('departments.city.description'),
          total: this.cityValue,
          color: '#CAAA97',
        },
        {
          key: 'welfare',
          name: this.$t('departments.welfare.name'),
          description: this.$t('departments.welfare.description'),
          total: this.welfareValue,
          color: '#4DA54A',
        },
        {
          key: 'protection',
          name: this.$t('departments.protection.name'),
          description: this.$t('departments.protection.description'),
          total: this.protectionValue,
          color: '#4296AD',
        },
        {
          key: 'transport',
          name: this.$t('departments.transport.name'),
          description: this.$t('departments.transport.description'),
          total: this.transportValue,
          color: '#CF722A',
        },
      ];
    },
    sliderMax() {
      return this.totalExpenses;
    },
    sliderMin() {
      return 0;
    },
  },
  data() {
    return {
      myStyle: {
        backgroundColor: '#333333',
        opacity: '1',
      },
      isMounted: false,
      budgetPieChartData: [],
      budgetPieChartConfig: {
        key: 'name',
        value: 'total',
        color: { key: 'color' },
        margin: { left: 100, right: 100 },
        transition: { duration: 100, ease: 'easeLinear' },
      },

      revenueLimitRule: [], // (v) => v + currentExpenses.slice(0, 6)
      // .reduce((sum, d) => sum + d.total, 0) <= totalExpenses],
    };
  },
  methods: {
    initializeTotalAmount() {
      this.$store.commit('budget/setTotalAmount', TEMP_TOTAL_AMOUNT);
    },
    refreshPieChartData() {
      this.budgetPieChartData = this.budgetData.filter(
        (department) => department.total > 0,
      );
    },
    updateAmount(key, value) {
      this.$store.commit('budget/updateAmounts', { [key]: value });
    },
  },
});
</script>

<style lang="scss">
.page-container {
  max-width: 90%;
}

.Section-Title {
  color: $dark-turquoise;
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
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: $dark-turquoise;
}

.Slider-Hint {
  font-size: 18px;
  font-weight: normal;
  color: #ff5252;
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
  position: absolute;
  top: 442px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 623px;
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
