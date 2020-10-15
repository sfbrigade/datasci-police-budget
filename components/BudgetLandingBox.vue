<template>
  <div class="budget-landing">
    <img src="@/assets/images/Building.png" />
    <h3 class="budget-landing__title">Build the budget</h3>
    <p class="budget-landing__subtitle">
      How would you balance your city’s budget for the fiscal year?<br />
      Learn how your city appropriate funds in this interactive tool.
    </p>
    <CitySelect class="budget-landing__select" />
    <v-btn
      class="budget-landing__button"
      color="#2a6465"
      @click="showWalkthrough"
      nuxt
    >
      START BUDGETING
    </v-btn>
    <v-btn class="budget-skip" text @click="showBudget">SKIP TO OVERVIEW</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CitySelect from "@/components/CitySelect";
export default Vue.extend({
  components: {
    CitySelect,
  },
  methods: {
    showWalkthrough() {
      //change budget-landing to display: none
      const budgetBox = document.querySelector(".budget-landing");
      budgetBox.style.display = "none";
      //change floating-card-container to display: none
      const budgetShowDivs = document.querySelectorAll(".hide-for-walkthrough");
      budgetShowDivs.forEach(function (budgetShow) {
        budgetShow.style.display = "none";
      });
      //change Category-Background to display: block
      const walkthrough = document.querySelector(".Category-Background");
      walkthrough.style.display = "block";
      //change header-wrapper and floating-card-container background color to #f1f8f8 and opacity to 1
      const header = document.getElementById("header-wrapper");
      header.style.background = "#f1f8f8";
      header.style.opacity = 1;
      const page = document.querySelector(".floating-card-container");
      page.style.background = "#f1f8f8";
      page.style.opacity = 1;
    },
    showBudget() {
      //change budget-landing to display: none
      const budgetBox = document.querySelector(".budget-landing");
      budgetBox.style.display = "none";
      //change floating-card-container to display: flex
      const budgetShowDivs = document.querySelectorAll(".hide-for-walkthrough");
      budgetShowDivs.forEach(function (budgetShow) {
        budgetShow.style.display = "flex";
      });
      //change header-wrapper and floating-card-container background color to #f1f8f8 and opacity to 1
      const header = document.getElementById("header-wrapper");
      header.style.background = "#f1f8f8";
      header.style.opacity = 1;
      const page = document.querySelector(".floating-card-container");
      page.style.background = "#f1f8f8";
      page.style.opacity = 1;
      //change footer background color to #2a6465 and opacity to 1
      const footer = document.querySelector(".footer");
      footer.style.background = "#2a6465";
      footer.style.opacity = 1;
      //change Category-Background to display: none
      const walkthrough = document.querySelector(".Category-Background");
      walkthrough.style.display = "none";
    },
  },
});
</script>

<style lang="scss" scoped>
.budget-landing {
  background: $white-1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
}
.budget-landing__title {
  margin-bottom: 24px;
  text-align: center;
}
.budget-landing__subtitle {
  margin-bottom: 32px;
  text-align: center;
}
.budget-landing__select {
  margin-bottom: 8px;
  width: 253px;
}
.budget-landing__button {
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
.budget-skip {
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2a6465;
  padding-top: 20px;
}
@media only screen and (max-width: 660px) {
  .budget-landing__subtitle {
    margin-bottom: 32px;
    font-size: 14px;
    text-align: center;
  }
  .budget-landing__button {
    font-size: 16px;
  }
}
</style>