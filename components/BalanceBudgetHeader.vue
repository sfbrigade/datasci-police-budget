<template>
    <v-container fluid class="Balance-Budget-Header-Container" fill-width>
        <v-row class="Balance-Budget-Header-Title"> Balance My City's Budget</v-row>
        <v-row class="Balance-Budget-Header-Dropdown-Container"> 
            <v-col class="Balance-Budget-Header-Dropdown" xs="3" md="3">
                <div class="Dropdown-Title">
                    Select Your City
                </div>
                <v-select :items="cities" placeholder="San Francisco" 
                    background-color=white outlined dense color="black"
                    @change="changeCities"
                    v-model="selected_city">
                </v-select>
            </v-col>
            <v-col class="Balance-Budget-Header-Dropdown" xs="3" md="3">
                <div class="Dropdown-Title">
                    Fiscal Year
                </div>
                <v-select :items="years" placeholder="2020-2021" 
                    background-color=white outlined dense color="black"
                    v-model="selected_year">
                </v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { EventBus } from './event-bus.js';

export default {
    data() {
        return {
            selected_city: "San Francisco",
            selected_year: "2020-2021",
            cities: ["San Francisco", "Oakland"],
            years: ["2015-2016","2016-2017","2017-2018","2018-2019","2019-2020","2020-2021"]
        }
    },

    methods: {
       changeCities(selection) {
           EventBus.$emit("New-city", selection);
       } 
    
    }
}
</script>


<style lang="scss">
@font-face {
  font-family: "Avenir";
  src: url("../assets/AvenirLTStd-Medium.otf");
}
.Balance-Budget-Header-Title{
    justify-content: center;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    color: #2A6465;
}
.Balance-Budget-Header-Dropdown-Container{
    justify-content: center;
}

.Dropdown-Title{
    text-align: left;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    background-color: transparent;
}

.theme--dark.v-list{
    background: white;
}

.v-select__selection{
    color: black !important;
}

.v-list-item__content{
    color: black !important;
}

.v-icon{
    color: black !important;
}

</style>