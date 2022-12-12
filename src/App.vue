<template>
  <main-nav-vue />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainNavVue from "./components/MainNav.vue";

export default defineComponent({
  components: { MainNavVue },
});
</script>
