import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/matchers";
import { expect, afterEach } from "vitest";

expect.extend(matchers);
afterEach(() => {
  //cleans every test after runnign to avoid pollution for the next trst
  cleanup();
});

