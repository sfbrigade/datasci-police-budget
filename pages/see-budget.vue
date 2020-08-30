<template>
  <v-app>
    <v-row>
      <Header />
    </v-row>
    <v-container fluid class="no-padding">
      <v-row class="content-row body-row explore-budget">
        <h2 class="section-title">Explore Budget</h2>
        <v-container fluid>
          <v-row class="content-row body-row">
            <v-col>
              <label for="city-select">
                Select your city
              </label>
              <v-select id="city-select"
                value="san_francisco"
                :items="cities"
                v-model="selected_city"
                background-color=white outlined dense light>
              </v-select>
            </v-col>
            <v-col>
              <label for="fiscal-year-select">
                Fiscal Year
              </label>
              <v-select id="fiscal-year-select"
                value="2020"
                :items="years"
                v-model="selected_start_year"
                background-color=white outlined dense light>
              </v-select>
            </v-col>
          </v-row>
          <v-row class="content-row body-row">
            <h3 class="center">
              In 2019, SF spent $XXX million dollars on their police department.
              This represents XX% of the general fund spending for SF.
            </h3>
          </v-row>
        </v-container>
      </v-row>
      <v-row class="content-row body-row">
        <h2 class="section-title">How is that money being spent?</h2>
      </v-row>
      <v-row class="content-row body-row">
        <h2 class="section-title">Spending by Department</h2>
      </v-row>
      <v-row class="content-row body-row">
        <h2 class="section-title">Compare with Similar Cities</h2>
      </v-row>
      <v-row class="content-row body-row white">
        <h2 class="section-title">Glossary</h2>
      </v-row>
    </v-container>
    <v-row>
      <Footer />
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      selected_city: 'san_francisco',
      selected_start_year: '2020',
      cities: [
        {
          text: 'San Francisco',
          value: 'san_francisco',
          disabled: false,
        },
        {
          text: 'Oakland',
          value: 'oakland',
          disabled: false,
        },
      ],
      years: [
        {
          text: '2019-2020',
          value: '2019',
          disabled: false,
        },
        {
          text: '2020-2021',
          value: '2020',
          disabled: false,
        },
      ],
    };
  },
});
</script>
<style scoped lang="scss">
.body-row {
  padding: 24px 0;
}

.section-title {
  color: $dark-turquoise;
}

.explore-budget {
  width: 60%;
}
</style>
