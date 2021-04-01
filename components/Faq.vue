<template>
  <div class="faq">
    <h3 class="faq-header">Frequently Asked Questions</h3>
    <v-expansion-panels accordion light class="expansion-panels">
      <v-expansion-panel class="expansion-panel">
        <v-expansion-panel-header class="expansion-panel-header">
          Where does all this data come from?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="expansion-panel-content">
          Our data is sourced from a few different sources, including reports and data
          the city publishes itself and a few external requests.
          <br /> <br />
          Detailed sources for SF: city spending by budget (1999-2017),
          <a href="https://bit.ly/3s661gv">use of force (2015-2019)</a>, and
          <a href="https://datasf.org/blog/new-police-department-incident-report-data-now-live/">
          incident data.</a>
          <br /> <br />
          Detailed sources for Oakland: city spending by budget (2013-2020),
          <a href="https://www.oaklandca.gov/resources/opd-personnel-hiring-attrition-and-demographic-data-reports">
          police hiring (2010-2019)</a>,
          <a href="https://www.census.gov/quickfacts/fact/table/oaklandcitycalifornia/PST045219">
          demographic breakdown (2019)</a>, and
          <a href="https://www.oaklandca.gov/resources/use-of-force">
          use of force data (2012-2017).</a>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel class="expansion-panel">
        <v-expansion-panel-header class="expansion-panel-header">
          When are upcoming elections?
          Which races have an impact on police spending, or policing in general?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="expansion-panel-content">
          The next statewide election, the CA-wide direct primary, will occur on June 7, 2022,
          followed by the general election on November 8, 2022.
          <br /> <br />
          Updates and details can be found on the respective city's webpage
          (<a href="https://www.oaklandca.gov/topics/elections">Oakland</a> and
          <a href="https://sfelections.sfgov.org/future-elections">San Francisco</a>).
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
