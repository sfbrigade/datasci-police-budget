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
                at around 8.7 billion dollars annually, while the annual police budget in
                San Francisco averaged at around 400 million dollars.
              </p>
              <v-row>
                <v-col cols=6>
                  <p class="summary-highlight-text">average annual total budget</p>
                  <p class="summary-highlight-number">$8.7B</p>
                </v-col>
                <v-col cols=6>
                  <p class="summary-highlight-text">average annual police budget</p>
                  <p class="summary-highlight-number">$400M</p>
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
              <v-row>
                <v-col cols=6>
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
                  <p class="highlight-text">
                    It makes up this much of the Public Protection budget:
                  </p>
                  <p class="highlight-number">64%</p>
                  <p class="highlight-text">
                    and this much of the city's overall budget:
                  </p>
                  <p class="highlight-number">20%</p>
                </v-col>
                <v-col cols=6>
                  <br /><br />
                  <Plotly :data="oaktreeMapData" :layout="oak_layout" :display-mode-bar="false"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols=6>
                  <p class="section-text">
                    The other departments under the Public Protection organization are the
                    Fire Department, Police Commission, the Department of Violence Prevention
                    and the Race and Equity Division. The Violence Prevention Department was
                    established in 2019 to reduce violent crimes, improve emergency response
                    times, and invest in violence prevention strategies in the community.
                  </p>
                  <p class="highlight-text">
                    Department of Violence Prevention:
                  </p>
                  <p class="highlight-number">$1.2 M</p>
                  <p class="section-text">
                    The Race and Equity department was established in 2015 to eliminate
                    systemic causes of racial disparities and promote inclusion in city
                    government and Oakland community.
                  </p>
                  <br />
                  <p class="highlight-text">
                    Department of Race and Equity budget:
                  </p>
                  <p class="highlight-number">$760 K</p>
                </v-col>
                <v-col cols=6>
                  <br /><br />
                </v-col>
              </v-row>
              <v-spacer />
              <p class="summary-text">
                Learn more about Oakland’s city budget.
              </p>
              <v-row align-content="center">
                <v-btn
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

          <v-row class="content-row body-row white">
            <v-spacer />
            <v-col cols=4>
              <h2 class="section-title">2. Police Budget Trends</h2>
              <p class="section-text">On average, the police department budget grew by: </p>
              <p class="highlight-number">10.5%</p>
              <p class="section-text">per year, compounded over the past 8 years. Around the
                same period, the authorized hiring of police officers increased by:
              </p>
              <p class="highlight-number">9.7%</p>
              <p class="section-text">
                Actual filled positions experienced an initial dip in the early 2010s
                but rose back to around 750 hires in 2018.
              </p>
            </v-col>
            <v-col cols=4>
              <Plotly :data="oak_police_budget" :layout="oak_police_budget_layout"
              :display-mode-bar="false"/>
              <Plotly :data="oak_police_ftes" :layout="oak_fte_layout"
              :display-mode-bar="false"/>
            </v-col>
            <v-spacer />
          </v-row>
          <v-row class="content-row body-row white">
            <v-col cols=6>
              <p class="summary-text">
                As of 2018, the department is about 17% Black or African American, an
                under-representation compared to Black or African Americans making up about
                28% of the broader Oakland community.
              </p>
            </v-col>
          </v-row>
          <v-row class="content-row body-row white">
            <v-spacer />
            <v-col cols=4>
              <p class="graph-title"> Race and Ethnicity: All Oakland Sworn Staff (2018)</p>
              <Plotly :data="oak_staff_pie" :layout="pieLayout" :display-mode-bar="false"/>
            </v-col>
            <v-col cols=4>
              <p class="graph-title"> Race and Ethnicity: Oakland Population (2010)</p>
              <Plotly :data="oak_pop_pie" :layout="pieLayout" :display-mode-bar="false"/>
            </v-col>
            <v-spacer />
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
                  v-model="use_of_force"
                  rounded
                  align-content="center"
                  color="white"
                  mandatory
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
                v-if="use_of_force === 'Level 1'"
                align="center"
                justify="center"
              >
                <v-col cols=6>
                  <Plotly :data="oak_uof_l1" :layout="oak_uof_layout" :display-mode-bar="false"/>
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
              <v-row
                align="center"
                justify="center"
                v-if="use_of_force === 'Level 2'"
              >
                <v-col cols=6>
                  <Plotly :data="oak_uof_l2" :layout="oak_uof_layout" :display-mode-bar="false"/>
                </v-col>
                <v-col cols=6
                >
                  <p class="highlight-text">
                    Level 2 Uses of Force include the following:
                  </p>
                  <ul>
                    <li>Any strike to the head (except for an intentional strike with an impact weapon)</li>
                    <li>Application of a carotid restraint without the loss of consciousness</li>
                    <li>Any use of an impact weapon or any other object with contact, regardless of injury</li>
                    <li>Any unintentional firearm discharge without injury</li>
                    <li>Any bite by a police canine</li>
                    <li>Any use of force resulting in injury requiring emergency medical treatment (beyond first aid) or hospital admittance</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row
                align="center"
                justify="center"
                v-if="use_of_force === 'Level 3'"
              >
                <v-col cols=6>
                  <Plotly :data="oak_uof_l3" :layout="oak_uof_layout" :display-mode-bar="false"/>
                </v-col>
                <v-col cols=6
                >
                  <p class="highlight-text">
                    Level 3 Uses of Force include the following:
                  </p>
                  <ul>
    <li>Oleoresin capsicum (pepper) spray or other chemical agent applied to a person</li>
    <li>Any use of an electronic control device when:</li>
        <ul>
        <li>One or more probes impact or penetrate the subject’s clothing or skin</li>
        <li>When the push stun arc touches the subject’s clothing or skin</li>
        <li>When an electronic control device is fired at a subject and misses</li>
        </ul>
    <li>Any use of an impact weapon or other instrument when no contact is made</li>
    <li>Any non-striking use of a baton, such as prying limbs apart, moving, or controlling a person</li>
    <li>Any of the following weaponless defense techniques: hand, palm, or elbow strikes; kicks; leg sweeps; takedowns</li>
    <li>Any on-duty firearm discharge at an animal other than to dispatch an injured animal</li>
                  </ul>
                </v-col>
              </v-row>
              <v-row
                align="center"
                justify="center"
                v-if="use_of_force === 'Level 4'"
              >
                <v-col cols=6>
                  <Plotly :data="oak_uof_l4" :layout="oak_uof_layout" :display-mode-bar="false"/>
                </v-col>
                <v-col cols=6
                >
                  <p class="highlight-text">
                    Level 4 Uses of Force include the following:
                  </p>
                  <ul>
    <li>Any intentional pointing of a firearm at a person</li>
    <li>Any weaponless defense technique applied to a vulnerable area, excluding strikes, including hair grab, pressure to mastoid or jaw line, and shoulder muscle grab</li>
    <li>Any of the following weaponless defense techniques: Control hold, escort (elbow), twist lock, arm-bar, bent-wrist</li>
    <li>Any on-duty firearm discharge to dispatch an injured animal</li>
    <li>Any Level 3 Use of Force reduced to a Level 4 Use of Force</li>
    <li>Any police canine deployment without contact</li>
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
                  <Plotly :data="oak_stops_data" :layout="oak_stops_layout" :display-mode-bar="false"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="content-row body-row white">
            <v-col cols=8>
              <p class="section-text">
                While use of force rates in general have decreased, there are still a large
                number of them and incidents still disproportionately affect African Americans.
                This indicates that although there have been improvements in the Oakland
                police force, there are still significant developments to be made.
              </p>
              <p class="section-text">
                The priorities of the 2019-2021 adopted budget are focusing on homelessness,
                affordable housing, and transportation improvements, among other initiatives.
                There is an additional $64 million dollars going to affordable housing and there
                is also a first-ever Commission on Homelessness being established. In the 20-21
                adopted budget, there is around $302 million dollars being allocated to the police
                department, which is an increase from the year before at $290 million. Some of
                these funds will be allocated to enhance training programs and to also include a
                community engagement process. A one-time $700,000 dollar investment into the OUSD
                Restorative Justice program has been made, and a complaint investigator to the
                Community Police Review Agency was added to improve responses to police misconduct.
                Additionally, under California’s new transparency law, there has been
                a paralegal added to the Office of the City Attorney to disclose police records.
                Finally, there has been another $1.6 million investment into the Department
                of Violence Prevention.
              </p>
              <p class="section-text">
                What do you think of this proposal? How do you feel about Oakland's history
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
import OAKLAND_BUDGET_TREE_MAP_FORMAT from '../assets/data/oakland_budget_tree_map_format';
import SF_BUDGET_TREE_MAP_FORMAT from '../assets/data/sf_budget_tree_map_format';
import SF_POLICE_BUDGET_DATA from '../assets/data/sf_police_budget_data.json';
import SF_POLICE_BUDGET_DETAIL_DATA from '../assets/data/sf_police_budget_detail.json';
import SF_FORCE_CATEGORY_DATA from '../assets/data/sf_force.json';
import SF_FORCE_BY_RACE_DATA from '../assets/data/sf_race_uof_and_pop_share.json';
import OAK_POLICE_BUDGET_DATA from '../oaklanddataset/plot_data/oak_police_budget_data.json';
import OAK_STAFFING_DATA from '../oaklanddataset/plot_data/oakland_sworn_ftes.json';
import OAK_UOF_1 from '../oaklanddataset/plot_data/oakland_l1.json';
import OAK_UOF_2 from '../oaklanddataset/plot_data/oakland_l2.json';
import OAK_UOF_3 from '../oaklanddataset/plot_data/oakland_l3.json';
import OAK_UOF_4 from '../oaklanddataset/plot_data/oakland_l4.json';
import OAK_POP from '../oaklanddataset/plot_data/oakland_pop.json';
import OAK_STAFF from '../oaklanddataset/plot_data/oakland_staff.json';
import OAK_STOPS from '../oaklanddataset/plot_data/oakland_stops_ethnicity.json';

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

