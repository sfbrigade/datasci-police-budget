<template>
  <div class="CityFilter">
    <div
      class="CityFilter-Header"
    >Explaining your city’s public budget information, to empower citizens like you.</div>
    <div class="CityFilter-Text">You pay taxes. We do too. Where does that money go?</div>
    <div class="CityFilter-SelectHeader">Select your city</div>
    <select class="CityFilter-Select">
      <option value="san_francisco">San Francisco</option>
    </select>
    <button class="CityFilter-Button">START EXPLORING</button>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}
.CityFilter {
  position: absolute;
  width: 632px;
  height: 345px;
  left: 404px;
  top: 231px;
  background: #f1f8f8;
  z-index: 100;
  &-Header {
    position: absolute;
    width: 553px;
    height: 66px;
    left: 39px;
    top: 34px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
  }
  &-Text {
    position: absolute;
    width: 509px;
    height: 25px;
    left: 61px;
    top: 121px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #000000;
  }
  &-SelectHeader {
    position: absolute;
    width: 84px;
    height: 16px;
    left: 189px;
    top: 175px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
  }
  &-Select {
    position: absolute;
    width: 253px;
    height: 40px;
    left: 189px;
    top: 193px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 2px;
    text-indent: 13px;
  }
  &-Button {
    position: absolute;
    width: 227px;
    height: 40px;
    left: 202px;
    top: 265px;
    background: #2a6465;
    border-radius: 40px;
  }
}
</style>
