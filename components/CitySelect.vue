<template>
  <div>
    <label for="city-select">Select your city</label>
    <v-select id="city-select"
      background-color="white"
      color="black"
      v-model="selectedCity"
      :items="cities"
      light
      outlined
      dense>
    </v-select>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    selectedCity: {
      get() { return this.$store.state.city; },
      set(value) {
        this.$store.commit('updateCity', value);
        this.$emit('update-city');
        console.log('test');
        return value;
      },
    },
  },
  data() {
    return {
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
    };
  },
};
</script>
<style scoped lang="scss">
  label {
    @include font-size(12);
  }
</style>
