import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from 'vitest';
import MainNavVue from '@/components/MainNav.vue';
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";


describe("MainNavVue", () => {
  it("diplays company name", () => {
    render(MainNavVue
      // ,{//override the company value 
      // data() {
      //   return {
      //     company: "Super Careers",
      //   }
      // }
      // }
    );
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
    const loginBtn = screen.getByRole("button", {
      name: /Sign in/i,
    });
    await userEvent.click(loginBtn);
    const img = screen.getByRole("img", {
      name: /user profile/i,
    });
    expect(img).toBeInTheDocument();
  });
});