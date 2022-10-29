import { act, renderHook } from "@testing-library/react";
import { useOpenToggle } from "./useOpenToggle";

describe("useRipple", () => {
  it("should not be open initially", () => {
    const { result } = renderHook(() => useOpenToggle());

    expect(result.current.isOpen).toBe(false);
  });

  it("should adjust the isOpen state, if open and close are called", () => {
    const { result } = renderHook(() => useOpenToggle());

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("should toggle the isOpen state, if toggle is called", () => {
    const { result } = renderHook(() => useOpenToggle());

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(false);
  });
});
