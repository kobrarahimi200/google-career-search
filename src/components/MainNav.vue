<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl"> {{ company }}</a>
        <!-- <h2 class="ml-8 flex h-full items-center">Developed by {{ author }}</h2> -->
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItems" class="ml-9 h-full">
              <a href="" class="flex h-full items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNav",
  data() {
    return {
      company: "Bobo Careers",
      author: "Kobra",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Location", "Bobo at life Corp", "How we hire", "Jobs"],
    };
  },
});
</script>
