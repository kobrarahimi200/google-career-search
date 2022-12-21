import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from 'vitest';
import MainNavVue from '@/components/MainNav.vue';
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";


describe("MainNavVue", () => {
  const $route = { name: "Home" };
  const pinia = createTestingPinia({ stubActions: false });
  it("diplays company name", () => {

    render(MainNavVue, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
    // screen.debug();
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeDefined();
  });
  // it("displays menu items for the navigation", () => {
  //   render(MainNavVue);
  //   const navItems = screen.getByRole("listitem");
  //   console.log(navItems);
  //   const navTexts = navItems.map((item) => item.textContent);
  //   expect(navTexts).toEqual(["Teams", "Location", "Bobo at life Corp", "How we hire", "Jobs"]);
  // });
});
describe("MainNav", () => {
  it("displays user profile image", async () => {
    render(MainNavVue);
    const userStore = useUserStore(); //mocking all store actions
    const loginBtn = screen.getByRole("button", {
      name: /Sign in/i,
    });
    userStore.
    await userEvent.click(loginBtn);
    const img = screen.getByRole("img", {
      name: /user profile/i,
    });
    expect(img).toBeInTheDocument();
  });
});