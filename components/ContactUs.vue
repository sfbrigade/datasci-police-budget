<template>
    <v-expansion-panels accordion light class="Contact-Us-Panels">
        <v-expansion-panel v-for="panel in panels" :key="panel" class="Contact-Us-Panel"> 
            <v-expansion-panel-header class="Contact-Us-Header">{{panel.quest}}</v-expansion-panel-header>
            <v-expansion-panel-content class="Contact-Us-Content">{{panel.ans}}</v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    data() {
        return {
            panels: [
                {quest: "Who is my local representative at the lowest level (i.e. district supervisor)? How do I contact them?", ans: "Gordan Mar has been a member of the SF Board of Supervisors since 2019, representing District 4. \n\nCity Hall \n1 Dr. Carlton B. Goodlett Place, Room 244 \nSan Francisco, CA 94102-4689 \n(415) 554-7460 - voice \n(415) 554-7432 - fax \nmarstaff@sfgov.org"},
                {quest: "When and where can I attend public meetings to voice my opinion?", ans: "At XYZ and ABC public forums every 123 days."},
                {quest: "Test test test?", ans: "Test test test!"}
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
    font-size: 16px;
    line-height: 25px;

    color: #4F4F4F;
    white-space: pre-wrap;
}



</style>