import { render, screen } from "@testing-library/vue";
// import '@testing-library/jest-dom';
import MainNavVue from '@/components/MainNav.vue';
import { describe, it, expect } from 'vitest'

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
});