import { renderHook } from "@testing-library/react";
import { useRipple } from "./useRipple";

describe("useRipple", () => {
  it("should have no ripples initially", () => {
    const { result } = renderHook(() => useRipple(0));

    expect(result.current.ripples).toStrictEqual([]);
  });
});
