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
            <v-col cols=5>
              <h2 class="summary-title">Summary</h2>
              <p class="summary-text">
                From 1999-2017, the total city budget spending for San Francisco averaged
                at around 1.1 billion dollars annually, while the annual police budget in
                San Francisco averaged at around 420 million dollars.
              </p>
              <v-row>
                <v-col cols=6>
                  <p class="summary-highlight-text">average annual total budget</p>
                  <p class="summary-highlight-number">$1.1B</p>
                </v-col>
                <v-col cols=6>
                  <p class="summary-highlight-text">average annual police budget</p>
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
              <p class="highlight-text">
                It makes up this much of the Public Protection budget:
              </p>
              <p class="highlight-number">37.5%</p>
              <br />
              <p class="highlight-text">
                and this much of the city's overall budget:
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
              <p class="highlight-text">Police budget spending has increased an average of </p>
              <p class="highlight-number">4.8%</p>
              <p class="highlight-text">per year over the past 20 years.</p>
              <br />
              <p class="section-text">
                Excluding the year 2004, police spending has risen each year,
                including years in which the number of crime incidents fell.
              </p>
              <br />
              <br />
              <p class="highlight-text">
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
              <Plotly :data="sf_police_budget" :layout="police_budget_layout"
              :display-mode-bar="false"/>
              <br />
              <br />
              <Plotly :data="sf_police_budget_detail" :layout="police_budget_detail_layout"
              :display-mode-bar="fasle"/>
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row white">
            <v-spacer />
            <v-col cols=8 class="transition-box">
              <img src="../assets/images/lightbulb-icon.png" width="50">
              <h2 class="section-title">What does police training involve?</h2>
              <p class="section-text">
                Each member of the San Francisco Police Department is trained at the Basic
                Academy, where they spend 34 weeks learning state laws, criminal
                investigations, patrol procedures, firearms training, traffic control,
                defensive driving, self-defense, first aid, and use of force policies. Physical
                training and fieldwork include investigating mock criminal scenes, directing
                traffic, operating police vehicles, arrest techniques, using firearms, and
                interrogation methods. Following graduation, newly sworn SFPD officers undergo
                a 16-week field-training program under the supervision Field training
                Officers at various district stations.
              </p>
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row">
            <v-spacer />
            <v-col cols=4>
              <Plotly :data="sf_force_type" :layout="force_type_layout" :displaly-mode-bar="false"/>
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
              <p class="highlight-text">
                of people in all UOF incidents from 2015 to 2019 were black,
              </p>
              <p class="section-text">
                which is a largely disproportionate number to the population.
              </p>
              <br />
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
import SF_POLICE_BUDGET_DATA from '../assets/data/sf_police_budget_data.json';
// import SF_INCIDENTS_DATA from '../assets/data/sf_incidents.json';
// import SF_POLICE_BUDGET_DETAIL_DATA from '../assets/data/sf_police_budget_detail.json'
import SF_FORCE_CATEGORY_DATA from '../assets/data/sf_force.json';
// import SF_FORCE_BY_RACE_DATA from '../assets/data/sf_race_uof_and_pop_share.json'

const labels = [];
const parents = [];
const values = [];
SF_BUDGET_TREE_MAP_FORMAT.forEach((item) => {
  labels.push(item.Department);
  parents.push(item.Parent);
  values.push(item['2017']);
});

const policeSpendingX = [];
const policeSpendingY = [];
SF_POLICE_BUDGET_DATA.forEach((item) => {
  policeSpendingX.push(item.Year);
  policeSpendingY.push(item.Amount);
});

const physicalControl = [];
const fireArm = [];
const strike = [];
const forceYear = [];
for (let i = 0; i < SF_FORCE_CATEGORY_DATA.length; i += 1) {
  if (SF_FORCE_CATEGORY_DATA[i]['Force Description'] === 'Physical Control') {
    physicalControl.push(SF_FORCE_CATEGORY_DATA[i].incident_count);
    forceYear.push(SF_FORCE_CATEGORY_DATA[i].year);
  } else if (SF_FORCE_CATEGORY_DATA[i]['Force Description'] === 'Pointing of Firearms') {
    fireArm.push(SF_FORCE_CATEGORY_DATA[i].incident_count);
  } else if (SF_FORCE_CATEGORY_DATA[i]['Force Description'] === 'Strike by Object/Fist') {
    strike.push(SF_FORCE_CATEGORY_DATA[i].incident_count);
  }
}
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
      sf_police_budget: [{
        type: 'scatter',
        x: policeSpendingX,
        y: policeSpendingY,
      }],
      sf_force_type: [
        {
          type: 'bar',
          x: forceYear,
          y: strike,
          name: 'Strike',
        },
        {
          type: 'bar',
          x: forceYear,
          y: fireArm,
          name: 'Firearm',
        },
        {
          type: 'bar',
          x: forceYear,
          y: physicalControl,
          name: 'Physical Control',
        },
      ],
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
      force_type_layout: {
        title: {
          text: 'Use of Force',
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
      police_budget_layout: {
        title: {
          text: 'San Francisco City Police Department Budget 1999-2017',
          font: {
            size: 11,
          },
          yref: 'paper',
          y: 1,
          yanchor: 'bottom',
        },
        xaxis: {
          autorange: true,
          range: [1995, 2020],
          type: 'linear',
        },
        yaxis: {
          autorange: false,
          range: [0, 600000000],
          type: 'linear',
          tickformat: ',.2f',
          tickprefix: '$',
        },
        font: {
          size: 10,
        },
        width: 500,
        height: 400,
        margin: {
          t: 45,
          l: 45,
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
      },
    };
  },
});
</script>
<style scoped lang="scss">

.transition-box {
  background: $gray-6;
  border-radius: 16px;
}

.section-title {
  color: $dark-turquoise;
  margin-top: 28px;
  margin-bottom: 14px;
}

.section-text {
  font-size: 18px;
}

.highlight-number {
  font-size: 75px;
  font-family: Bebas;
  line-height: 75px;
}

.highlight-text{
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
}

.summary-title {
  color: $dark-turquoise;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 14px;
}

.summary-text {
  font-size: 18px;
  text-align: center;
}

.summary-highlight-number {
  font-size: 75px;
  text-align: center;
  font-family: Bebas;
  line-height: 75px;
}

.summary-highlight-text {
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 6px;
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
