<template>
  <h1 class="text-6xl font-bold">Job results page</h1>
  <button @click="goToHome">Go to Home page</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    experiment() {
      console.log(this.$router);
      return "something";
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
});
</script>
