<template>
  <v-app>
    <v-row>
      <Header />
    </v-row>

    <v-main>
      <v-container fluid fill-height>
        <v-row justify="center" class="body-row">
          <h2 class="Section-Title">Explore Trends</h2>
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
              <p class="highlight-number">39.3%</p>
              <br />
              <p class="highlight-text">
                and this much of the city's overall budget:
              </p>
              <p class="highlight-number">4.6%</p>
            </v-col>
            <v-col cols=4>
                <Plotly :data="treeMapData" :layout="layout" :display-mode-bar="false"/>
            </v-col>
            <v-spacer />
            <v-col cols=8>
              <p class="summary-text">
                In 2017, San Francisco spent more on the police sub-department than it spent on
                the sub-department of Homelessness Services and the whole Culture and Recreation
                department, combined. These departments need more
                funding to strengthen our communities and shared well-being. Think through how YOU
                would allocate funds using our Balance Budget tool!
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
              <p class="highlight-text">per year, compounded over the past 20 years.</p>
              <br />
              <p class="section-text">
                This spending has risen almost every year, including years in which
                the number of crime incidents reported fell.
              </p>
              <br />
              <br />
              <p class="highlight-text">
                The increase in Police Budget is largely driven by an increase in
                Patrol Officer Salaries.
              </p>
              <p class="section-text">
                Though the city's overall spend on Patrol has increased, sources show that the size
                of the SFPD patrol force has remained largely constant throughout this time period.
                Some of this salary increase may be attributed to the steady rise in the Consumer
                Price Index (CPI) in the Bay Area during this same period of time.
              </p>
              <p class="section-text">
                In contrast, police spending on training has remained relatively stable.
                In fact, between 1999 and 2016, the police training budget has only
                increased by around $170,000.
              </p>
            </v-col>
            <v-col cols=4>
              <Plotly :data="sf_police_budget"
              :layout="police_budget_layout" :display-mode-bar="false"/>
              <Plotly :data="sf_police_budget_detail"
              :layout="police_budget_detail_layout" :display-mode-bar="false"/>
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row white">
            <v-spacer />
            <v-col cols=9 class="transition-box">
              <v-row>
                <v-col cols=1 align="center">
                  <br />
                  <v-img :src="require('../assets/images/Bulb_icon.png')" max-width="25" />
                </v-col>
                <v-col cols=11>
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
              </v-row>
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row">
            <v-spacer />
            <v-col cols=4>
               <Plotly :data="sf_force_type" :layout="force_type_layout" :display-mode-bar="false"/>
              <Plotly :data="sf_force_by_race"
              :layout="force_race_layout" :display-mode-bar="false"/>
            </v-col>
            <v-col cols=4>
              <h2 class="section-title">3. Police Use of Force (UOF)</h2>
              <p class="section-text">
                Overall since 2015, the number of use of force (UOF) incidents by police
                officers has decreased, largely due to a decrease in the number of
                firearm pointing incidents. In 2015, there were around 2,600 firearm pointing
                incidents while in 2019 there were around 900.
              </p>
              <p class="section-text">
                However, the rates of other forms of UOF incidents have stayed at around
                the same level. This suggests there is still much improvement to be made
                in police training and calls into question the rising budget
                the city allocates towards its police force.
              </p>
              <br />
              <p class="highlight-number">38%</p>
              <p class="highlight-text">
                of people in all UOF incidents from 2015 to 2020 were Black, though Black folks
                only made up ~5% of the total SF population in that same time period.
              </p>
              <br />
              <p class="section-text">
                In pointing of firearms incidents in particular, there were
                considerably more incidents
                against Black people versus against any other racial group, both in
                absolute terms and as a percentage of the total Black population.
              </p>
            </v-col>
            <v-spacer />
          </v-row>

          <v-row class="content-row body-row white">
            <v-col cols=8>
              <p class="section-text">
                Though our analysis reflects that the SF police force has changed throughout
                the past few decades, there remain many areas of improvement for
                this city spending to better serve our community.
              </p>
              <p class="section-text">
                In the mayor's most recent proposed budget, the city plans to re-invest
                $120M in funds over 2 years, predominantly pulling from the city's
                law enforcement departments in order to fund efforts towards repairing
                the legacy of racially disparate policies in health, housing, and economic
                relief on the Black community. 60% of the funding will be directed
                towards mental health, wellness, and homelessness, and 35% directed to
                education, youth development, and economic opportunity.
              </p>
              <p class="section-text">
                What do you think of this proposal? How do you feel about SF's history
                of police budget spending? Get involved and make your voice heard!
              </p>
              <v-row align-content="center"> <v-btn
                class="city-filter__button"
                to="/take-action"
                color="#2a6465"
                nuxt
              >
                TAKE ACTION
              </v-btn> </v-row>
            </v-col>
          </v-row>
        </v-row>
        <v-row v-if="city === 'oakland'">
          <v-row class="content-row body-row white">
            <v-col cols=6>
              <h2 class="summary-title">Summary</h2>
              <p class="summary-text">
                From 2013-2020, the total city budget spending for Oakland
                averaged at around 1.3 billion dollars annually,
                while the annual police budget in Oakland averaged at around
                258 million dollars. To better understand the role
                that the police department plays in Oakland, let’s dive into
                some of the details of how the police budget is used.
              </p>
              <v-row>
                <v-col cols=6>
                  <p class="summary-highlight-text">average annual total budget</p>
                  <p class="summary-highlight-number">$1.3B</p>
                </v-col>
                <v-col cols=6>
                  <p class="summary-highlight-text">average annual police budget</p>
                  <p class="summary-highlight-number">$258M</p>
                </v-col>
              </v-row>
              <p class="summary-text">
                To better understand the role that the police department plays in Oakland,
                let’s dive into some of the details of how the police budget is used.
              </p>
            </v-col>
          </v-row>

          <v-row class="content-row body-row">
            <v-col cols=8>
              <h2 class="section-title">1. Budget Overview</h2>
              <p class="section-text">
                There are five categories of organizations within Oakland
                -- General Administration & Finance,
                Human Welfare and Neighborhood Development, Culture & Recreation,
                Public Works, Transportation,
                and Commerce, and Public Protection. Oakland’s police department
                lies under the Public Protection
                organization. In FY 2020-2021, the police department spending made
                up about 20% of the total city
                budget, or about $330 million.
              </p>
              <v-row>
                <v-col cols=6>
                  <br /><br />
                  <p class="highlight-text">
                    It makes up this much of the Public Protection budget:
                  </p>
                  <p class="highlight-number">64%</p>
                  <br />
                  <p class="highlight-text">
                    and this much of the city's overall budget:
                  </p>
                  <p class="highlight-number">20%</p>
                </v-col>
                <v-col cols=6>
                  <Plotly :data="oaktreeMapData" :layout="layout" :display-mode-bar="false"/>
                </v-col>
              </v-row>
              <v-spacer />
                <p class="summary-text">
                  The other departments under the Public Protection organization
                  are the Police Commission, the
                  Department of Violence Prevention and the Race and Equity Division.
                  The violence prevention
                  department was established in 2019 to reduce violent crimes,
                  improve emergency response times, and
                  invest in violence prevention strategies in the community.
                  The Race and Equity department was
                  established in 2015 to eliminate systemic causes of racial disparities
                  and promote inclusion in
                  city government and Oakland community. In 2020, the Police Department
                  was the most funded department
                  by far in comparison to Race and Equity ($760k, or about 0.05% of the
                  budget) or the Department of
                  Violence Prevention ($1.2 million, about 0.07% of the budget). Think
                  through how YOU would allocate
                  funds using our Balance Budget tool!
                </p>
                <v-row align-content="center"> <v-btn
                  class="city-filter__button"
                  to="/balance-budget"
                  color="#2a6465"
                  nuxt
                >
                  BALANCE BUDGET
                </v-btn>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="content-row body-row">
            <v-col cols=8>
              <h2 class="section-title">3. Use Of Force</h2>
              <p class="section-text">
                Use of force is defined as any physical or mechanical intervention used by
                a member or employee to defend, control, overpower, restrain or overcome the
                resistance of an individual.
              </p>

              <p class="section-text">
                From 2007 to 2016, use of force incidents with serious injuries or
                death averaged around 6 incidents annually. Other use of force incidents
                rates varied but at large declined significantly. However, in 2016,
                there were 470 reported level 4 incidents, which can include any intentional
                pointing of a firearm or a weaponless defense technique applied to a
                vulnerable area.
              </p>

              <p class="section-text">
                Tab through the levels to view use of force definitions and trends.
              </p>
              <br /> <br />
              <v-row
                align="center"
                justify="center"
              >
                <v-btn-toggle
                  v-model="text"
                  rounded
                  align-content="center"
                  color="white"
                >
                  <v-btn
                    value="Level 1"
                    class="btn-toggle"
                    active-class="btn-toggled"
                  >
                    Level 1
                  </v-btn>

                  <v-btn
                    value="Level 2"
                    class="btn-toggle"
                    active-class="btn-toggled"
                  >
                    Level 2
                  </v-btn>

                  <v-btn
                    value="Level 3"
                    class="btn-toggle"
                    active-class="btn-toggled"
                  >
                    Level 3
                  </v-btn>

                  <v-btn
                    value="Level 4"
                    class="btn-toggle"
                    active-class="btn-toggled"
                  >
                    Level 4
                  </v-btn>
                </v-btn-toggle>
              </v-row>
              <br />
              <v-row
                align="center"
                justify="center"
              >
                <v-col cols=6>
                  <v-img :src="require('../assets/images/oakland-uof-over-time.png')" />
                </v-col>
                <v-col cols=6
                >
                  <p class="highlight-text">
                    Level 1 Uses of Force include the following:
                  </p>
                  <ul>
                    <li>Any use of force resulting in death</li>
                    <li>Any intentional firearm discharge at a person, regardless of injury</li>
                    <li>Any force with a substantial risk of causing death</li>
                    <li>Any force resulting in serious bodily injuries</li>
                    <li>Any unintentional firearm discharge with injury or as directed by
                      the Bureau of Investigations Deputy Chief</li>
                    <li>Any intentional impact weapon strike to the head</li>
                    <li>Any use of force investigation elevated to Level 1
                      approved by a Watch Commander</li>
                  </ul>
                </v-col>
              </v-row>
              <br /><br />
              <v-row align="center"
                justify="center">
                <p>
                  Additionally, the proportion of police stops which involve Black community
                  members are nearly double the proportion of Black people in Oakland and
                  the numbers aren’t going down.  A lever for change could be focusing on the
                  department’s proportion of Black officers, which in contrast is only 60% of
                  the proportion of Black Oakland residents.
                </p>
              </v-row>
              <v-row>
                <v-col cols=6>
                  <br /><br />
                  <p class="highlight-text">
                    In 2018, Black or African Americans make up
                  </p>
                  <br />
                  <div class="highlight-div">
                    <p class="highlight-number">17%</p>
                    <p class="highlight-text">
                      of Oakland's Police Department
                    </p>
                  </div>
                  <div class="highlight-div">
                    <p class="highlight-number">28%</p>
                    <p class="highlight-text">
                      of Oakland's Population
                    </p>
                  </div>
                  <div class="highlight-div">
                    <p class="highlight-number">60%</p>
                    <p class="highlight-text">
                      of discretionary stops by police officers
                    </p>
                  </div>
                </v-col>
                <v-col cols=6 >
                  <v-img :src="require('../assets/images/oakland-disc-stops.png')" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
