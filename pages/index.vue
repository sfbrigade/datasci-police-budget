<template>
  <v-app style="background: #afeeee">
    <v-container fluid class="HomePage-Container">
      <div class="Background-Wrapper"></div>
      <Header />
      <Actions />
      <Faq />
      <Footer />
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
  data() {
    return {
      width: 1024,
      height: 768
    };
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
});
</script>
<style lang="scss">
#app {
  max-width: 1440px;
  margin: 0 auto;
}
.v-application--wrap {
  justify-content: space-between;
}
.HomePage-Container {
  margin: 0 auto;
  padding: 0 !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .Background-Wrapper {
    background: url("/olivia-bliss-HTnycx0h_kk-unsplash.jpg") center no-repeat;
    height: 100%;
  }
}
@media screen and (max-width: 930px) {
  .Background-Wrapper {
    background: url("/gg_955.png") center no-repeat !important;
  }
}

@media screen and (max-width: 600px) {
  .Background-Wrapper {
    background: url("/gg_680.png") left bottom no-repeat !important;
  }
}

@media screen and (max-width: 445px) {
  .HomePage-Container {
    .Background-Wrapper {
      background: url("/gg_530.png") left bottom no-repeat !important;
    }
    .logo {
      margin: 20px 20px 40px 20px;
      .headericond {
        width: 40px;
        height: 40px;
      }
      .logo-title-container {
        padding: 0 10px;
        .logotitle {
          @include font-size(16);
          margin-bottom: 0;
        }
        .logosubtitle {
          @include font-size(10);
        }
      }
    }
  }
}
</style>
