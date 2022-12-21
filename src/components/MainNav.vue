<template>
  <header :class="['w-full', 'text-sm', headerHeight]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">
          Bobo Careers
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItems" :key="item" class="ml-9 h-full first:ml-0">
              <router-link :to="item.url" class="flex h-full items-center py-2.5">{{
                item.text
              }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImg v-if="isLoggedIn" />
          <action-btn v-else text="Sign in" type="primary" @click="loginUser" />
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
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/user";

export default defineComponent({
  name: "MainNav",
  components: {
    ActionBtn,
    ProfileImg,
    TheSubNav,
  },
  data() {
    return {
      author: "Kobra",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Location", url: "/" },
        { text: "Bobo at life Corp", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ["isLoggedIn"]), //usetStore
    headerHeight() {
      return {
        "h-16": !this.isLoggedIn, //false
        "h-32": this.isLoggedIn, //true
      };
    },
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser"]),
    // userLogin() {
    //   this.userStore.isLoggedIn = true;
    // },
  },
});
</script>
