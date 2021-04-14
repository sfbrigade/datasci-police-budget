<template>
  <div class="footer">
    <v-container style="max-width: none">
      <v-row>
        <v-col>
          <p class="footer-p">
            Bay Area City Budget Tracker is an open-source by Code for San Francisco
            to help citizens better understand the resources San Francisco and Oakland dedicate to policing.
          </p>
          <p class="footer-p">
            Data sources:
            San Francisco Budget Data obtained from<a href='https://data.sfgov.org/City-Management-and-Ethics/Budget/xdgd-c79v'> DataSF</a>.
            <br>
            San Francisco Use of Force Data obtained via a 
            <a href='https://www.muckrock.com/foi/san-francisco-141/police-use-of-force-data-san-francisco-police-department-93028/#comms'>request
            </a> under the California Record's act.
            <br>
            San Francisco population data obtained from California Department of <a href='https://www.dof.ca.gov/Forecasting/Demographics/'>Finance</a>.
            <br>
            Oakland financial and population information obtained from Oakland Open Data <a href='https://data.oaklandca.gov/'>Portal</a>.
            <br>
            Oakland Use of Force and staffing data obtained from <a href='https://www.oaklandca.gov/topics/use-of-force-uof-levels'>City of Oakland</a>.


          </p>
        </v-col>
        <v-col>
          <p class="footer-p copyright">
            &copy; 2020 Code for San Francisco
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return [
        {
          class: 'fab fa-meetup',
          name: 'Meetup',
          link:
            'https://www.meetup.com/Code-for-San-Francisco-Civic-Hack-Night/',
        },
        {
          class: 'fab fa-slack',
          name: 'Slack',
          link: 'https://sfbrigade-slackin.herokuapp.com/',
        },
        {
          class: 'fab fa-github',
          name: 'Github',
          link: 'https://github.com/sfbrigade/stop-covid19-sfbayarea',
        },
        {
          class: 'fab fa-twitter',
          name: 'Twitter',
          link: 'https://twitter.com/sfbrigade',
        },
        {
          class: 'fab fa-facebook',
          name: 'Facebook',
          link: 'https://www.facebook.com/codeforsanfrancisco',
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background: $dark-turquoise;
  padding: 20px 40px;
}

.footer-p {
  @include eyebrow();
  color: $white-1;
  line-height: 19px;
}

.copyright {
  text-align: right;
}

@include lessThan($small) {
  .footer {
    padding: 22px;
  }

  .copyright {
    @include font-size(12);
  }
}
</style>
