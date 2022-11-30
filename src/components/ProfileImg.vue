<template>
  <img :src="ImgLink" class="h-8 w-8 rounded-3xl object-contain" alt="user profile" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImg",
  data() {
    return {
      ImgLink: "https://www.gstatic.com/webp/gallery/1.jpg",
    };
  },
});
</script>
