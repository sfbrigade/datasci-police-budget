<template>
  <div>
    <label for="fiscal-year-select">Fiscal Year</label>
    <v-select id="fiscal-year-select"
      background-color="white"
      color="black"
      v-model="selectedFiscalYear"
      :items="years"
      light
      outlined
      dense>
    </v-select>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    selectedFiscalYear: {
      get() { return this.$store.state.year; },
      set(value) { this.$store.commit('updateFiscalYear', value); },
    }    
  },
  data() {
    return {
      years: [
        {
          text: '2020-2021',
          value: '2020',
          disabled: false,
        },
        {
          text: '2019-2020',
          value: '2019',
          disabled: false,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
  label {
    @include font-size(12);
  }
</style>  