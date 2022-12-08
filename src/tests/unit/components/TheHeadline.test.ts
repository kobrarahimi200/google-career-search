import { render, screen } from '@testing-library/vue';
import TheHeadlineVue from '@/components/TheHeadline.vue';
import { vi } from 'vitest';
import { nextTick } from 'vue';
import "@testing-library/jest-dom";


describe("TheHeadline", () => {
  beforeEach(() => {
    vi.useFakeTimers();//stop the interval for testing
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  describe("vitest playground", () => {
    it("tracks whether it has been called", () => {
      const mockFunction = vi.fn();
      mockFunction(23, 2); //you can define this functin as you like 
      expect(mockFunction).toHaveBeenCalledWith(23, 2);
    });
  });

  describe("The headline test cases", () => {
    it("displays introductory action verb", () => {

      // vi.useFakeTimers(); //stop the interval for testing
      render(TheHeadlineVue);
      const actionPhrase = screen.getByRole("heading", {
        name: /build for everyone/i,
      });
      expect(actionPhrase).toBeInTheDocument();
      // vi.useRealTimers(); //resume again the interval 
    });

    it("changes action verb at a consistent inteval", () => {
      // vi.useFakeTimers();
      const mock = vi.fn();
      vi.stubGlobal("setInterval", mock);
      render(TheHeadlineVue);
      expect(mock).toHaveBeenCalled();
      // vi.useRealTimers();
    });
    it("swap after action interval", async () => {
      // vi.useFakeTimers();
      render(TheHeadlineVue);

      vi.advanceTimersToNextTimer();//move interval to the next interval one step
      await nextTick();
      const actionPhrase = screen.getByRole("heading", {
        name: /create for everyone/i,
      });
      expect(actionPhrase).toBeInTheDocument();
      // vi.useRealTimers();
    });
  });
});