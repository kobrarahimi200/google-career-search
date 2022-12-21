import { render, screen } from "@testing-library/vue";
import JobListElemVue from '@/components/JobResults/JobListElem.vue';
import { RouterLinkStub } from '@vue/test-utils';
import "@testing-library/jest-dom";
describe("JobListElem", () => {
  const renderJobListing = () => {
    render(JobListElemVue, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          organization: "AirBnb",
        },
      },
    });
  };
  it("render job element", () => {
    renderJobListing();
    expect(screen.getByText("AirBnb")).toBeInTheDocument();
  });
});