const oakBudgetYear = [];
const oakBudgetTotal = [];
const oakBudgetGf = [];

OAK_POLICE_BUDGET_DATA.forEach((item) => {
  oakBudgetYear.push(item.year);
  oakBudgetTotal.push(item.total);
  oakBudgetGf.push(item.general_fund);
});

const uofL1Year = [];
const uofL1Force = [];

const uofL2Year = [];
const uofL2Force = [];

const uofL3Year = [];
const uofL3Force = [];

const uofL4Year = [];
const uofL4Force = [];

OAK_UOF_1.forEach((item) => {
  uofL1Year.push(item.year);
  uofL1Force.push(item.lv_1);
});

OAK_UOF_2.forEach((item) => {
  uofL2Year.push(item.year);
  uofL2Force.push(item.lv_2);
});

OAK_UOF_3.forEach((item) => {
  uofL3Year.push(item.year);
  uofL3Force.push(item.lv_3);
});

OAK_UOF_4.forEach((item) => {
  uofL4Year.push(item.year);
  uofL4Force.push(item.lv_4);
});

const oakStaffingDate = [];
const oakStaffBudgeted = [];
const oakStaffActual = [];

OAK_STAFFING_DATA.forEach((item) => {
  oakStaffingDate.push(item.Date);
  oakStaffBudgeted.push(item['Authorized Sworn FTE']);
  oakStaffActual.push(item['Actual Sworn FTE']);
});

