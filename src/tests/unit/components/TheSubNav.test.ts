import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import TheSubNavVue from '@/components/TheSubNav.vue';

import "@testing-library/jest-dom";

describe("TheSubNav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      render(TheSubNavVue, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResults: true,
          }
        },
      });
      const jobCount = screen.getByText("18321");
      expect(jobCount).toBeInTheDocument();
    });

  });
  // describe("when user is NOT on the job page", () => {
  //   it("displays job not count", () => {
  //     render(TheSubNavVue, {
  //       data() {
  //         return {
  //           onJobResults: false,
  //         }
  //       },
  //     });
  //     const jobCount = screen.getByText("18321");
  //     expect(jobCount).not.toBeInTheDocument();
  //   });
  // })
})