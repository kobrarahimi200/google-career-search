import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import JobSearchFormVue from '@/components/JonSearch/JobSearchForm.vue';
// import { vi } from 'vitest';

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("it directs the user to job result page with user's search paramters", async () => {
      const push = vi.fn(); //vitrst mock function
      const $router = { push };
      render(JobSearchFormVue, {
        global: {
          mocks: {
            $router: $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = screen.getByRole("textbox", {
        name: /Role/i,
      });
      await userEvent.type(roleInput, "Vue Developer"); //user types this value to the role input

      const locationInput = screen.getByRole("textbox", {
        name: /Where?/i,
      });
      await userEvent.type(locationInput, "Hamburg"); //user types this value to the role input
      const submitBtn = screen.getByRole("button", {
        name: /search/i,
      });
      await userEvent.click(submitBtn);
      expect(push).toHaveBeenCalledWith({
        name: "jobResults",
        query: { role: "Vue Developer", location: "Hamburg" },
      });
    });
  });
});