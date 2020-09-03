<template>
  <v-app>
    <v-row class="no-grow">
      <Header />
    </v-row>
    <v-container fluid class="no-padding grow">
      <v-row class="content-row body-row">
        <h2>Take Action</h2>
      </v-row>
      <v-row class="content-row body-row">
        See something you don't like? Use your voice to create change!
      </v-row>
      <v-row class="content-row body-row">
        <ContactUs />
      </v-row>
    </v-container>
    <v-row class="no-grow">
      <Footer />
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default Vue.extend({
  components: {
    ContactUs,
    Footer,
    Header,
  },
});
</script>
<style lang="scss">
</style>
