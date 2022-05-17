import useToggle from "./useToggle";
import { act, renderHook } from "@testing-library/react";

describe("useToggle", () => {
  describe("when setValue is called without parameter", () => {
    it("should return toggle", () => {
      const { result } = renderHook(() => useToggle(false));
      act(() => result.current[1]());
      expect(result.current[0]).toEqual(true);

      act(() => result.current[1]());
      expect(result.current[0]).toEqual(false);
    });
  });

  describe("when setValue is called with parameter", () => {
    it("should set the value to true", () => {
      const { result } = renderHook(() => useToggle(false));
      act(() => result.current[1](true));
      expect(result.current[0]).toEqual(true);
    });
  });
  describe("when setValue is called with parameter", () => {
    it("should set the value to false", () => {
      const { result } = renderHook(() => useToggle(false));
      act(() => result.current[1](false));
      expect(result.current[0]).toEqual(false);
    });
  });
});
