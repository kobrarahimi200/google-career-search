<template>
  <section>
    <h1>{{ action }} for every one</h1>
    <h2>find you next job</h2>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      action: "Build",
    };
  },
  created() {},
  methods: {
    changeTitle() {
      setInterval(() => {}, 3000);
    },
  },
});
</script>
