<template>
  <div class="About">
    <h3 class="About-Heading">
      About the website
    </h3>
    <TextCard>
      Information about our group
      <br />
      The goal is to provide easy to understand, publicly available, and
      unbiased information on police budget in the Bay Area. This
      allows the residents, companies, as well as visitors to the Bay Area,
      understand the current situation.
    </TextCard>
    <TextCard title="Browser compatibility">
      It is recommended to use the following browsers when viewing this site.<br />
      <ul class="About-Browser-List">
        <li>Microsoft Edge (Latest Ver)</li>
        <li>Mozilla Firefox (Latest Ver)</li>
        <li>Google Chrome (Latest Ver)</li>
        <li>Safari (macOS) (Latest Ver)</li>
        <li>Opera (Latest Ver)</li>
      </ul>
      When viewing this site, regardless of whether the recommended browsers are
      used or not, please understand that site elements may not display
      correctly due to some pre-defined settings in the browser being used.
    </TextCard>
    <TextCard title="Linking to this site">
      Feel free to link this web site from any web sites.
    </TextCard>
    <TextCard title="JavaScript">
      This site uses JavaScript.<br />
      If JavaScript is disabled, the site may not work as expected or may not
      display correctly.<br />
      Please make sure to enable JavaScript when browsing this site.
    </TextCard>
    <TextCard title="Cookie">
      This site uses cookies.<br />
      Cookies are temporarily stored data from web requests and are used to know
      the usage statistics of this site.<br />
      <br />
      If you do not wish your browsing data to be collected, please disable
      cookies from your web browser.<br />
      <br />
      However, if you disable cookies, this site may not work as expected.
    </TextCard>
    <TextCard title="Disclaimers">
      Although every effort has been made to ensure the accuracy of the
      information posted on this site, the team Stop Cornavirus is not
      responsible for any actions taken by users using the information on this
      site.<br />
      <br />
      Website will not be responsible in case any user uses the website data in
      a way that causes, or is likely to cause any damage.<br />
      <br />
      Any information on this site may be changed or deleted without prior
      notice.
    </TextCard>
    <TextCard title="About data shown in this site">
      Anyone can freely download the data published on this site from
      <a href="" target="_blank" rel="noopener">Deta Source</a>.
    </TextCard>
    <TextCard title="About the source code">
      The source code of this site is released under the MIT license that anyone
      can use freely. For details, please check
      <a href="" target="_blank" rel="noopener">GitHub repository</a>.
    </TextCard>
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: 'About the website'
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $black;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    list-style: none;
    padding: 12px 0;
  }
}

a {
  @include text-link();
}
</style>
