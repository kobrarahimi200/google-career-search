import TextInputVue from "@/components/shared/TextInput.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
  it("communicate that use has entered character", () => {
    render(TextInputVue, {
      props: [modelView],
    });
  });
});