import OAKLAND_BUDGET_TREE_MAP_FORMAT from '../assets/data/oakland_budget_tree_map_format';
import SF_POLICE_BUDGET_DATA from '../assets/data/sf_police_budget_data.json';
import SF_POLICE_BUDGET_DETAIL_DATA from '../assets/data/sf_police_budget_detail.json';
import SF_FORCE_CATEGORY_DATA from '../assets/data/sf_force.json';
import SF_FORCE_BY_RACE_DATA from '../assets/data/sf_race_uof_and_pop_share.json';

const labels = [];
const parents = [];
const values = [];
const oaklabels = [];
const oakparents = [];
const oakvalues = [];
SF_BUDGET_TREE_MAP_FORMAT.forEach((item) => {
  labels.push(item.Department);
  parents.push(item.Parent);
  values.push(item['2017']);
});

OAKLAND_BUDGET_TREE_MAP_FORMAT.forEach((item) => {
  oaklabels.push(item.Department);
  oakparents.push(item.Parent);
  oakvalues.push(item['2020']);
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

const budgetDetailY = [];
const patrol = [];
const ops = [];
const specialOps = [];
const recruitment = [];
const training = [];
SF_POLICE_BUDGET_DETAIL_DATA.forEach((item) => {
  budgetDetailY.push(item.Year);
  patrol.push(item.Patrol);
  ops.push(item['Operations and Administration']);
  specialOps.push(item['Special Operations']);
  recruitment.push(item['SFPD-Recruitment And Examination Program']);
  training.push(item['SFPD Training']);
});

const uofWhite = [];
const uofBlack = [];
const uofHisp = [];
const uofAsian = [];
const uofYear = [];

SF_FORCE_BY_RACE_DATA.forEach((item) => {
  uofYear.push(item.year);
  uofWhite.push(item.White);
  uofBlack.push(item.Black);
  uofHisp.push(item.Hispanic);
  uofAsian.push(item['Asian or Pacific Islander']);
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
      oaktreeMapData: [{
        type: 'treemap',
        branchvalues: 'total',
        oaklabels,
        oakparents,
        oakvalues,
      }],
      sf_police_budget: [{
        type: 'scatter',
        x: policeSpendingX,
        y: policeSpendingY,
        line: {
          color: 'rgb(42, 100, 101)',
        },
      }],
      sf_police_budget_detail: [
        {
          type: 'scatter',
          x: budgetDetailY,
          y: patrol,
          name: 'Patrol',
          line: {
            color: '#2A6465',
          },
        },
        {
          type: 'scatter',
          x: budgetDetailY,
          y: ops,
          name: 'Operations and Administration',
          line: {
            color: '#4DA54A',
          },
        },
        {
          type: 'scatter',
          x: budgetDetailY,
          y: specialOps,
          name: 'Special Operations',
          line: {
            color: '#EF896E',
          },
        },
        {
          type: 'scatter',
          x: budgetDetailY,
          y: recruitment,
          name: 'SFPD-Recruitment And Examination Program',
          line: {
            color: '#4296AD',
          },
        },
        {
          type: 'scatter',
          x: budgetDetailY,
          y: training,
          name: 'SFPD Training',
          line: {
            color: '#F5BD41',
          },
        },
      ],
      sf_force_type: [
        {
          type: 'bar',
          x: forceYear,
          y: strike,
          name: 'Strike',
          marker: {
            color: '#2A6465',
          },
        },
        {
          type: 'bar',
          x: forceYear,
          y: fireArm,
          name: 'Firearm',
          marker: {
            color: '#EF896E',
          },
        },
        {
          type: 'bar',
          x: forceYear,
          y: physicalControl,
          name: 'Physical Control',
          marker: {
            color: '#F5BD41',
          },
        },
      ],
      sf_force_by_race: [
        {
          type: 'scatter',
          x: uofYear,
          y: uofWhite,
          name: 'White',
        },
        {
          type: 'scatter',
          x: uofYear,
          y: uofBlack,
          name: 'Black',
        },
        {
          type: 'scatter',
          x: uofYear,
          y: uofHisp,
          name: 'Hispanic / Latino',
        },
        {
          type: 'scatter',
          x: uofYear,
          y: uofAsian,
          name: 'Asian or Pacific Islander',
        },
      ],
      layout: {
        title: {
          text: `${this.$store.state.city === 'oakland' ? 'Oakland' : 'SF'} Total City Spend by Department (2017)`,
          font: {
            family: 'Nunito',
            size: 18,
            color: '#000000',
          },
        },
        font: {
          family: 'Nunito',
        },
        margin: {
          l: 10,
          r: 10,
          t: this.$store.state.city === 'oakland' ? 30 : 100,
          b: this.$store.state.city === 'oakland' ? 20 : 10,
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        colorway: ['#CF722A', '#F5BD41', '#2A6465', '#4296AD', '#4DA54A', '#CAAA97', '#EF896E'],
      },
      force_type_layout: {
        title: {
          text: 'SF Use of Force by Type (2016-2019)',
          font: {
            size: 18,
            family: 'Nunito',
          },
          yref: 'paper',
          y: 2,
          yanchor: 'bottom',
        },
        font: {
          size: 10,
          family: 'Nunito',
        },
        showlegend: true,
        legend: {
          orientation: 'h',
        },
        plot_bgcolor: '#F1F8F8',
        paper_bgcolor: 'F1F8F8',
      },
      force_race_layout: {
        title: {
          text: 'SF Use of Force by Race per 100K (2016-2020)',
          font: {
            size: 18,
            family: 'Nunito',
          },
          yref: 'paper',
          y: 2,
          yanchor: 'bottom',
        },
        font: {
          size: 10,
          family: 'Nunito',
        },
        showlegend: true,
        legend: {
          orientation: 'h',
        },
        plot_bgcolor: '#F1F8F8',
        paper_bgcolor: 'F1F8F8',
      },
      police_budget_detail_layout: {
        title: {
          text: 'SF City Police Sub-Departments (1999-2017)',
          font: {
            size: 18,
            family: 'Nunito',
          },
          yref: 'paper',
          y: 2,
          yanchor: 'bottom',
        },
        font: {
          size: 10,
          family: 'Nunito',
        },
        margin: {
          t: 40,
          pad: 5,
        },
        showlegend: false,
      },
      police_budget_layout: {
        title: {
          text: 'SF City Police Department Budget (1999-2017)',
          font: {
            size: 18,
            family: 'Nunito',
          },
          yref: 'paper',
          y: 2,
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
        },
        font: {
          size: 10,
          family: 'Nunito',
        },
        margin: {
          t: 110,
          pad: 5,
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

.highlight-div {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.highlight-number {
  font-size: 75px;
  font-family: 'Bebas Neue', cursive;
  line-height: 75px;
}

.highlight-text{
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
}

.highlight-div .highlight-text {
  margin-left: 10px;
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
  font-family: 'Bebas Neue', cursive;
  line-height: 75px;
}

.summary-highlight-text {
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 6px;
}

.graph-title {
  font-size: 18px;
  margin-top: 28px;
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

.btn-toggle {
color: #2A6465;
}

.btn-toggled {
  background: rgba(42, 100, 101, 0.2) !important;
  color: #2A6465 !important;
}
</style>
