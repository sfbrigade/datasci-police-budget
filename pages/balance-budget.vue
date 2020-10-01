<template>
  <v-app style="background: #f1f8f8">
    <v-container fluid class="HomePage-Container" fill-height>
      <div class="origin">
        <v-row>
          <Header />
        </v-row>

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
                v-if="isMounted"
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
              @change="editPieChart('Community Health', healthValue, '#2A6465')"
              :rules="revenueLimitRule" label=" "
              track-color=#B6DADA color=#2A6465 vertical />
            </v-row>
          </v-col>
          <v-col cols=2>
            <v-row justify="center">
              <v-slider v-model="cultureValue" :max="sliderMax" :min="sliderMin"
              @change="editPieChart('Culture & Recreation', cultureValue, '#EF896E')"
              :rules="revenueLimitRule" label=" "
              track-color=#B6DADA color=#2A6465 vertical />
            </v-row>
          </v-col>
          <v-col cols=2>
            <v-row justify="center">
              <v-slider v-model="adminValue" :max="sliderMax" :min="sliderMin"
              @change="editPieChart('General Admin & Finance', adminValue, '#F5BD41')"
              :rules="revenueLimitRule" label=" "
              track-color=#B6DADA color=#2A6465 vertical />
            </v-row>
          </v-col>
          <v-col cols=2>
            <v-row justify="center">
              <v-slider v-model="cityValue" :max="sliderMax" :min="sliderMin"
              @change="editPieChart('General City Responsibilities', cityValue, '#CAAA97')"
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
                        @change="editPieChart(
                          'Human Welfare & Neighborhood Development',
                          welfareValue,
                          '#4DA54A'
                        )"
                        :rules="revenueLimitRule" label=" "
                        track-color=#B6DADA color=#2A6465 vertical />
            </v-row>
          </v-col>
          <v-col cols=2>
            <v-row justify="center">
              <v-slider v-model="protectionValue" :max="sliderMax" :min="sliderMin"
                        @change="editPieChart(
                          'Public Protection',
                          protectionValue,
                          '#4296AD'
                        )"
                        :rules="revenueLimitRule" label=" "
                        track-color=#B6DADA color=#2A6465 vertical />
            </v-row>
          </v-col>
          <v-col cols=2>
            <v-row justify="center">
              <v-slider v-model="transportValue" :max="sliderMax" :min="sliderMin"
              @change="editPieChart(
                'Public Works, Transportation & Commerce',
                transportValue,
                '#CF722A'
              )"
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
      </div>
      <DepartmentsWalkthrough />
      <Footer />
    </v-container>
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

const totalExpenses = 1234.0;
const startingExpense = totalExpenses / 7.0;
const currentExpenses = [
  {
    name: 'Community Health',
    total: startingExpense,
    deptColor: '#2A6465',
  },
  {
    name: 'Culture & Recreation',
    total: startingExpense,
    deptColor: '#EF896E',
  },
  {
    name: 'General Admin & Finance',
    total: startingExpense,
    deptColor: '#F5BD41',
  },
  {
    name: 'General City Responsibilities',
    total: startingExpense,
    deptColor: '#CAAA97',
  },
  {
    name: 'Human Welfare & Neighborhood Development',
    total: startingExpense,
    deptColor: '#4DA54A',
  },
  {
    name: 'Public Protection',
    total: startingExpense,
    deptColor: '#4296AD',
  },
  {
    name: 'Public Works, Transportation & Commerce',
    total: startingExpense,
    deptColor: '#CF722A',
  },
];

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
    this.isMounted = true;
    this.exceedsLimit = false;
  },
  data() {
    return {
      totalExpenses,
      cities: ['San Francisco', 'Oakland'],
      years: ['2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021'],
      isMounted: false,
      budgetPieChartData: currentExpenses,
      budgetPieChartConfig: {
        key: 'name',
        value: 'total',
        color: { key: 'deptColor' },
        margin: { left: 100, right: 100 },
        transition: { duration: 100, ease: 'easeLinear' },
      },
      sliderMax: totalExpenses,
      sliderMin: 0,
      healthValue: startingExpense,
      cultureValue: startingExpense,
      adminValue: startingExpense,
      cityValue: startingExpense,
      welfareValue: startingExpense,
      protectionValue: startingExpense,
      transportValue: startingExpense,
      revenueLimitRule: [(v) => v + currentExpenses.slice(0, 6)
        .reduce((sum, d) => sum + d.total, 0) <= totalExpenses],
    };
  },
  methods: {
    editPieChart(dept, deptValue, color) {
      currentExpenses[currentExpenses.findIndex((a) => a.name === dept)].total = deptValue;

      const currentSumExpenses = currentExpenses.reduce((sum, d) => sum + d.total, 0);
      if (currentSumExpenses > totalExpenses) {
        this.exceedsLimit = true;
      } else {
        this.exceedsLimit = false;
      }

      this.budgetPieChartData.splice(
        this.budgetPieChartData.findIndex(({ name }) => name === dept),
        1,
      );
      this.budgetPieChartData.push({ name: dept, total: deptValue, deptColor: color });
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
