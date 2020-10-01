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
                      <v-row class="mb-5"><div class="Subsection-Amount">${{total_expenses}} mil</div></v-row>
                      <v-row><div class="Subsection-Title">Expenses</div></v-row>
                      <v-row><div class="Subsection-Subtitle">(in millions)</div></v-row>
                      <v-row><div class="Subsection-Body">There are 7 categories that make up San Francisco's budget.
                        Use the levers to adjust and balance the spending for each category, then compare to the actual budget.</div></v-row>
                      <v-row class="mb-0" v-if="exceeds_limit"><div class="Slider-Hint">Note: Total expenses allocated exceeds revenue.</div></v-row>
                </v-col>
                <v-col cols=6> 
                    <D3PieChart v-if="is_mounted" :config="budget_pie_chart_config" :datum="budget_pie_chart_data" />
                </v-col> 
            </v-row>
            <v-row justify="center">
                <v-spacer />
                <v-col cols=2>
                    <div class="color Health-Color" /><div class="Slider-Title">Community Health
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-col cols=2>
                    <div class="color Culture-Color" /><div class="Slider-Title">Culture & Recreation
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-col cols=2>
                    <div class="color Admin-Color" /><div class="Slider-Title">General Admin & Finance
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-col cols=2>
                    <div class="color City-Color" /><div class="Slider-Title">General City Responsibilities
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-spacer />
            </v-row>
            <v-row>
                <v-spacer />
                <v-col cols=2><div class="Slider-Amount">${{health_value}} mil</div></v-col>
                <v-col cols=2><div class="Slider-Amount">${{culture_value}} mil</div></v-col>
                <v-col cols=2><div class="Slider-Amount">${{admin_value}} mil</div></v-col>
                <v-col cols=2><div class="Slider-Amount">${{city_value}} mil</div></v-col>
                <v-spacer />
            </v-row>
            
            <v-row>
                <v-spacer />
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="health_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('Community Health', health_value, '#2A6465')"
                        :rules="revenue_limit_rule" label=" " 
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="culture_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('Culture & Recreation', culture_value, '#EF896E')"
                        :rules="revenue_limit_rule" label=" "
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="admin_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('General Admin & Finance', admin_value, '#F5BD41')"
                        :rules="revenue_limit_rule" label=" "
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="city_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('General City Responsibilities', city_value, '#CAAA97')"
                        :rules="revenue_limit_rule" label=" "
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-spacer />
            </v-row> 
            
            <v-row justify="center">
                <v-spacer />
                <v-col cols=2>
                    <div class="color Welfare-Color" /><div class="Slider-Title">Human Welfare & Neighborhood Development
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-col cols=2>
                    <div class="color Protection-Color" /><div class="Slider-Title">Public Protection
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-col cols=2>
                    <div class="color Transport-Color" /><div class="Slider-Title">Public Works, Transportation & Commerce
                    <v-tooltip bottom><template v-slot:activator="{ on, attrs }"><span v-bind="attrs" v-on="on">(i)</span></template><span>Placeholder, will replace with actual text and icon later</span></v-tooltip></div>
                </v-col>
                <v-spacer />
            </v-row>
            <v-row>
                <v-spacer />
                <v-col cols=2><div class="Slider-Amount">${{welfare_value}} mil</div></v-col>
                <v-col cols=2><div class="Slider-Amount">${{protection_value}} mil</div></v-col>
                <v-col cols=2><div class="Slider-Amount">${{transport_value}} mil</div></v-col>
                <v-spacer />
            </v-row>
            <v-row>
                <v-spacer />
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="welfare_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('Human Welfare & Neighborhood Development', welfare_value, '#4DA54A')"
                        :rules="revenue_limit_rule" label=" "
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="protection_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('Public Protection', protection_value, '#4296AD')"
                        :rules="revenue_limit_rule" label=" "
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-col cols=2>
                    <v-row justify="center">
                        <v-slider v-model="transport_value" vertical :max="slider_max" :min="slider_min"
                        @change="editPieChart('Public Works, Transportation & Commerce', transport_value, '#CF722A')"
                        :rules="revenue_limit_rule" label=" "
                        track-color=#B6DADA color=#2A6465 />
                    </v-row>
                </v-col>
                <v-spacer />
            </v-row> 
            <v-row justify="center" class="my-10">
                <v-spacer />
                <v-col cols=2><v-btn rounded color=#2A6465 dark block>NEXT</v-btn></v-col>
                <v-spacer />
            </v-row>
          </v-col>
          <v-spacer />
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

import CitySelect from "@/components/CitySelect";
import FiscalYearSelect from "@/components/FiscalYearSelect";

import DepartmentsWalkthrough from "@/components/DepartmentsWalkthrough";


const total_expenses = 1234.0
const starting_expense = total_expenses / 7.0
let current_expenses = [
    {name: "Community Health", total: starting_expense, dept_color: '#2A6465'},
    {name: "Culture & Recreation", total: starting_expense, dept_color: '#EF896E'},
    {name: "General Admin & Finance", total: starting_expense, dept_color: '#F5BD41'},
    {name: "General City Responsibilities", total: starting_expense, dept_color: '#CAAA97'},
    {name: "Human Welfare & Neighborhood Development", total: starting_expense, dept_color: '#4DA54A'},
    {name: "Public Protection", total: starting_expense, dept_color: '#4296AD'},
    {name: "Public Works, Transportation & Commerce", total: starting_expense, dept_color: '#CF722A'}
]
 
export default Vue.extend({
  components: {
    CitySelect,
    FiscalYearSelect,
    Header,
    Footer,
    D3PieChart,
    DepartmentsWalkthrough
  },
  mounted() {
      this.is_mounted = true;
      this.exceeds_limit = false;
  },
  data() {
        return {
            total_expenses: total_expenses,
            cities: ["San Francisco", "Oakland"],
            years: ["2015-2016","2016-2017","2017-2018","2018-2019","2019-2020","2020-2021"],
            is_mounted: false,
            budget_pie_chart_data: current_expenses,
            budget_pie_chart_config: {
                key: "name",
                value: "total",
                color: {key: "dept_color"},
                margin: {left: 100, right: 100},
                transition: {duration: 100, ease: "easeLinear"}
            },
            slider_max: total_expenses,
            slider_min: 0,
            health_value: starting_expense,
            culture_value: starting_expense,
            admin_value: starting_expense,
            city_value: starting_expense,
            welfare_value: starting_expense,
            protection_value: starting_expense,
            transport_value: starting_expense,
            revenue_limit_rule: [v => v + current_expenses.slice(0,6).reduce(function(sum, d) {return sum + d.total;}, 0) <= total_expenses]
        }
  },
  methods: {
      editPieChart(dept, dept_value, color) {
          current_expenses[current_expenses.findIndex(a => a.name == dept)].total = dept_value

          var current_sum_expenses = current_expenses.reduce(function(sum, d) {return sum + d.total;}, 0)
          if(current_sum_expenses > total_expenses){
              this.exceeds_limit = true
          } else {
              this.exceeds_limit = false
          }

          this.budget_pie_chart_data.splice(this.budget_pie_chart_data.findIndex(({name}) => name == dept),1)
          this.budget_pie_chart_data.push({name: dept, total: dept_value, dept_color: color})
      }
  }
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

@media only screen and (max-width: 768px) {
    .Slider-Title {
      font-size: 17px;
      line-height: 16px;
      text-align: center;
    }

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
