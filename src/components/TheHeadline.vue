<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionlass">{{ action }} </span> <br />for every one
    </h1>
    <h2 class="text-3xl font-light">find you next job</h2>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import nextElementInList from "../utils/nextElementInList";

export default defineComponent({
  data() {
    return {
      action: "Build",
      interval: 0,
    };
  },
  computed: {
    actionlass() {
      return this.action.toLocaleLowerCase();
      // return {
      //   // build: this.action === "Build",
      //   // design: this.action === "Design",
      //   // create: this.action === "Create",
      //   // code: this.action === "Code",
      //   // [this.action.toLocaleLowerCase()]: true,
      //   this.action.toLocaleLowerCase()
      // };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval!);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
});
</script>
<style>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
