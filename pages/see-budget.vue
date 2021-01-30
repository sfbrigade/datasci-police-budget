<template>
  <v-app>
    <v-row>
      <Header />
    </v-row>

    <v-main>
      <v-container fluid fill-height>
        <v-row justify="center" class="body-row">
          <h2 class="Section-Title">See Budget</h2>
        </v-row>

        <v-row class="content-row body-row">
          <v-col cols=3>
            <CitySelect />
          </v-col>
        </v-row>

        <v-row v-if="city === 'san_francisco'">
          <v-row class="content-row body-row white">
            <v-col cols=6>
              <h2 class="summary-title">Summary</h2>
              <p class="summary-text">
                From 1999-2017, the total city budget spending for San Francisco averaged
                at around 1.1 billion dollars annually, while the annual police budget in
                San Francisco averaged at around 420 million dollars.
              </p>
              <v-row>
                <v-col cols=6>
                  <p class="summary-text">average annual total budget</p>
                  <p class="summary-highlight-number">$1.1B</p>
                </v-col>
                <v-col cols=6>
                  <p class="summary-text">average annual police budget</p>
                  <p class="summary-highlight-number">$420M</p>
                </v-col>
              </v-row>
              <p class="summary-text">
                To better understand the role that the police department plays in San Francisco,
                let’s dive into some of the details of how the police budget is used.
              </p>
            </v-col>
          </v-row>

          <v-row class="content-row body-row">
            <v-spacer />
            <v-col cols=4>
              <h2 class="section-title">1. Budget Overview</h2>
              <p class="section-text">
                The police department budget lies under the Public Protection organization.
              </p>
              <p class="section-text">
                It makes up this much of the Public Protection budget
              </p>
              <p class="highlight-number">37.5%</p>
              <p class="section-text">
                and this much of the city's overall budget.
              </p>
              <p class="highlight-number">4.4%</p>
            </v-col>
            <v-col cols=4>
              <v-container fluid>
                <v-row class="content-row body-row">
                  <Plotly :data="treeMapData" :layout="layout" :display-mode-bar="false"/>
                </v-row>
              </v-container>
            </v-col>
            <v-spacer />
            <v-col cols=8>
              <p class="summary-text">
                San Francisco spends more on policing than on certain departments -
                [insert sub department where SF spends less on average]. These departments need more
                funding to strengthen our communities and shared well-being.
              </p>
              <v-row align-content="center"> <v-btn
                class="city-filter__button"
                to="/balance-budget"
                color="#2a6465"
                nuxt
              >
                BALANCE BUDGET
              </v-btn> </v-row>
            </v-col>
          </v-row>

          <v-row class="content-row body-row white">
            <v-spacer />
            <v-col cols=4>
              <h2 class="section-title">2. Police Budget Trends</h2>
              <p class="section-text">Police budget spending has increased an average of </p>
              <p class="highlight-number">4.8%</p>
              <p class="section-text">per year over the past 20 years.</p>
              <p class="section-text">
                Excluding the year 2004, police spending has risen each year,
                including years in which the number of crime incidents fell.
              </p>
              <br />
              <p class="section-text">
                The increase in Police Budget is largely driven by an increase in
                Patrol Officer Salaries.
              </p>
              <p class="section-text">
                Sources show that the size of the SFPD patrol force has
                remained largely constant throughout this time period. However, this increase
                may be attributed to the steady rise in the Consumer Price Index (CPI) in the
                Bay Area during this same period of time.
              </p>
              <p class="section-text">
                In contrast, police spending on training has remained relatively stable.
                In fact, between 1999 and 2016, the police training budget had only
                increased by around $170,000.
              </p>
            </v-col>
            <v-col cols=4>
              <img src="../assets/images/incidents-v-police-budget.png" width="500">
              <img src="../assets/images/training-budget.png" width="500">
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row">
            <v-spacer />
            <v-col cols=4>
              <img src="../assets/images/uof-over-time.png" width="500">
              <img src="../assets/images/uof-by-race.png" width="500">
            </v-col>
            <v-col cols=4>
              <h2 class="section-title">3. Police Use of Force (UOF)</h2>
              <p class="section-text">
                Overall since 2015, the use of force (UOF) by police officers has decreased,
                largely due to a decrease in the number of
                firearm pointing incidents. In 2015, there were around 2,600 firearm pointing
                incidents while in 2019 there were around 900.
              </p>
              <p class="section-text">
                However, the rates of other
                forms of UOF incidents have stayed at around the same level. This may indicate
                that there is still much improvement to be made in police training.
              </p>
              <p class="section-text">
                TODO: insert elaboration on other use of force types here
              </p>
              <br /> <br />
              <p class="highlight-number">38%</p>
              <p class="section-text">
                of people in all UOF incidents were black, which is a largely
                disproportionate number to the population. This pattern was observed
                during the time period of 2015 to 2019.
              </p>
              <p class="section-text">
                In pointing of firearms incidents, there are considerably more incidents
                against Black people versus any other racial group.
              </p>
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row white">
            <v-col cols=8>
              TODO: decide if we want this conclusion or the one in the design
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
              <v-row align-content="center"> <v-btn
                class="city-filter__button"
                to="/take-action"
                color="#2a6465"
                nuxt
              >
                ACTIONS TO TAKE
              </v-btn> </v-row>
            </v-col>
          </v-row>
        </v-row>
        <v-row v-if="city === 'oakland'">
          Placeholder for Oakland narrative once finalized
        </v-row>
      </v-container>
    </v-main>

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
          text: 'San Francisco City Spending Data from 2017',
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
}

.section-text {
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 12px;
}

.highlight-number {
  font-size: 50px;
}

.summary-title {
  color: $dark-turquoise;
  text-align: center;
}

.summary-text {
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
}

.summary-highlight-number {
  font-size: 50px;
  text-align: center;
}

.explore-budget {
  max-width: 900px;
}

.page-body {
  margin-left: 15%;
  margin-right: 15%;
}

.city-filter__button {
  margin: 0 auto;
  @include p();
  font-weight: bold;
  color: $white-1;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 40px;
  height: 40px;
  width: 227px;
  border-radius: 40px;
}
</style>
