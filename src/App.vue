<template>
  <MainNavVue />
  <the-hero-vue />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainNavVue from "@/components/MainNav.vue";
import TheHeroVue from "@/components/TheHero.vue";

export default defineComponent({
  components: {
    MainNavVue,
    TheHeroVue,
  },
});
</script>
