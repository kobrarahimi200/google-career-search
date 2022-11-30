<template>
  <button :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(val: string) {
        return ["primary", "secondary"].includes(val);
      },
    },
  },
  // data() {
  //   return {
  //     primary: true,
  //   };
  // },
  computed: {
    buttonClass() {
      return { primary: this.type === "primary", secondary: this.type === "secondary" };
    },
  },
  methods: {
    handleClick() {
      console.log("clciked");
    },
  },
});
</script>
<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply bg-brand-blue-1 border-0 text-white  hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
