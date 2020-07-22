<template>
  <div class="Actions">
    <div class="Actions-Header">Data doesn’t have to be confusing.</div>
    <div class="Actions-Action1">
      <div class="Actions-Icon1"></div>
      <div class="Actions-Title">Visualize It</div>
      <div class="Actions-Text">We analyzed the data so you can examine it for yourself.</div>
    </div>
    <div class="Actions-Action2">
      <div class="Actions-Icon2"></div>
      <div class="Actions-Title">Explore It</div>
      <div class="Actions-Text">What if you were in charge? How you budget your city’s revenue?</div>
    </div>
    <div class="Actions-Action3">
      <div class="Actions-Icon3"></div>
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
  width: 1440px;
  height: 442px;
  left: 0px;
  top: 494px;
  background: #ffffff;
  &-Header {
    position: absolute;
    width: 553px;
    height: 33px;
    left: 443px;
    top: 133px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
  }
  &-Action1 {
    position: absolute;
    width: 315px;
    height: 165px;
    left: 109px;
    top: 216px;
  }
  &-Action2 {
    position: absolute;
    width: 315px;
    height: 165px;
    left: 562px;
    top: 216px;
  }
  &-Action3 {
    position: absolute;
    width: 315px;
    height: 165px;
    left: 1001px;
    top: 216px;
  }
  &-Icon1 {
    position: absolute;
    width: 58px;
    height: 58px;
    left: 127px;
    top: 0px;
    background: #f5bd41;
    border-radius: 50%;
  }
  &-Icon2 {
    position: absolute;
    width: 58px;
    height: 58px;
    left: 127px;
    top: 0px;
    background: #ef896e;
    border-radius: 50%;
  }
  &-Icon3 {
    position: absolute;
    width: 58px;
    height: 58px;
    left: 127px;
    top: 0px;
    background: #2a6465;
    border-radius: 50%;
  }
  &-Title {
    position: absolute;
    width: 116px;
    height: 25px;
    left: 99px;
    top: 85px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    text-decoration-line: underline;
    color: #000000;
  }
  &-Title-Multi {
    position: absolute;
    width: 158px;
    height: 25px;
    left: 79px;
    top: 85px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    text-decoration-line: underline;
    color: #000000;
  }
  &-Text {
    position: absolute;
    width: 315px;
    height: 50px;
    left: 0px;
    top: 115px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #000000;
  }
  &-Text-Multi {
    position: absolute;
    width: 315px;
    height: 50px;
    left: 0px;
    top: 140px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #000000;
  }
}

@include lessThan($small) {
  .Faq {
    padding: 22px;
  }
}
</style>
