<template>
  <v-app>
    <v-row class="no-grow">
      <Header />
    </v-row>
    <v-container fluid class="no-padding limit-width grow">
      <v-row class="content-row body-row">
        <h2>About Us</h2>
      </v-row>
      <v-row  class="content-row body-row">
        As part of the Code for America Brigade Network, we are a welcoming and inclusive volunteer
        group of developers, designers, data geeks, and citizen activists who use creative
        technology to solve civic and social problems. By connecting people, organizations,
        resources, tools, and networks to improve the City and County of San Francisco,
        we will all thrive.

        The Data Science Working Group’s primary purpose is to efficiently assess, inspire, and
        tackle Code for San Francisco’s data science needs, as well as to help the City and other
        brigades with their data science needs whenever appropriate.
      </v-row>
      <v-row class="content-row body-row">
        <h2>Thank You</h2>
      </v-row>
      <v-row  class="content-row body-row">
        This project couldn’t have happened without the generosity of the friends and family of
        Sanat Moningi. Thank you also to our sponsors, who provided us the tools to make this
        portal possible.
      </v-row>
    </v-container>
    <v-row class="no-grow">
      <Footer></Footer>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: 'About the website',
    };
  },
});
</script>
