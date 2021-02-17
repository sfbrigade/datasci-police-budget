<template>
  <div class="Actions">
    <h3 class="Actions-Header">Data doesn’t have to be confusing.</h3>
    <v-container>
      <v-row>
        <v-col cols=3>
          <div class="action-item">
            <NuxtLink to="/see-budget">
              <div class="icon icon-1"></div>
              <div class="Actions-Title">Visualize It</div>
            </NuxtLink>
            <div class="Actions-Text">We analyzed the data so you can examine it for yourself.</div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols=3>
          <div class="action-item">
            <NuxtLink to="/balance-budget">
              <div class="icon icon-2"></div>
              <div class="Actions-Title">Explore It</div>
            </NuxtLink>
            <div class="Actions-Text">
              What if you were in charge? How you budget your city’s revenue?
            </div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols=3>
          <div class="action-item">
            <NuxtLink to="/take-action">
              <div class="icon icon-3"></div>
              <div class="Actions-Title">Do Something About It</div>
            </NuxtLink>
            <div class="Actions-Text">Not pleased? Take action.</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.Actions {
  background: $white-1;
  width: 100%;
  text-align: center;

  &-Header {
    margin: 128px auto 48px;
  }

  .action-item {
    margin: 0 auto 56px;
    display: flex;
    flex-direction: column;
  }
  &-Container {
    line-height: 25px;
    &-A1 {

    }
    &-A2 {
    }
    &-A3 {
    }
  }

  .icon {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    margin: 0 auto 24px;
  }

  .icon-1 {
    background: $orange-yellow;
  }

  .icon-2 {
    background: $salmon;
  }

  .icon-3 {
    background: $dark-turquoise;
  }

  &-Title {
    font-size: 18px;
    color: initial;
    text-decoration-line: underline;
  }
  &-Text {
    font-weight: normal;
    font-size: 18px;
  }
}

@include lessThan($small) {
  .Faq {
    padding: 22px;
  }
}
</style>
