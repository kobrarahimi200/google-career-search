<template>
  <div class="w0full h-16 border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResults">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">18321</span> jobs search</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSubNav",
  data() {
    return {
      onJobResults: true,
    };
  },
});
</script>
