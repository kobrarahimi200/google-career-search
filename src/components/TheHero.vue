<template>
  <main>
    <section class="flex flex-col h-screen bg-yellow-200 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-2 col-start-1 border border-blue-700">1 column</div>
        <div class="col-span-4 col-start-3 border border-blue-700">
          <TheHeadlineVue />
          <JobSearchFormVue />
        </div>
        <div class="col-span-4 col-start-7 border border-blue-700">5 column</div>
        <div class="col-span-2 col-start-11 border border-blue-700">1 column</div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeadlineVue from "./TheHeadline.vue";
import JobSearchFormVue from "@/tests/unit/components/JobSearchForm.vue";
export default defineComponent({
  components: {
    TheHeadlineVue,
    JobSearchFormVue,
  },
});
</script>
