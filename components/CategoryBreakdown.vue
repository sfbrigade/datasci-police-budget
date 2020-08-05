<template>
    <v-container class="Category-Background" fluid>
        <v-row justify="center">
            <v-col class="Category-Title"> Category Breakdown </v-col>
        </v-row>
        <v-row justify="space-around" align-content="space-around">
            <v-col cols="4">
                <v-row v-for="category in first_categories" :key="category">
                    <div class="Category-Sub-Title"> {{category}} </div>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-row v-for="category in second_categories" :key="category">
                    <div class="Category-Sub-Title"> {{category}} </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            first_categories: ["Community Health", "Culture and Recreation", "Human Welfare & Neighborhood Development"],
            second_categories: ["General Admin & Finance", "Public Works, Transportation & Commerce"]
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
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
}

</style>