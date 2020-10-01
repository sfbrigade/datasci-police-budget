<template>
  <v-app>
    <v-row>
      <Header />
    </v-row>

    <v-container fluid class="no-padding" fill-height>

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
        <v-spacer cols=2 />
        <v-col cols=4>
          <v-row><div class="Subsection-Title">Revenue</div></v-row>
          <v-row><div class="Subsection-Subtitle">(in millions)</div></v-row>
          <v-row class="mb-5">
            <div class="Subsection-Amount">${{totalExpenses}} mil</div>
          </v-row>
          <v-row><div class="Subsection-Title">Expenses</div></v-row>
          <v-row><div class="Subsection-Subtitle">(in millions)</div></v-row>
          <v-row><div class="Subsection-Body">
            There are 7 categories that make up San Francisco's budget.
            Use the levers to adjust and balance the spending for each category,
            then compare to the actual budget.
          </div></v-row>
          <v-row class="mb-0" v-if="exceedsLimit">
            <div class="Slider-Hint">Note: Total expenses allocated exceeds revenue.</div>
          </v-row>
        </v-col>
        <v-col cols=6>
            <D3PieChart
              v-if="isMounted && amounts"
              :config="budgetPieChartConfig"
              :datum="budgetPieChartData" />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-spacer />
        <v-col cols=2>
          <div class="color Health-Color" />
          <div class="Slider-Title">Community Health
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template>
              <span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-col cols=2>
          <div class="color Culture-Color" />
          <div class="Slider-Title">Culture & Recreation
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template>
              <span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-col cols=2>
          <div class="color Admin-Color" />
          <div class="Slider-Title">General Admin & Finance
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template>
              <span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-col cols=2>
          <div class="color City-Color" />
          <div class="Slider-Title">General City Responsibilities
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template><span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-spacer />
      </v-row>

      <v-row>
        <v-spacer />
        <v-col cols=2><div class="Slider-Amount">${{healthValue}} mil</div></v-col>
        <v-col cols=2><div class="Slider-Amount">${{cultureValue}} mil</div></v-col>
        <v-col cols=2><div class="Slider-Amount">${{adminValue}} mil</div></v-col>
        <v-col cols=2><div class="Slider-Amount">${{cityValue}} mil</div></v-col>
        <v-spacer />
      </v-row>

      <v-row>
        <v-spacer />
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="healthValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="cultureValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="adminValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="cityValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-spacer />
      </v-row>

      <v-row justify="center">
        <v-spacer />
        <v-col cols=2>
          <div class="color Welfare-Color" />
          <div class="Slider-Title">
            Human Welfare & Neighborhood Development
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template>
              <span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-col cols=2>
          <div class="color Protection-Color" /><div class="Slider-Title">
            Public Protection
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template>
              <span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-col cols=2>
          <div class="color Transport-Color" /><div class="Slider-Title">
            Public Works, Transportation & Commerce
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">(i)</span>
              </template>
              <span>Placeholder</span>
            </v-tooltip>
          </div>
        </v-col>
        <v-spacer />
      </v-row>

      <v-row>
        <v-spacer />
        <v-col cols=2><div class="Slider-Amount">${{welfareValue}} mil</div></v-col>
        <v-col cols=2><div class="Slider-Amount">${{protectionValue}} mil</div></v-col>
        <v-col cols=2><div class="Slider-Amount">${{transportValue}} mil</div></v-col>
        <v-spacer />
      </v-row>

      <v-row>
        <v-spacer />
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="welfareValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="protectionValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-col cols=2>
          <v-row justify="center">
            <v-slider v-model="transportValue" :max="sliderMax" :min="sliderMin"
                      @change="refreshPieChartData"
                      :rules="revenueLimitRule" label=" "
                      track-color=#B6DADA color=#2A6465 vertical />
          </v-row>
        </v-col>
        <v-spacer />
      </v-row>

      <v-row justify="center" class="my-10">
        <v-spacer />
        <v-col cols=2><v-btn rounded color=#2A6465 dark block>NEXT</v-btn></v-col>
        <v-spacer />
      </v-row>

      <v-row justify="center" class="my-10">
        <v-spacer />
      </v-row>
      <DepartmentsWalkthrough />
    </v-container>
    <v-row>
      <Footer />
    </v-row>
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
    exceedsLimit() { return this.$store.getters['budget/getExceedsLimit']; },
    totalExpenses() { return this.$store.getters['budget/getTotalAmount']; },
    amounts() {
      return Object.values(this.$store.getters['budget/getAmounts'])
        .some((amount) => amount > 0);
    },
    healthValue: {
      get() { return this.$store.state.budget.amounts.health; },
      set(v) { this.$store.commit('budget/updateAmounts', { health: v }); },
    },
    cultureValue: {
      get() { return this.$store.state.budget.amounts.culture; },
      set(v) { this.$store.commit('budget/updateAmounts', { culture: v }); },
    },
    adminValue: {
      get() { return this.$store.state.budget.amounts.admin; },
      set(v) { this.$store.commit('budget/updateAmounts', { admin: v }); },
    },
    cityValue: {
      get() { return this.$store.state.budget.amounts.city; },
      set(v) { this.$store.commit('budget/updateAmounts', { city: v }); },
    },
    welfareValue: {
      get() { return this.$store.state.budget.amounts.welfare; },
      set(v) { this.$store.commit('budget/updateAmounts', { welfare: v }); },
    },
    protectionValue: {
      get() { return this.$store.state.budget.amounts.protection; },
      set(v) { this.$store.commit('budget/updateAmounts', { protection: v }); },
    },
    transportValue: {
      get() { return this.$store.state.budget.amounts.transport; },
      set(v) { this.$store.commit('budget/updateAmounts', { transport: v }); },
    },
    budgetData() {
      return [
        {
          key: 'health',
          name: 'Community Health',
          total: this.healthValue,
          deptColor: '#2A6465',
        },
        {
          key: 'culture',
          name: 'Culture & Recreation',
          total: this.cultureValue,
          deptColor: '#EF896E',
        },
        {
          key: 'admin',
          name: 'General Admin & Finance',
          total: this.adminValue,
          deptColor: '#F5BD41',
        },
        {
          key: 'city',
          name: 'General City Responsibilities',
          total: this.cityValue,
          deptColor: '#CAAA97',
        },
        {
          key: 'welfare',
          name: 'Human Welfare & Neighborhood Development',
          total: this.welfareValue,
          deptColor: '#4DA54A',
        },
        {
          key: 'protection',
          name: 'Public Protection',
          total: this.protectionValue,
          deptColor: '#4296AD',
        },
        {
          key: 'transport',
          name: 'Public Works, Transportation & Commerce',
          total: this.transportValue,
          deptColor: '#CF722A',
        },
      ];
    },
    sliderMax() { return this.totalExpenses; },
    sliderMin() { return 0; },
  },
  data() {
    return {
      isMounted: false,
      budgetPieChartData: [],
      budgetPieChartConfig: {
        key: 'name',
        value: 'total',
        color: { key: 'deptColor' },
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
      this.budgetPieChartData = this.budgetData
        .filter((department) => department.total > 0);
    },
  },
});
</script>

<style lang="scss">
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

.Slider-Title {
  font-size: 24px;
  line-height: 33px;
  text-align: center;
}

.Slider-Amount {
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  color: $dark-turquoise;
}

.Slider-Hint{
  font-size: 18px;
  font-weight: normal;
  color: #ff5252;
}

@media only screen and (max-width: 768px) {
  .Slider-Title {
    font-size: 17px;
    line-height: 16px;
    text-align: center;
  }
}

.color {
  height: 20px;
  width: 20px;
  border-radius: 50%;

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
</style>
