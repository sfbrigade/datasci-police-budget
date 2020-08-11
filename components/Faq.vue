<template>
  <div class="Faq">
    <div class="Faq-Header">Frequently Asked Questions</div>
    <div class="Faq-Question-Q1">
      <div class="Faq-Question-Text">Where does all this data come from?</div>
      <div class="Faq-Question-Expand">+</div>
    </div>
    <div class="Faq-Question-Q2">
      <div class="Faq-Question-Text-Multi">
        When are upcoming elections?
        Which races have an impact on police spending, or policing in general?
      </div>
      <div class="Faq-Question-Expand">+</div>
    </div>
    <div class="Faq-Question-Q3">
      <div class="Faq-Question-Text">Who can I call or write to voice my opinion?</div>
      <div class="Faq-Question-Expand">+</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}
.Faq {
  position: absolute;
  width: 1450px;
  height: 497px;
  left: 0px;
  top: 936px;
  background: $light-turquoise;
  color: $black-1;
  font-family: "Avenir";
  font-style: normal;
  font-weight: normal;
  &-Header {
    position: absolute;
    width: 553px;
    height: 33px;
    left: 443px;
    top: 64px;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
  }
  &-Question {
    position: absolute;
    background: $white-1;
    border: 1px solid $gray-5;
    box-sizing: border-box;
    &-Q1 {
      position: absolute;
      width: 819px;
      height: 84px;
      left: 311px;
      top: 137px;
      background: $white-1;
      border: 1px solid $gray-5;
    }
    &-Q2 {
      position: absolute;
      width: 819px;
      height: 84px;
      left: 311px;
      top: 220px;
      background: $white-1;
      border: 1px solid $gray-5;
    }
    &-Q3 {
      position: absolute;
      width: 819px;
      height: 84px;
      left: 311px;
      top: 303px;
      background: $white-1;
      border: 1px solid $gray-5;
    }
    &-Text {
      position: absolute;
      width: 720px;
      height: 25px;
      left: 26px;
      top: 30px;
      font-size: 18px;
      line-height: 25px;
      &-Multi {
        position: absolute;
        width: 720px;
        left: 26px;
        top: 16px;
        font-size: 18px;
      }
    }
    &-Expand {
      position: absolute;
      width: 24px;
      height: 49px;
      left: 768px;
      top: 18px;
      font-size: 36px;
      line-height: 49px;
    }
  }
}

@include lessThan($small) {
  .Faq {
    padding: 22px;
  }
}
</style>
