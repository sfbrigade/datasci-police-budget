<template>
  <v-container class="Category-Background carousel-view" fluid>
    <transition-group class="carousel" tag="div">
      <div
        v-for="(department) in departments"
        v-bind:key="department.department"
        v-bind:style="{display: department.display}"
        class="slide"
      >
        <v-row>
          <v-col class="Category-Title">{{department.header}}</v-col>
        </v-row>
        <v-row class="Category-Content">
          <v-col cols="7">
            <v-row class="text-sm-body-1">
              <span v-html="department.content"></span>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col>
            <v-row>
              <div class="Category-Slider"></div>
            </v-row>
            <v-card
              class="Category-Budget-Caption text-sm-body-1"
              elevation="0"
            >Last year’s budget: {{department.budget}}</v-card>
          </v-col>
        </v-row>
      </div>
    </transition-group>
    <div class="carousel-controls">
      <v-btn
        rounded
        depressed
        width="240px"
        outlined
        color="#2A6465"
        class="carousel-controls__button"
        @click="previous"
      >prev</v-btn>
      <v-btn
        rounded
        depressed
        width="240px"
        color="#2A6465"
        class="carousel-controls__button white--text"
        @click="next"
      >next</v-btn>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      departments: [
        {
          department: "community-health",
          header: "1. Community Health",
          content:
            "The mission of the Department of Public Health is to protect and promote the health of all San Franciscans through the following divisions:<ul><li>San Francisco Health Network, which includes the Zuckerberg San Francisco General Hospital, Laguna Honda Hospital, ambulatory care, and transitions that oversee client flow throughout the system of care.</li><li>Population Health Division, which addresses public health concerns, including consumer safety, health promotion and disease prevention, and the monitoring of threats to the public’s health.</li></ul><br>Funds:<ul><li>Expand behavioral services for vulnerable residents, many of whom are experiencing homelessness</li><li>Provide department-wide workplace equity training and education</li><li>Implement a new electronic health record that supports clinical operations and revenue collections</li><li>Promote health education, physical activity, and healthy eating in communities with high rates of sugary drink consumption, diabetes, obesity, and heart disease</li><li>Increase staff at the hospitals and budget for other medical supplies including test kits for population health and prevention</li></ul>.",
          budget: "$2,422 mil",
          display: "inherit"
        },
        {
          department: "culture-recreation",
          header: "2. Culture & Recreation",
          content:
            "San Francisco’s recreational, cultural, and educational resources drive our quality of life and underlie our shared experience as a city. Keeping these institutions in a state of good repair is a priority. Departments include:<ul><li>Academy of Sciences</li><li>Arts Commission</li><li>Asian Art Museum</li><li>Fine Arts Museum (de Young and Legion of Honor Museums)</li><li>Law Library</li><li>Public Library (Main Library at Civic Center and 27 branch libraries)</li><li>Recreation & Parks (200+ parks, playgrounds, and open spaces)</li><li>War Memorial (War Memorial Opera House, Veterans Building, Davies Symphony Hall, and adjacent grounds)</li></ul><br>Funds:<ul><li>Subsidize museum free days and the free admission program for San Francisco school groups.</li><li>Provide arts education, arts organizations, affordable space, and support for individual artists</li><li>Maintain buildings and modernize collections management</li><li>Sponsor special exhibitions that educate and stimulate curiosity among broad and diverse audiences</li><li>Increase open hours at public libraries, eliminate overdue fines, increase eCollections circulation</li><li>Maintains all public parks and provides a broad range of recreation programming in community services, cultural arts, sports and athletics, and leisure services</li></ul><br>Source: City of San Francisco Budget Book",
          budget: "$489 mil",
          display: "none"
        }
      ]
    };
  },
  methods: {
    next() {
      const first = this.departments.shift();
      this.departments = this.departments.concat(first);
      this.departments[0].display = "inherit";
      this.departments[1].display = "none";
    },
    previous() {
      const last = this.departments.pop();
      this.departments = [last].concat(this.departments);
      console.log(this.departments[0]);
      this.departments[0].display = "inherit";
      this.departments[1].display = "none";
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}

.Category-Background {
  background: #ffffff;
  width: 1280px;
}
.Category-Title {
  color: #000000;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  padding-left: 104px;
  padding-top: 80px;
}
.Category-Content {
  color: #000000;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  padding-left: 104px;
  padding-top: 44px;
}
.Category-Slider {
  background: #f2f2f2;
  border-radius: 20px;
  width: 217px;
  height: 402px;
}
.Category-Budget-Caption {
  width: 217px;
  text-align: center;
  color: #4f4f4f;
  padding: 10px;
}
.carousel {
  overflow: none;
}
.slide {
  transition: 0.2s linear;
  height: 750px;
  overflow: hidden;
}
.slide:last-of-type {
  opacity: 0;
}
.carousel-controls {
  text-align: center;
  z-index: 100;
}
</style>