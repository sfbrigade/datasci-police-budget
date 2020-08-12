<template>
  <div class="Footer">
    <div class="Footer-About">
      Bay Area City Budget Tracker is an open-source by Code for San Francisco
      to help citizens better understand the City of San Francisco’s spending
      and budget process.
    </div>
    <div class="Footer-Data">Data sources:</div>
    <div class="Footer-Copyright">
      <span>&copy; 2020 Code for San Francisco</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return [
        {
          class: "fab fa-meetup",
          name: "Meetup",
          link:
            "https://www.meetup.com/Code-for-San-Francisco-Civic-Hack-Night/"
        },
        {
          class: "fab fa-slack",
          name: "Slack",
          link: "https://sfbrigade-slackin.herokuapp.com/"
        },
        {
          class: "fab fa-github",
          name: "Github",
          link: "https://github.com/sfbrigade/stop-covid19-sfbayarea"
        },
        {
          class: "fab fa-twitter",
          name: "Twitter",
          link: "https://twitter.com/sfbrigade"
        },
        {
          class: "fab fa-facebook",
          name: "Facebook",
          link: "https://www.facebook.com/codeforsanfrancisco"
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}
.Footer {
  position: absolute;
  width: 1450px;
  height: 120px;
  left: 0px;
  top: 1433px;
  background: $dark-turquoise;
  font-family: "Avenir";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: $white-1;
  &-About {
    position: absolute;
    width: 584px;
    height: 38px;
    left: 39px;
    top: 20px;
  }
  &-Data {
    position: absolute;
    width: 584px;
    height: 19px;
    left: 39px;
    top: 78px;
  }
  &-Copyright {
    position: absolute;
    width: 201px;
    height: 19px;
    left: 1153px;
    top: 39px;
    text-align: right;
  }
}

@include lessThan($small) {
  .Footer {
    padding: 22px;
    &-Copyright {
      @include font-size(12);
    }
  }
}
</style>
