<template>
  <v-app>
    <v-row>
      <Header />
    </v-row>

    <v-container fluid class="no-padding" fill-height>

      <v-row class="content-row body-row explore-budget">

        <h2 class="section-title">Explore Budget</h2>

        <v-container fluid class="page-body">

          <v-row class="content-row body-row">
            <v-col>
              <CitySelect />
            </v-col>
            <v-col>
              <FiscalYearSelect />
            </v-col>
          </v-row>

          <v-row class="content-row body-row">
            <h3 class="center">
              In 2017, SF spent $XXX million dollars on their police department.
              This represents XX% of the general fund spending for SF. Explore the breakdown below:
            </h3>
          </v-row>

          <D3LineChart
            v-if="isMounted"
            :config="orgBudgetChartConfig"
            :datum="orgBudgetByYear" />

        </v-container>

      </v-row>

      <v-row class="content-row body-row">
        <h2 class="section-title">How is that money being spent?</h2>
      </v-row>

      <v-row class="content-row body-row">
        <h2 class="section-title">Spending by Department</h2>

        <v-container fluid>
          <v-row class="content-row body-row">
            <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plotly.com/~jamesbaskerville/1.embed"></iframe>
          </v-row>
        </v-container>

      </v-row>

      <v-row class="content-row body-row">
        <h2 class="section-title">Compare with Similar Cities</h2>
      </v-row>

      <v-row class="content-row body-row white">
        <h2 class="section-title">Glossary</h2>
      </v-row>

    </v-container>

    <v-row>
      <Footer />
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CitySelect from '@/components/CitySelect';
import FiscalYearSelect from '@/components/FiscalYearSelect';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { D3LineChart } from 'vue-d3-charts';
import ORG_BUDGET_BY_YEAR from '../assets/data/sf_yearly_budgets_by_org.json';

export default Vue.extend({
  components: {
    CitySelect,
    FiscalYearSelect,
    D3LineChart,
    Header,
    Footer,
  },
  mounted() {
    this.isMounted = true;
  },
  data() {
    return {
      isMounted: false,
      orgBudgetByYear: ORG_BUDGET_BY_YEAR,
      orgBudgetChartConfig: {
        values: Object.keys(ORG_BUDGET_BY_YEAR[0]),
        date: {
          key: 'year',
          inputFormat: '%Y',
          outputFormat: '%Y',
        },
        axis: {
          yFormat: '$.2s',
        },
        color: { scheme: 'schemePaired' },
      },
    };
  },
});
</script>
<style scoped lang="scss">
.section-title {
  color: $dark-turquoise;
}

.explore-budget {
  max-width: 900px;
}

.page-body {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
