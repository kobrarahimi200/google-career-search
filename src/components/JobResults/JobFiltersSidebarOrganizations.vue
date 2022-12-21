<template>
  <CollapsableVue header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="between vue" type="checkbox" class="mr-3" />
            <label for="etween vue">Between Vue</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="et vue" type="checkbox" class="mr-3" />
            <label for="et vue">Et Vue </label>
          </li>

          <li class="h-8 w-1/2">
            <input id="vue and half" type="checkbox" class="mr-3" />
            <label for="vue and half">Vue and a half Men</label>
          </li>
        </ul>
      </fieldset>
    </div></CollapsableVue
  >
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CollapsableVue from "../shared/Collapsable.vue";

export default defineComponent({
  components: { CollapsableVue },
});
</script>
