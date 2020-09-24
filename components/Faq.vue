<template>
  <div class="faq">
    <h3 class="faq-header">Frequently Asked Questions</h3>
    <v-expansion-panels accordion light class="expansion-panels">
      <v-expansion-panel class="expansion-panel">
        <v-expansion-panel-header class="expansion-panel-header">
          Where does all this data come from?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="expansion-panel-content">
          TODO
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="expansion-panel">
        <v-expansion-panel-header class="expansion-panel-header">
          When are upcoming elections?
          Which races have an impact on police spending, or policing in general?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="expansion-panel-content">
          The next election for city representatives will occur alongside the general election,
          on November 3, 2020. Updates and details can be found on the respective city's webpage
          (<a href="https://www.oaklandca.gov/topics/elections">Oakland</a> and
          <a href="https://sfelections.sfgov.org/">San Francisco</a>).
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="expansion-panel">
        <v-expansion-panel-header class="expansion-panel-header">
          Who can I call or write to voice my opinion?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="expansion-panel-content">
          <div> 
            Oakland:
            Look up your city representative on the
            <a href="https://www.oaklandca.gov/services/
              look-up-your-city-council-district-and-representative">
              City of Oakland's site</a>.
            Also check for <a href="https://www.oaklandca.gov/meetings">upcoming meetings</a>.
          </div>
          <div>
            San Francisco:
            Look up your city representative on the <a href="https://sfplanninggis.org/sffind/">San Francisco Planning Department's map</a>. Also check for
            <a href="https://sfgov.org/countyclerk/public-notices-meetings">
              upcoming meetings</a>.
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style lang="scss" scoped>
.faq {
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq-header {
  margin: 40px auto;
}
</style>
