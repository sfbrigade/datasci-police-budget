<template>
  <div class="Actions">
    <div class="Actions-Header">Data doesn’t have to be confusing.</div>
    <div class="Actions-Container-A1">
      <div class="Actions-Icons-I1"></div>
      <div class="Actions-Title">Visualize It</div>
      <div class="Actions-Text">We analyzed the data so you can examine it for yourself.</div>
    </div>
    <div class="Actions-Container-A2">
      <div class="Actions-Icons-I2"></div>
      <div class="Actions-Title">Explore It</div>
      <div class="Actions-Text">What if you were in charge? How you budget your city’s revenue?</div>
    </div>
    <div class="Actions-Container-A3">
      <div class="Actions-Icons-I3"></div>
      <div class="Actions-Title-Multi">Do Something About It</div>
      <div class="Actions-Text-Multi">Not pleased? Take action.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}
.Actions {
  position: absolute;
  width: 1450px;
  height: 442px;
  left: 0px;
  top: 494px;
  background: $white-1;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;

  &-Header {
    position: absolute;
    width: 553px;
    height: 33px;
    left: 443px;
    top: 133px;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: $black-1;
  }
  &-Container {
    position: absolute;
    line-height: 25px;
    &-A1 {
      position: absolute;
      width: 315px;
      height: 165px;
      left: 109px;
      top: 216px;
      text-align: center;
      color: $black-1;
    }
    &-A2 {
      position: absolute;
      width: 315px;
      height: 165px;
      left: 562px;
      top: 216px;
      text-align: center;
      color: $black-1;
    }
    &-A3 {
      position: absolute;
      width: 315px;
      height: 165px;
      left: 1001px;
      top: 216px;
      text-align: center;
      color: $black-1;
    }
  }
  &-Icons {
    position: absolute;
    width: 58px;
    height: 58px;
    left: 127px;
    top: 0px;
    border-radius: 50%;
    &-I1 {
      position: absolute;
      width: 58px;
      height: 58px;
      left: 127px;
      background: $orange-yellow;
      border-radius: 50%;
    }
    &-I2 {
      position: absolute;
      width: 58px;
      height: 58px;
      left: 127px;
      background: $salmon;
      border-radius: 50%;
    }
    &-I3 {
      position: absolute;
      width: 58px;
      height: 58px;
      left: 127px;
      background: $dark-turquoise;
      border-radius: 50%;
    }
  }
  &-Title {
    position: absolute;
    width: 116px;
    height: 25px;
    left: 99px;
    top: 85px;
    font-size: 18px;
    text-decoration-line: underline;
    text-align: center;
    color: $black-1;
    &-Multi {
      position: absolute;
      width: 158px;
      left: 79px;
      top: 85px;
      font-size: 18px;
      text-align: center;
      text-decoration-line: underline;
      color: $black-1;
    }
  }
  &-Text {
    position: absolute;
    width: 315px;
    height: 50px;
    left: 0px;
    top: 115px;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    color: $black-1;
    &-Multi {
      position: absolute;
      width: 315px;
      left: 0px;
      top: 140px;
      font-size: 18px;
      text-align: center;
      color: $black-1;
    }
  }
}

@include lessThan($small) {
  .Faq {
    padding: 22px;
  }
}
</style>
