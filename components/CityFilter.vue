<template>
  <div class="city-filter">
    <h3 class="city-filter__title">
      Explaining your city’s public budget information, to empower citizens like you.
    </h3>
    <p class="city-filter__subtitle">
      You pay taxes. We do too. Where does that money go?
    </p>
    <div class="city-filter__select">
      <label for="city-select">Select your city</label>
      <v-select id="city-select"
        background-color="#fff"
        value="san_francisco"
        :items="items"
        light
        outlined>
      </v-select>
    </div>
    <button class="city-filter__button">START EXPLORING</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          text: 'San Francisco',
          value: 'san_francisco',
          disabled: false,
        },
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.city-filter {
  background: $light-turquoise;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: #2a6465;
  border-radius: 40px;
}
</style>
