<template>
  <div class="city-filter">
    <h3 class="city-filter__title">
      Explaining your city’s public budget information, to empower citizens like
      you.
    </h3>
    <p class="city-filter__subtitle">
      You pay taxes. We do too. Where does that money go?
    </p>
    <CitySelect class="city-filter__select" />
    <v-btn
      class="city-filter__button"
      to="/balance-budget"
      color="#2a6465"
      nuxt
    >
      START EXPLORING
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CitySelect from "@/components/CitySelect";

export default Vue.extend({
  components: {
    CitySelect,
  },
});
</script>

<style lang="scss" scoped>
.city-filter {
  background: $light-turquoise;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
}

.city-filter__title {
  margin-bottom: 24px;
  text-align: center;
}

.city-filter__subtitle {
  margin-bottom: 32px;
  text-align: center;
}

.city-filter__select {
  margin-bottom: 8px;
  width: 253px;
}

.city-filter__button {
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

@media only screen and (max-width: 660px) {
  .city-filter__subtitle {
    margin-bottom: 32px;
    font-size: 14px;
    text-align: center;
  }

  .city-filter__button {
    font-size: 16px;
  }
}
</style>
