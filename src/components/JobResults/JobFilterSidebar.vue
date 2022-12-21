<template>
  <section class="pb-5">
    <div class="flex flex-row justify-between">
      <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
      <div class="flex items-center text-sm">
        <ActionBtnVue text="Clear Filters" type="secondary" />
      </div>
    </div>
    <JobFiltersSidebarOrganizationsVue header="Degree" />
    <CollapsableVue header="Job Types"><p>placeholder for now</p></CollapsableVue>
    <JobFiltersSidebarOrganizationsVue />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ActionBtnVue from "../ActionBtn.vue";
import CollapsableVue from "../shared/Collapsable.vue";
import JobFiltersSidebarOrganizationsVue from "./JobFiltersSidebarOrganizations.vue";
export default defineComponent({
  components: { ActionBtnVue, CollapsableVue, JobFiltersSidebarOrganizationsVue },
});
</script>
<style></style>
