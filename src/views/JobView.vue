<template>
  <h1>your are in the page {{ currentId }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  computed: {
    currentId() {
      return this.$route.params.id;
    },
  },
});
</script>
