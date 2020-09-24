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
          <v-spacer />
          <v-col cols="5">
            <v-row>
              <div class="Subsection-Title">Revenue</div>
            </v-row>
            <v-row>
              <div class="Subsection-Subtitle">(in millions)</div>
            </v-row>
            <v-row class="mb-5">
              <div class="Subsection-Amount">$16,452 mil</div>
            </v-row>
            <v-row>
              <div class="Subsection-Title">Expenses</div>
            </v-row>
            <v-row>
              <div class="Subsection-Subtitle">(in millions)</div>
            </v-row>
            <v-row>
              <div class="Subsection-Body">
                There are 7 categories that make up San Francisco's budget.
                Use the levers to adjust and balance the spending for each category, then compare to the actual budget.
              </div>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-card
              class="pa2"
              outlined
              tile
            >This is a placeholder for the nifty dynamic pie chart (woo), which I'll add next week. Will be approx. this size!</v-card>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row justify="center">
          <v-spacer />
          <v-col cols="2">
            <div class="Slider-Title">
              Community Health
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Title">
              Culture & Recreation
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Title">
              General Admin & Finance
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Title">
              General City Responsibilities
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
          <v-spacer />
        </v-row>

        <v-row justify="center">
          <v-spacer />
          <v-col cols="2">
            <div class="Slider-Title">
              Human Welfare & Neighborhood Development
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Title">
              Public Protection
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Title">
              Public Works, Transportation & Commerce
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">(i)</span>
                </template>
                <span>Placeholder, will replace with actual text and icon later</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-col cols="2">
            <div class="Slider-Amount">$0 mil</div>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row justify="center">
              <v-slider
                v-model="value"
                vertical
                class="test"
                track-color="#B6DADA"
                color="#2A6465"
              />
            </v-row>
          </v-col>
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
import Vue from "vue";
import CitySelect from "@/components/CitySelect";
import FiscalYearSelect from "@/components/FiscalYearSelect";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DepartmentsWalkthrough from "@/components/DepartmentsWalkthrough";

export default Vue.extend({
  components: {
    CitySelect,
    FiscalYearSelect,
    Header,
    Footer,
    DepartmentsWalkthrough
  },
  data() {
    return {
      selected_city: "San Francisco",
      selected_year: "2020-2021",
      cities: ["San Francisco", "Oakland"],
      years: [
        "2015-2016",
        "2016-2017",
        "2017-2018",
        "2018-2019",
        "2019-2020",
        "2020-2021"
      ]
    };
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
</style>
