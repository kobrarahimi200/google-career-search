<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3 mt-20"
    @submit.prevent="searchForJobs"
  >
    <!-- <div class="mt-5"><input type="text" />Role <input type="text" />Where?</div> -->
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <text-input-vue id="role" v-model="role" placeholder="Software engineer" />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="location" class="absolute left-0 -top-10">Where?</label>
        <text-input-vue id="location" v-model="location" placeholder="Hamburg" />
      </div>
    </div>
    <ActionBtn text="search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>
<script lang="ts">
import ActionBtn from "@/components/ActionBtn.vue";
import { defineComponent } from "vue";
import TextInputVue from "../shared/TextInput.vue";

export default defineComponent({
  components: { ActionBtn, TextInputVue },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "jobResults",
        query: { role: this.role, location: this.location },
      });
      // console.log(this.$route.params);
    },
  },
});
</script>
