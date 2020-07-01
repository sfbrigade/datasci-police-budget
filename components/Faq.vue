<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      <!-- Tab TBD -->
    </h2>
    <SideNavigationOverview
      :categories="items"
      :active-category="activeCategory"
      @clicked="scrollToCategory"
    />
    <!-- Add Scroll Area if SideNavigationOverview is shown -->
    <div
      :class="{ 'FaqContent-Scroll-Area': !isSmallScreenWidth }"
      @scroll.passive="debounce"
    >
      <div class="FaqContent-Scroll-Length" :style="{ height: scrollLength }">
        <div
          v-for="(item, i) in items"
          :id="`faq-content-${i}`"
          :key="i"
          class="FaqContent-Wrapper"
        >
        </div>
      </div>
    </div>
  </div>
</template>
