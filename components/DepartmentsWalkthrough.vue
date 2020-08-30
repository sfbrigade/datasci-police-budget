<template>
  <v-container class="Category-Background carousel-view" fluid>
    <transition-group class="carousel" tag="div">
      <div
        v-for="(department, i) in departments"
        v-bind:key="department.department"
        v-bind:style="{display: department.display}"
        class="slide"
      >
        <v-row>
          <v-col class="Category-Title">{{i+1}}. {{department.header}}</v-col>
        </v-row>
        <v-row class="Category-Content">
          <v-col cols="7">
            <v-row class="Category-Content-Text text-sm-body-1">
              <span v-html="department.content"></span>
            </v-row>
            <v-row justify="center">
              <v-btn id="btn" elevation="0" outlined color="#BDBDBD" @click="expand">SEE MORE v</v-btn>
            </v-row>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col>
            <v-row>
              <div class="Category-Slider">
                <div class="Slider-Amount">${{department.storedValue}} mil</div>
                <v-row justify="center">
                  <v-slider
                    v-bind:max="department.sliderMax"
                    v-model="department.storedValue"
                    min="0"
                    vertical
                    track-color="#B6DADA"
                    color="#2A6465"
                    @mousedown="tradeBtns"
                  />
                </v-row>
              </div>
            </v-row>
            <v-row
              class="Category-Budget-Caption text-sm-body-1"
            >Last year’s budget: {{department.budget}}</v-row>
          </v-col>
        </v-row>
      </div>
    </transition-group>
    <div class="carousel-controls">
      <v-btn
        v-for="(button) in buttonsShow"
        v-bind:key="button.name"
        class="carousel-controls__button"
        v-bind:class="button.class"
        v-bind:disabled="button.disabled"
        v-bind:outlined="button.outlined"
        rounded
        depressed
        width="240px"
        color="#2A6465"
        @click="navigate(button.text)"
      >{{button.text}}</v-btn>
    </div>
    <div class="skip">SKIP TO OVERVIEW</div>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      index: 0,
      departments: [
        {
          department: "community-health",
          header: "Community Health",
          content:
            "The mission of the Department of Public Health is to protect and promote the health of all San Franciscans through the following divisions:<ul><li>San Francisco Health Network, which includes the Zuckerberg San Francisco General Hospital, Laguna Honda Hospital, ambulatory care, and transitions that oversee client flow throughout the system of care.</li><li>Population Health Division, which addresses public health concerns, including consumer safety, health promotion and disease prevention, and the monitoring of threats to the public’s health.</li></ul><br>Funds:<ul><li>Expand behavioral services for vulnerable residents, many of whom are experiencing homelessness</li><li>Provide department-wide workplace equity training and education</li><li>Implement a new electronic health record that supports clinical operations and revenue collections</li><li>Promote health education, physical activity, and healthy eating in communities with high rates of sugary drink consumption, diabetes, obesity, and heart disease</li><li>Increase staff at the hospitals and budget for other medical supplies including test kits for population health and prevention</li></ul>.",
          budget: "$2,422 mil",
          display: "inherit",
          sliderMax: 16452,
          storedValue: 0
        },
        {
          department: "culture-recreation",
          header: "Culture & Recreation",
          content:
            "San Francisco’s recreational, cultural, and educational resources drive our quality of life and underlie our shared experience as a city. Keeping these institutions in a state of good repair is a priority. Departments include:<ul><li>Academy of Sciences</li><li>Arts Commission</li><li>Asian Art Museum</li><li>Fine Arts Museum (de Young and Legion of Honor Museums)</li><li>Law Library</li><li>Public Library (Main Library at Civic Center and 27 branch libraries)</li><li>Recreation & Parks (200+ parks, playgrounds, and open spaces)</li><li>War Memorial (War Memorial Opera House, Veterans Building, Davies Symphony Hall, and adjacent grounds)</li></ul><br>Funds:<ul><li>Subsidize museum free days and the free admission program for San Francisco school groups.</li><li>Provide arts education, arts organizations, affordable space, and support for individual artists</li><li>Maintain buildings and modernize collections management</li><li>Sponsor special exhibitions that educate and stimulate curiosity among broad and diverse audiences</li><li>Increase open hours at public libraries, eliminate overdue fines, increase eCollections circulation</li><li>Maintains all public parks and provides a broad range of recreation programming in community services, cultural arts, sports and athletics, and leisure services</li></ul><br>Source: City of San Francisco Budget Book",
          budget: "$489 mil",
          display: "none",
          sliderMax: 16452,
          storedValue: 0
        },
        {
          department: "general-admin-finance",
          header: "General Admin & Finanace",
          content:
            "A departmental designation for expenditures and revenues that are citywide in nature. Examples are voter mandated General Fund support for transit, libraries, and other baselines, the General Fund portion of retiree health premiums, nonprofit cost of doing business increases, required reserve deposits and debt service. Departments include:<ul><li>Assessor/Recorder</li><li>Board of Supervisors</li><li>City Attorney</li><li>City Planning</li><li>Civil Service Commission</li><li>Controller</li><li>Elections</li><li>Ethics Commission</li><li>General Services Agency - City Administrator (aka Administrative Services)</li><li>General Services Agency - Technology</li><li>Health Service System</li><li>Human Resources</li><li>Mayor</li><li>Medical Examiner (Program under General Services Agency - City Admin)</li><li>Real Estate (Program under General Services Agency - City Admin)</li><li>Retirement System</li><li>Treasurer/Tax Collector</li></ul><br>Funds:<ul><li>Subsidize museum free days and the free admission program for San Francisco school groups.</li><li>Provide arts education, arts organizations, affordable space, and support for individual artists</li><li>Maintain buildings and modernize collections management</li><li>Sponsor special exhibitions that educate and stimulate curiosity among broad and diverse audiences</li><li>Increase open hours at public libraries, eliminate overdue fines, increase eCollections circulation</li><li>Maintains all public parks and provides a broad range of recreation programming in community services, cultural arts, sports and athletics, and leisure services</li></ul><br>Funds:<ul><li>Modernize the city’s property assessment and tax systems</li><li>Pay salaries</li><li>Prepares for future elections and increased voter turnout by increasing temporary staffing and administering the vote-by-mail program</li></ul>",
          budget: "$x mil",
          display: "none",
          sliderMax: 16452,
          storedValue: 0
        },
        {
          department: "general-city-responsibilities",
          header: "General City Responsibilities",
          content: "",
          budget: "$x mil",
          display: "none",
          sliderMax: 16452,
          storedValue: 0
        },
        {
          department: "human-welfare-neighborhood-development",
          header: "Human Welfare & Neighborhood Development",
          content: "",
          budget: "$x mil",
          display: "none",
          sliderMax: 16452,
          storedValue: 0
        },
        {
          department: "public-protection",
          header: "Public Protection",
          content: "",
          budget: "$x mil",
          display: "none",
          sliderMax: 16452,
          storedValue: 0
        },
        {
          department: "public-works-transportation-commerce",
          header: "Public Works, Transportation, & Commerce",
          content: "",
          budget: "$x mil",
          display: "none",
          sliderMax: 16452,
          storedValue: 0
        }
      ],
      buttons: [
        {
          name: "prev",
          text: "prev",
          disabled: false,
          outlined: true,
          method: "previous",
          class: "",
          render: false
        },
        {
          name: "next",
          text: "next",
          disabled: false,
          outlined: false,
          method: "next",
          class: "white--text",
          render: false
        },
        {
          name: "next-disabled",
          text: "next",
          disabled: true,
          outlined: false,
          method: "next",
          class: "",
          render: true
        }
      ]
    };
  },
  computed: {
    buttonsShow: function() {
      return this.buttons.filter(function(button) {
        return button.render;
      });
    }
  },
  methods: {
    expand() {
      const Text = document.querySelector(".Category-Content-Text");
      Text.style.overflow = "inherit";
      var Btn = document.getElementById("btn");
      Btn.remove();
    },
    tradeBtns() {
      this.buttons[1].render = true;
      this.buttons[2].render = false;
    },
    navigate(button) {
      this.buttons[0].render = true;
      if (button == "next") {
        this.departments[this.index].display = "none";
        this.index += 1;
        this.departments[this.index].display = "inherit";
        this.departments[this.index].sliderMax =
          this.departments[this.index - 1].sliderMax -
          this.departments[this.index - 1].storedValue;
      } else {
        this.departments[this.index].display = "none";
        this.index -= 1;
        this.departments[this.index].display = "inherit";
        if (this.index == 0) {
          this.buttons[0].render = false;
        } else if (this.index == 6) {
          this.buttons[1].render = false;
        }
      }
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
  background: #f1f8f8;
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
.Category-Content-Text {
  overflow: hidden;
  height: 398px;
}
.Category-Slider {
  background: #f2f2f2;
  border-radius: 20px;
  width: 217px;
  height: 402px;
}
.Slider-Amount {
  padding-top: 41px;
  padding-bottom: 30px;
}
.Slider-Container {
  height: 400px;
}
.Category-Budget-Caption {
  width: 217px;
  text-align: center;
  color: #4f4f4f;
  padding: 10px;
}
.carousel {
  overflow: none;
  background: #ffffff;
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
  background: #ffffff;
  text-align: center;
  z-index: 100;
  padding-bottom: 100px;
}
.skip {
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #2a6465;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding-bottom: 129px;
  padding-top: 89px;
}
</style>