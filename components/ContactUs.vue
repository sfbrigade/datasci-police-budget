<template>
    <v-expansion-panels accordion light class="Contact-Us-Panels">
        <v-expansion-panel v-for="panel in panels" :key="panel" class="Contact-Us-Panel"> 
            <v-expansion-panel-header class="Contact-Us-Header">{{panel.quest}}</v-expansion-panel-header>
            <v-expansion-panel-content class="Contact-Us-Content">
                <div>{{panel.ans1}}</div>
                <ul>
                    <li v-for="links in panel.links1" :key="links"> 
                        <a v-bind:href=links>{{links}}</a>
                    </li>
                </ul>
                <div>{{panel.ans2}}</div>
                <ul>
                    <li v-for="links in panel.links2" :key="links"> 
                        <a v-bind:href=links>{{links}}</a>
                    </li>
                </ul>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    data() {
        return {
            panels: [
                {quest: "Who is my local representative at the lowest level (i.e. district supervisor)? How do I contact them?", 
                    ans1: "Oakland: To find out who your city representative is and how to contact them, visit the City of Oakland's webpage.",
                    links1: ["https://www.oaklandca.gov/services/look-up-your-city-council-district-and-representative"],
                    ans2: "San Francisco: To find out who your city representative is and how to contact them, visit the City of San Francisco's webpage.",
                    links2: ["https://sfplanninggis.org/sffind/"]},
                {quest: "When and where can I attend public meetings to voice my opinion?", 
                    ans1: "Oakland: Upcoming meetings can be found on the City of Oakland's webpage.",
                    links1: ["https://www.oaklandca.gov/meetings?range%5Bdate%5D=1596265200000%3A1598943599999"],
                    ans2: "San Francisco: Upcoming meetings can be found on the City of San Francisco's webpage.",
                    links2: ["https://sfgov.org/countyclerk/public-notices-meetings"]},
                {quest: "When are upcoming elections? Which races have an impact on police spending, or policing in general?", 
                    ans1: "The next election for city representatives will occur alongside the general election, on November 3, 2020. Updates and details can be found on the respective city's webpage. \n\nOakland:",
                    links1: ["https://www.oaklandca.gov/topics/elections"],
                    ans2: "San Francisco:",
                    links2: ["https://sfelections.sfgov.org/"]},
                {quest: "What other organizations are working on policing issues in my city?", 
                    ans1:"Oakland:",
                    links1: ["https://www.antipoliceterrorproject.org/", "https://www.defundopd.org/", "http://www.blackorganizingproject.org/", "https://www.coalitionforpoliceaccountability.com/"],
                    ans2: "California:",
                    links2: ["https://ellabakercenter.org/"]}
            ]
        }
    }
}
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}

.Contact-Us-Panels{
    width: 820px;
}

.Contact-Us-Panel::before {
  box-shadow: none;
}

.Contact-Us-Header{
    font-family: Avenir;
    font-style: normal;
    font-weight: bolder;
    font-size: 18px;
    line-height: 25px;

    color: #2A6465;
}

.Contact-Us-Content{
    font-family: Avenir;
    font-style: normal;
    font-weight: lighter;
    font-size: 14px;
    line-height: 18px;

    color: #4F4F4F;
    white-space: pre-wrap;
}



</style>