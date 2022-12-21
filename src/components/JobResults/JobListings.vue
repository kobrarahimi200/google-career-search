<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <JobListElem v-for="job in displayedJob" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-row text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            to="{name : 'jobResults', query:{page : previousPage}}"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextpage"
            role="link"
            to="{name : 'jobResults', query:{page : nextpage}}"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import JobListElem from "./JobListElem.vue";
import axios from "axios";
import { useJobStore, FETCH_JOBS } from "@/stores/jobs";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  components: { JobListElem },

  computed: {
    currentPage(): number {
      return Number.parseInt((this.$route.query.page || "1") as string);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : undefined;
    },
    ...mapState(useJobStore, {
      jobs: "jobs",
      nextpage() {
        const nextpage = this.currentPage + 1;
        const maxPage = Math.ceil(this.jobs.length / 10);
        return nextpage <= maxPage ? nextpage : undefined;
      },
      displayedJob() {
        const pageNumber: number = this.currentPage;
        const firstJobIndex = (pageNumber - 1) * 10; //10
        const lastJobIndex = pageNumber * 10; //20
        return this.jobs.slice(firstJobIndex, lastJobIndex);
      },
    }),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobStore, [FETCH_JOBS]),
  },
});
</script>
