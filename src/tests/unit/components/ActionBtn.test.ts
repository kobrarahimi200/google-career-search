import ActionBtnVue from '@/components/ActionBtn.vue';
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

describe("ActionBtn", () => {
  it("renders text", () => {
    render(ActionBtnVue, {
      props: {
        text: "Click me",
        type: "primary",
      }
    });
    const button = screen.getByRole("button", {
      name: /Click me/i,
    });
    expect(button).toBeInTheDocument();
  });
  it("apply one of severla styles to button", () => {
    render(ActionBtnVue, {
      props: {
        text: "Click me",
        type: "primary",
      }
    });
    const button = screen.getByRole("button", {
      name: /Click me/i,
    });
    expect(button).toHaveClass("primary");
  });
})