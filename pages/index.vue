<template>
  <v-app class="floating-header-container">
    <Header class="floating-header" />
    
    <v-container fluid class="floating-card-container no-padding">

      <v-row class="hero-image"></v-row>
      
      <CityFilter class="floating-card" />

      <v-row class="content-row">
        <Actions />
      </v-row>
      <v-row class="content-row">
        <Faq />
      </v-row>
      <v-row class="no-grow">
        <Footer />
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Actions from "@/components/Actions";
import Header from "@/components/Header";

export default Vue.extend({
  components: {
    Actions,
    Footer,
    Faq,
    Header
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir;
  font-style: normal;
  background: $light-turquoise;
  color: $black-1;
  max-width: 100%;
}

h1 {
  @include h1();
}

h2 {
  @include h2();
}

h3 {
  @include h3();
}

h4 {
  @include h4();
}

p {
  @include p();
}

.no-padding {
  padding: 0;
}

.grow {
  flex-grow: 1;
}

.no-grow {
  flex-grow: 0;
}

.limit-width {
  max-width: 900px;
}

.floating-header-container,
.floating-card-container {
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
  background-image: url("/san-francisco-skyline.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  height: 600px;
  width: 100vw;
  padding-top: 33.5%;
}

.body-row {
  padding: 24px 0;
}

.content-row {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 660px) {
   .floating-card {
   position: absolute;
   top: 300px;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   width: 450px;   
 }
}


</style>
