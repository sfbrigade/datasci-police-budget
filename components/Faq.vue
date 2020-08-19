<template>
  <div class="Faq">
    <div class="Faq-Header">Frequently Asked Questions</div>
    <div class="questions">
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
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}
.Faq {
  width: 100%;
  padding: 48px;
  background: $light-turquoise;
  &-Header {
    @include h2();
    text-align: center;
    margin-bottom: 40px;
  }
  .questions {
    margin: 0 auto;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &-Question {
    background: $white-1;
    border: 1px solid $gray-5;
    box-sizing: border-box;
    &-Q1 {
      background: $white-1;
      border: 1px solid $gray-5;
    }
    &-Q2 {
      background: $white-1;
      border: 1px solid $gray-5;
    }
    &-Q3 {
      background: $white-1;
      border: 1px solid $gray-5;
    }
    &-Text {
      &-Multi {
      }
    }
    &-Expand {
    }
  }
}

@include lessThan($small) {
  .Faq {
    padding: 22px;
  }
}
</style>
