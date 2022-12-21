import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { render, screen } from '@testing-library/vue';
import userEvent from "@testing-library/user-event";
import CollapsableVue from '@/components/shared/Collapsable.vue';
import "@testing-library/jest-dom";

describe("Collabsable", () => {
  it("renders child content", async () => {
    render(CollapsableVue, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "My Category",
      },
      slots: {
        default: "<h3>My nested child</h3>",
      },
    });
    expect(screen.queryByText("My nested child")).not.toBeInTheDocument();
    const button = screen.getByRole("button", { name: /my category/i });
    await userEvent.click(button);
    expect(screen.getByText("My nested child")).toBeInTheDocument();
  })
})