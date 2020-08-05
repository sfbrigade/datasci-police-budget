<template>
    <v-container class="Category-Background" fluid>
        <v-row justify="center">
            <v-col class="Category-Title"> Category Breakdown for {{selected_city}} </v-col>
        </v-row>
        <v-row justify="center" align-content="space-around">
            <v-col cols="4">
                <v-row v-for="category in first_categories" :key="category">
                    <v-col cols="12" class="Category-Sub-Title"> {{category.title}} </v-col> 
                    <v-col cols="12"> <ul class="Category-List">
                        <li v-for="item in category.budget_items" :key="item">
                            {{item}}
                        </li>
                    </ul> </v-col>
                    <v-col cols="12"> </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-row v-for="category in second_categories" :key="category">
                    <v-col cols="12" class="Category-Sub-Title"> {{category.title}} </v-col> 
                    <v-col cols="12"> <ul class="Category-List">
                        <li v-for="item in category.budget_items" :key="item">
                            {{item}}
                        </li>
                    </ul> </v-col>
                    <v-col cols="12"> </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { EventBus } from './event-bus.js';

var selected_city = "San Francisco"

EventBus.$on('New-city', selection => {
  console.log('pls work')
  console.log(selection)
  selected_city = selection
});

export default {
    data() {
        return {
            selected_city: "San Francisco",
            first_categories: [ {title: "Community Health", budget_items: ["Public Health"]},
            {title: "Culture & Recreation", budget_items: ["Academy of Sciences", "Arts Commission", "Asian Art Museum", "Fine Arts Museums", "Law Library", "Public Library", "Recreation and Parks", "War Memorial"]},
            {title: "Human Welfare & Neighborhood Development", budget_items: ["Child Support Services", "Children & Families", "Children Youth & Their Families", "Environment", "Homelessness & Support Housing", "Human Rights Commission", "Human Services Agency", "Rent Arbitration Board", "School District (SFUSD) - Co. Education", "Status of Women"]},
            {title: "Public Protection", budget_items: ["Adult Probation", "District Attorney", "Emergency Management", "Fire Dept.", "Juvenile Probation", "Police Accountability", "Police Dept.", "Public Defender", "Sheriff", "Superior Court"]}
            ],
            second_categories: [ {title: "General Admin & Finance", budget_items: ["Assessor-Recorder", "Board of Supervisors", "City Attorney", "City Planning", "Civil Service Commission", "Controller", "Elections", "Ethics Committee", "GSA - City Administrator's Office", "GSA - Technology", "Health Service System", "Human Resources", "Mayor", "Retirement System", "Treasurer / Tax Collector"]},
            {title: "Public Works, Transportation, & Commerce", budget_items: ["Airport (SFO)", "Board of Appeals", "Building Inspection", "Economic & Workforce Development", "GSA - Public Works", "Municipal Transportation", "Port", "Public Utilities Commission"]},
            {title: "General City Responsibilities", budget_items: ["General City Responsibility", "General Fund Unallocated"]}
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

.Category-Background{
    background: #FFFFFF;
    width: 1440px;
    height: 1399px;
}
.Category-Title{
    color: #2A6465;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
}

.Category-Sub-Title{
    font-family: Avenir;
    font-style: normal;
    font-weight: 1000;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
}

.Category-List{
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #000000;
    list-style-type: none;
}

</style>