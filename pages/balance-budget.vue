<template>
  <v-app style="background: #f1f8f8">
    <Header />
    <v-container>
      <v-row class="content-row">
        <BalanceBudgetHeader />
      </v-row>
      <v-row class="content-row">
        <DepartmentsWalkthrough />
      </v-row>
      <v-row class="content-row">
        <div class="skip">Skip to overview</div>
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
import Header from "@/components/Header.vue";
import BalanceBudgetHeader from "@/components/BalanceBudgetHeader.vue";
import DepartmentsWalkthrough from "@/components/DepartmentsWalkthrough.vue";

export default Vue.extend({
  components: {
    Footer,
    Header,
    BalanceBudgetHeader,
    DepartmentsWalkthrough
  }
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

.content-row {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.skip {
  height: 150px;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 150px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2a6465;
}
</style>
