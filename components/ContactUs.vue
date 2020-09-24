<template>
  <v-expansion-panels accordion light class="Contact-Us-Panels">
    <v-expansion-panel class="Contact-Us-Panel"> 
      <v-expansion-panel-header class="Contact-Us-Header">
        Who is my local representative at the lowest level (i.e. district supervisor)?
        How do I contact them?
      </v-expansion-panel-header>
      <v-expansion-panel-content class="Contact-Us-Content">
        <div>
          Oakland:
          To find out who your city representative is and how to contact them, visit
          <a href="https://www.oaklandca.gov/services/
            look-up-your-city-council-district-and-representative">
            the City of Oakland's webpage</a>.
        </div>
        <div>
          San Francisco:
          To find out who your city representative is and how to contact them, visit
          <a href="https://sfplanninggis.org/sffind/">the City of San Francisco's webpage</a>.
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel class="Contact-Us-Panel"> 
        <v-expansion-panel-header class="Contact-Us-Header">
          When and where can I attend public meetings to voice my opinion?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="Contact-Us-Content">
          <div>
            Oakland: Upcoming meetings can be found on
            <a href="https://www.oaklandca.gov/meetings">the City of Oakland's webpage</a>.
          </div>
          <div>
            San Francisco: Upcoming meetings can be found on
            <a href="https://sfgov.org/countyclerk/public-notices-meetings">
              the City of San Francisco's webpage</a>.
          </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel class="Contact-Us-Panel"> 
        <v-expansion-panel-header class="Contact-Us-Header">
          When are upcoming elections?
          Which races have an impact on police spending, or policing in general?
        </v-expansion-panel-header>
        <v-expansion-panel-content class="Contact-Us-Content">
          The next election for city representatives will occur alongside the general election,
          on November 3, 2020. Updates and details can be found on the respective city's webpage
          (<a href="https://www.oaklandca.gov/topics/elections">Oakland</a> and
          <a href="https://sfelections.sfgov.org/">San Francisco</a>).
        </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel class="Contact-Us-Panel">
      <v-expansion-panel-header class="Contact-Us-Header">
        What other organizations are working on policing issues in my city?
      </v-expansion-panel-header>
      <v-expansion-panel-content class="Contact-Us-Content">
          <div>
            Oakland:
            <ul>
              <li>
                <a href="https://www.antipoliceterrorproject.org/">Anti-Police Terror Project</a>
              </li>
              <li>
                <a href="https://www.defundopd.org/">Defund OPD</a>
              </li>
              <li>
                <a href="http://www.blackorganizingproject.org/">Black Organizing Project</a>
              </li>
              <li>
                <a href="https://www.coalitionforpoliceaccountability.com/">
                  Coalition for Police Accountability
                </a>
              </li>
            </ul>
          </div>
          <div>
            San Francisco:
            <ul>
              <li>
                <a href="https://colemanadvocates.org/">Coleman Advocates</a> on policing in schools
              </li>
            </ul>
          </div>
          <div>
            California:
            <ul>
              <li>
                <a href="https://ellabakercenter.org/">Ella Baker for Human Rights</a>
              </li>
            </ul>
          </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<style style="scss">
.Contact-Us-Panels {
    width: 820px;
}
.Contact-Us-Panel::before {
  box-shadow: none;
}
.Contact-Us-Header {
  font-size: 18px;
  line-height: 25px;
  font-weight: 800;
  color: #2A6465;
}
.Contact-Us-Content {
  font-size: 18px;
  line-height: 25px;
  font-weight: normal;
  color: #4F4F4F;
}
.Contact-Us-Content div {
  margin-bottom: 8px;
}
</style> 
