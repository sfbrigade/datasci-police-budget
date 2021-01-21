<template>
  <v-app>
    <v-row>
      <Header />
    </v-row>

    <v-container fluid class="no-padding" fill-height>

      <v-row class="content-row body-row explore-budget">

        <h2 class="section-title">See Budget</h2>

        <v-container fluid class="page-body">

          <v-row class="content-row body-row">
            <v-col cols=5>
              <CitySelect />
            </v-col>
          </v-row>

          <v-row v-if="city === 'san_francisco'">
            <v-row class="content-row body-row">
              <p class="section-text">
                From 1999-2017, the total city budget spending for San Francisco averaged
                at around 1.1 billion dollars annually, while the annual police budget in
                San Francisco averaged at around 420 million dollars.
              </p>
              <p class="section-text">
                To better understand the role that the police department plays in San Francisco,
                let’s dive into some of the details of how the police budget is used.
              </p>
            </v-row>

            <v-row class="content-row body-row">
              <h2 class="section-title">City Budget Overview</h2>
              <p class="section-text">
                The police department budget lies under the Public Protection organization and
                has made up roughly 37.5% of the organization’s budget and 4.4% of the city’s
                overall budget over the past 20 years.
              </p>
              <v-container fluid>
                <v-row class="content-row body-row">
                  <Plotly :data="treeMapData" :layout="layout" :display-mode-bar="false"/>
                </v-row>
              </v-container>
            </v-row>

            <v-row class="content-row body-row">
              <h2 class="section-title">Police Budget Trends</h2>
              <p class="section-text">
                Police budget spending has increased an average of 4.8% per year over the
                past 20 years. Excluding the year 2004, police spending has risen each year,
                including years in which the number of crime incidents fell.
              </p>
              [TODO: line chart with two y-axes: police budget over time x # of incidents]
              <p class="section-text">
                The increase in Police Budget is largely driven by an increase in
                Patrol Officer Salaries. Sources show that the size of the SFPD patrol force has
                remained largely constant throughout this time period. However, this increase
                may be attributed to the steady rise in the Consumer Price Index (CPI) in the
                Bay Area during this same period of time.
              </p>
              [TODO: line chart with major depts of police budget (training, salaries) plotted]
              <p class="section-text">
                In contrast, police spending on training has remained relatively stable.
                In fact, between 1999 and 2016, the police training budget had only
                increased by around $170,000.
              </p>
            </v-row>

            <v-row class="content-row body-row">
              <h2 class="section-title">Police Use of Force</h2>
              <p class="section-text">
                Overall since 2015, the use of force (UOF) by police officers has decreased.
                More specifically, this in large part was due to a decrease in the number of
                firearm pointing incidents. In 2015, there were around 2,600 firearm pointing
                incidents while in 2019 there were around 900. However, the rates of other
                forms of UOF incidents have stayed at around the same level. This may indicate
                that there is still much improvement to be made in police training.
              </p>
              <p class="section-text">
                38% of people in all UOF incidents were black, which is a largely
                disproportionate number to the population. This pattern was observed
                during the time period of 2015 to 2019.
              </p>
              [TODO: cluster bar chart UoF by race vs. pop count by race]
              <p class="section-text">
                In pointing of firearms incidents, there are considerably more incidents
                against Black people versus any other racial group.
              </p>
              [TODO: pie chart pointing of firearms by race]
            </v-row>

            <v-row class="content-row body-row">
              <p class="section-text">
                In conclusion, the police budget is a sizable portion of the total SF budget
                and has been increasing over time. This could be partially explained by
                inflation and other external factors not exclusive to the police department.
                However, the spending for police training has stayed the same despite the
                public outcry against police violence.
              </p>
              <p class="section-text">
                The pointing of firearms rate has actually decreased, but every other
                type of Use of Force has stayed around the same level.
              </p>
            </v-row>

          </v-row>

          <v-row v-if="city === 'oakland'">
            Placeholder for Oakland narrative once finalized
          </v-row>

        </v-container>

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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plotly } from 'vue-plotly';
import { mapGetters } from 'vuex';
import ORG_BUDGET_BY_YEAR from '../assets/data/sf_yearly_budgets_by_org.json';
import SF_BUDGET_TREE_MAP_FORMAT from '../assets/data/sf_budget_tree_map_format';

const labels = [];
const parents = [];
const values = [];
SF_BUDGET_TREE_MAP_FORMAT.forEach((item) => {
  labels.push(item.Department);
  parents.push(item.Parent);
  values.push(item['2017']);
});

export default Vue.extend({
  components: {
    CitySelect,
    Header,
    Footer,
    Plotly,
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    ...mapGetters({
      city: 'getCity',
    }),
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
      treeMapData: [{
        type: 'treemap',
        branchvalues: 'total',
        labels,
        parents,
        values,
      }],
      layout: {
        title: {
          text: 'San Francisco Budget 2017',
          font: {
            size: 18,
          },
          yref: 'paper',
          y: 2,
          yanchor: 'bottom',
        },
        margin: {
          t: 45,
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
      },
    };
  },
});
</script>
<style scoped lang="scss">
.section-title {
  color: $dark-turquoise;
  text-align: center;
}

.section-text {
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 12px;
}

.explore-budget {
  max-width: 900px;
}

.page-body {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
