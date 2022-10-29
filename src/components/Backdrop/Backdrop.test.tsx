import { render, screen } from "@testing-library/react";
import { Backdrop } from "./Backdrop";

describe("Backdrop", () => {
  it("should render its children", () => {
    render(<Backdrop data-testid="backdrop">Foo</Backdrop>);

    const button = screen.getByTestId("backdrop");

    expect(button).toHaveTextContent("Foo");
  });
});
