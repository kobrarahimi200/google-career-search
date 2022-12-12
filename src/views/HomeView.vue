<template>
  <TheHeroVue />
  <h1>home view</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeroVue from "@/components/JonSearch/TheHero.vue";

export default defineComponent({
  components: {
    TheHeroVue,
  },
});
</script>
