<template>
  <v-app class="floating-header-container">
    <Header class="floating-header"/>
    <v-container fluid class="floating-card-container no-padding">
      <v-row class="hero-image"></v-row>
      <CityFilter class="floating-card"/>
      <v-row class="content-row">
        <Actions />
      </v-row>
      <v-row class="content-row">
        <Faq />
      </v-row>
      <v-row>
        <Footer />
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/Footer.vue";
import Faq from "@/components/Faq.vue";
import Actions from "@/components/Actions.vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  components: {
    Footer,
    Faq,
    Actions
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir;
  font-style: normal;
  color: $black-1;
  max-width: 100%;
}

h1 {
  font-size: 28px;
  font-weight: 800;
}

h2 {
  font-size: 24px;
  font-weight: 800;
}

h4 {
  font-size: 18px;
}

p {
  font-size: 16px;
  font-weight: 500;
}

.no-padding {
  padding: 0;
}

.floating-header-container, .floating-card-container{
  position: relative;
}

.floating-header {
  position: absolute;
  z-index: 1;
}

.floating-card {
  position: absolute;
  top: 300px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 630px;
}

.hero-image {
  background-image: url('/olivia-bliss-HTnycx0h_kk-unsplash.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  height: 600px;
  width: 100%;
  padding-top: 33.5%;

}

.content-row {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
