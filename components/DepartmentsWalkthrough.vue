<template>
  <v-container class="Category-Background carousel-view" v-if="!shouldShowOverview" fluid>
    <div class="slide">
      <v-row>
        <v-col class="Category-Title">
          {{ activeDepartment.number }}. {{ activeDepartment.header }}
        </v-col>
      </v-row>
      <v-row class="Category-Content">
        <v-col cols="7">
          <v-row class="Category-Content-Text text-sm-body-1">
            <span v-html="activeDepartment.content"></span>
          </v-row>
          <v-row justify="center">
            <v-btn
              id="btn"
              elevation="0"
              outlined
              color="#BDBDBD"
              @click="expand"
              >SEE MORE v</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col>
          <v-row>
            <div class="Category-Slider">
              <div class="Slider-Amount">
                ${{ amounts[activeDepartment.name] }} mil
              </div>
              <v-row justify="center">
                <v-slider
                  v-bind:max="totalAmount"
                  :value="amounts[activeDepartment.name]"
                  @change="
                    (value) => {
                      updateAmount(activeDepartment.name, value);
                    }
                  "
                  min="0"
                  vertical
                  track-color="#B6DADA"
                  color="#2A6465"
                />
              </v-row>
            </div>
          </v-row>
          <v-row class="Category-Budget-Caption text-sm-body-1"
            >Last year’s budget: {{ activeDepartment.budget }}</v-row
          >
        </v-col>
      </v-row>
      <v-row class="controls">
        <div class="carousel-controls">
          <v-btn
            v-for="button in buttonsShow"
            v-bind:key="button.name"
            class="carousel-controls__button"
            v-bind:class="button.class"
            v-bind:outlined="button.outlined"
            rounded
            depressed
            width="240px"
            color="#2A6465"
            @click="navigate(button.name)"
            >{{ button.name }}</v-btn
          >
        </div>
      </v-row>
    </div>
    <div class="skip">
      <v-btn text @click="showBudget" class="skip" color="#2a6465"
        >SKIP TO OVERVIEW</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    shouldShowOverview() {
      return this.$store.getters['departments/shouldShowOverview'];
    },
    totalAmount() {
      return this.$store.getters['budget/getTotalAmount'];
    },
    amounts() {
      return this.$store.getters['budget/getAmounts'];
    },
    buttonsShow() {
      return this.buttons.filter((button) => button.render);
    },
    ...mapState({
      selectedCity: 'city',
    }),
    departments() {
      return [
        {
          number: 1,
          name: 'health',
          header: 'Community Health',
          content: this.$t(`departments.health.longDescription.${this.selectedCity}`),
          budget: '$2,422 mil',
          display: 'inherit',
        },
        {
          number: 2,
          name: 'culture',
          header: 'Culture & Recreation',
          content: this.$t(`departments.culture.longDescription.${this.selectedCity}`),
          budget: '$489 mil',
          display: 'none',
        },
        {
          number: 3,
          name: 'admin',
          header: 'General Admin & Finance',
          content: this.$t(`departments.admin.longDescription.${this.selectedCity}`),
          budget: '$x mil',
          display: 'none',
        },
        {
          number: 4,
          name: 'city',
          header: 'General City Responsibilities',
          content: this.$t(`departments.city.longDescription.${this.selectedCity}`),
          budget: '$x mil',
          display: 'none',
        },
        {
          number: 5,
          name: 'welfare',
          header: 'Human Welfare & Neighborhood Development',
          content: this.$t(`departments.welfare.longDescription.${this.selectedCity}`),
          budget: '$x mil',
          display: 'none',
        },
        {
          number: 6,
          name: 'protection',
          header: 'Public Protection',
          content: this.$t(`departments.protection.longDescription.${this.selectedCity}`),
          budget: '$x mil',
          display: 'none',
        },
        {
          number: 7,
          name: 'transport',
          header: 'Public Works, Transportation, & Commerce',
          content: this.$t(`departments.transport.longDescription.${this.selectedCity}`),
          budget: '$x mil',
          display: 'none',
        },
      ];
    },
    activeDepartment() {
      return this.departments.find(
        (dep) => dep.name === this.$store.getters['departments/getActiveDepartmentName'],
      );
    },
  },
  data() {
    return {
      index: 0,
      buttons: [
        {
          name: 'prev',
          outlined: true,
          class: '',
          render: false,
        },
        {
          name: 'next',
          outlined: false,
          class: 'white--text',
          render: true,
        },
        {
          name: 'finish',
          outlined: false,
          class: 'white--text',
          render: false,
        },
      ],
    };
  },
  methods: {
    expand() {
      const Text = document.querySelector('.Category-Content-Text');
      Text.style.overflow = 'inherit';
      const Btn = document.getElementById('btn');
      Btn.remove();
    },
    navigate(button) {
      this.buttons[0].render = true;
      if (button === 'next') {
        this.$store.commit('departments/nextDepartment');
      } else if (button === 'prev') {
        this.$store.commit('departments/previousDepartment');
      } else if (button === 'finish') {
        this.showBudget();
      }
      if (this.$store.getters['departments/getActiveDepartmentName'] === 'health') {
        this.buttons[0].render = false;
      } else if (this.$store.getters['departments/getActiveDepartmentName'] === 'transport') {
        this.buttons[1].render = false;
        this.buttons[2].render = true;
      }
    },
    updateAmount(department, value) {
      this.$store.commit('budget/updateAmounts', { [department]: value });
      this.$emit('refresh-pie-chart');
    },
    showBudget() {
      this.$store.commit('departments/goToOverview');
    },
  },
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
.slide {
  background: #ffffff;
  overflow: hidden;
}
.controls {
  justify-content: center;
  text-align: center;
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
