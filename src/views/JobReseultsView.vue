<template>
  <div class="flex flex-row flex-nowrap w-full"><JobFilterSidebar /> <JobListings /></div>
</template>
<script lang="ts">
import JobFilterSidebar from "@/components/JobResults/JobFilterSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: { JobFilterSidebar, JobListings },
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
