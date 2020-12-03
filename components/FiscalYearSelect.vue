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
      get() { return this.$store.getters.getFiscalYear; },
      set(value) {
        this.$store.commit('updateFiscalYear', value);
        this.$emit('update-fiscal-year');
        return value;
      },
    },
  },
  data() {
    return {
      years: Array.from(Array(22), (_, i) => {
        const year = i + 1999;
        return {
          text: `${year}-${year + 1}`,
          value: `${year}`,
          disabled: false,
        };
      }).reverse(),
    };
  },
};
</script>
<style scoped lang="scss">
  label {
    @include font-size(12);
  }
</style>
