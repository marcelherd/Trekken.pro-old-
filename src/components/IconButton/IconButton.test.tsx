import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("should have a role attribute of button", () => {
    render(<IconButton>Foo</IconButton>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render its children", () => {
    render(<IconButton>Foo</IconButton>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Foo");
  });

  it("should react to click events", () => {
    const clickHandler = jest.fn();

    render(<IconButton onClick={clickHandler}>Foo</IconButton>);
    const button = screen.getByRole("button");

    expect(clickHandler).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(3);
  });
});
