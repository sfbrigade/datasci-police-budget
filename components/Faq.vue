<template>
  <div class="Faq">
    <div class="Faq-Header">Frequently Asked Questions</div>
    <div class="Faq-Question1">
      <div class="Faq-Question">Where does all this data come from?</div>
      <div class="Faq-Expand">+</div>
    </div>
    <div class="Faq-Question2">
      <div class="Faq-Question-Multi">
        When are upcoming elections?
        Which races have an impact on police spending, or policing in general?
      </div>
      <div class="Faq-Expand">+</div>
    </div>
    <div class="Faq-Question3">
      <div class="Faq-Question">Who can I call or write to voice my opinion?</div>
      <div class="Faq-Expand">+</div>
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
  width: 1440px;
  height: 497px;
  left: 0px;
  top: 936px;
  background: #f1f8f8;
  &-Header {
    position: absolute;
    width: 553px;
    height: 33px;
    left: 443px;
    top: 64px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
  }
  &-Question1 {
    position: absolute;
    width: 819px;
    height: 84px;
    left: 311px;
    top: 137px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
  }
  &-Question2 {
    position: absolute;
    width: 819px;
    height: 84px;
    left: 311px;
    top: 220px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
  }
  &-Question3 {
    position: absolute;
    width: 819px;
    height: 84px;
    left: 311px;
    top: 303px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
  }
  &-Question {
    position: absolute;
    width: 720px;
    height: 25px;
    left: 26px;
    top: 30px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  &-Question-Multi {
    position: absolute;
    width: 720px;
    height: 25px;
    left: 26px;
    top: 16px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  &-Expand {
    position: absolute;
    width: 24px;
    height: 49px;
    left: 768px;
    top: 18px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
}

@include lessThan($small) {
  .Faq {
    padding: 22px;
  }
}
</style>