const oakRace = [];
const oakPopRace = [];
const oakStaffRace = [];

OAK_POP.forEach((item) => {
  oakRace.push(item['Race/Ethnicity']);
  oakPopRace.push(item['Population of Oakland']);
});

OAK_STAFF.forEach((item) => {
  oakStaffRace.push(item['Number of Sworn Staff']);
});

const stopsYear = [];
const stopsAsian = [];
const stopsBlack = [];
const stopsHispanic = [];
const stopsOther = [];
const stopsWhite = [];

OAK_STOPS.forEach((item) => {
  stopsYear.push(item['year']);
  stopsAsian.push(item['asian']);
  stopsBlack.push(item['black']);
  stopsHispanic.push(item['hispanic']);
  stopsOther.push(item['other']);
  stopsWhite.push(item['white']);
});

export default Vue.extend({
  title: 'Explore Trends | Police Trends',
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
      oaktreeMapData: [{
        type: 'treemap',
        branchvalues: 'total',
        labels: oaklabels,
        parents: oakparents,
        values: oakvalues,
      }],
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
        line: {
          color: 'rgb(42, 100, 101)',
        },
      }],
      oak_police_budget: [
        {
          type: 'scatter',
          x: oakBudgetYear,
          y: oakBudgetTotal,
          name: 'Total',
        },
        {
          type: 'scatter',
          x: oakBudgetYear,
          y: oakBudgetGf,
          name: 'General Fund',
        },
      ],
      oak_uof_l1: [{
        type: 'scatter',
        x: uofL1Year,
        y: uofL1Force,
        name: 'Level 1',
      }],
      oak_uof_l2: [{
        type: 'scatter',
        x: uofL2Year,
        y: uofL2Force,
        name: 'Level 2',
      }],
      oak_uof_l3: [{
        type: 'scatter',
        x: uofL3Year,
        y: uofL3Force,
        name: 'Level 3',
      }],
      oak_uof_l4: [{
        type: 'scatter',
        x: uofL4Year,
        y: uofL4Force,
        name: 'Level 4',
      }],
      oak_police_ftes: [
        {
          type: 'scatter',
          x: oakStaffingDate,
          y: oakStaffBudgeted,
          name: 'Authorized',
        },
        {
          type: 'scatter',
          x: oakStaffingDate,
          y: oakStaffActual,
          name: 'Actual',
        },
      ],
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
      oak_staff_pie: [{
        values: oakStaffRace,
        labels: oakRace,
        type: 'pie',
      }],
      oak_pop_pie: [{
        values: oakPopRace,
        labels: oakRace,
        type: 'pie',
      }],
      oak_stops_data : [
        {
          type: 'scatter',
          x: stopsYear,
          y: stopsAsian,
          name: 'Asian',
        },
        {
          type: 'scatter',
          x: stopsYear,
          y: stopsBlack,
          name: 'Black',
        },
        {
          type: 'scatter',
          x: stopsYear,
          y: stopsHispanic,
          name: 'Hispanic',
        },
        {
          type: 'scatter',
          x: stopsYear,
          y: stopsOther,
          name: 'Other',
        },
        {
          type: 'scatter',
          x: stopsYear,
          y: stopsWhite,
          name: 'White',
        },
      ],
      layout: {
        title: {
          text: 'SF Total City Spend by Department (2017)',
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
          t: 100,
          b: 10,
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        colorway: ['#CF722A', '#F5BD41', '#2A6465', '#4296AD', '#4DA54A', '#CAAA97', '#EF896E'],
      },
      oak_layout: {
        title: {
          text: 'Oakland Total City Spend by Department (2017)',
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
          t: 30,
          b: 20,
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        colorway: ['#CF722A', '#F5BD41', '#2A6465', '#4296AD', '#4DA54A', '#CAAA97', '#EF896E'],
      },
      oak_stops_layout : {
        title: {
          text: `Stops in Oakland by Race/Ethnicity 2014-2018`,
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
      oak_uof_layout : {

        title: {
          text: 'Use of Force',
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
        plot_bgcolor: 'F1F8F8',
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
      oak_fte_layout: {
        title: {
          text: 'Oakland Sworn Officers 2010-2019',
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
      oak_police_budget_layout: {
        title: {
          text: 'Oakland City Police Department Budget 2013-2016',
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
      pieLayout: {
        height: 400,
        width: 500,
      },
      use_of_force: 'Level 1',
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
