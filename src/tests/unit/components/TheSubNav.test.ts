import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { render, screen } from "@testing-library/vue";
import TheSubNavVue from '@/components/TheSubNav.vue';

import "@testing-library/jest-dom";

describe("TheSubNav", () => {
  describe("when user is on job page", () => {
    const $route = { name: "jobResults" };
    it("displays job count", () => {
      render(TheSubNavVue, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = screen.getByText("18321");
      expect(jobCount).toBeInTheDocument();
    });
  });
  // describe("when user is NOT on the job page", () => {
  //   it("displays job not count", () => {
  //     render(TheSubNavVue, {
  //     });
  //     const jobCount = screen.getByText("18321");
  //     expect(jobCount).not.toBeInTheDocument();
  //   });
  // })
})