<template>
  <header :class="['w-full', 'text-sm', headerHeight]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl"> {{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItems" :key="item" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImg v-if="isLoggedIn" />
          <action-btn v-else text="Sign in" type="primary" @click="userLogin" />
        </div>
      </div>
      <TheSubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ActionBtn from "./ActionBtn.vue";
import ProfileImg from "./ProfileImg.vue";
import TheSubNav from "./TheSubNav.vue";

export default defineComponent({
  name: "MainNav",
  components: {
    ActionBtn,
    ProfileImg,
    TheSubNav,
  },
  data() {
    return {
      company: "Bobo Careers",
      author: "Kobra",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Location", "Bobo at life Corp", "How we hire", "Jobs"],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeight() {
      return {
        "h-16": !this.isLoggedIn, //false
        "h-32": this.isLoggedIn, //true
      };
    },
  },
  methods: {
    userLogin() {
      this.isLoggedIn = true;
    },
  },
});
</script>
