<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      value: String,
      required: true,
    },
  },
  emits: ["handlleInput:modelValue"],

  methods: {
    handleInput($event: Event) {
      // this.value = $event.target!.value;
      this.$emit("handlleInput:modelValue", $event.target!.value);
    },
  },
});
</script>
