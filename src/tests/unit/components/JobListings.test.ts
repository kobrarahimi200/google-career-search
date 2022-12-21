import { RouterLinkStub } from '@vue/test-utils';
import { render, screen } from "@testing-library/vue";
import JobListingsVue from "@/components/JobResults/JobListings.vue";
import axios from "axios";
import "@testing-library/jest-dom";

// console.log(axios);

vi.mock("axios");
describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const renderJobListings = ($route: { query: { page: string; }; }) => {
    render(JobListingsVue, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      }
    })
  };

  it("fetches jobs", () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    const $route = createRoute();
    renderJobListings($route);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      renderJobListings($route);
      expect(screen.getByText("Page 1")).toBeInTheDocument();
    });
  });

  describe("when params inlucde page number", () => {
    it("displays page number", () => {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);
      renderJobListings($route);
      expect(screen.getByText("Page 3")).toBeInTheDocument();
    });
  });
  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      (axios.get as jest.Mock).mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      renderJobListings($route);
      await screen.findAllByRole("listitem");
      const nextLink = screen.queryByRole("link", { name: /Next/i })
      expect(nextLink).not.toBeInTheDocument();
    });
  });
});
