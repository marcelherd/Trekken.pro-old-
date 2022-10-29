import { act, fireEvent, render, screen } from "@testing-library/react";
import { RippleEffect } from "./RippleEffect";

describe("RippleEffect", () => {
  it("should have a role attribute of presentation", () => {
    render(<RippleEffect />);

    const rippleEffect = screen.getByRole("presentation");

    expect(rippleEffect).toBeInTheDocument();
  });

  it("should have no ripples initially", () => {
    render(<RippleEffect />);

    const rippleEffect = screen.getByRole("presentation");

    expect(rippleEffect).toBeEmptyDOMElement();
  });

  it("should create a ripple when clicked", () => {
    render(<RippleEffect duration={500} />);

    const rippleEffect = screen.getByRole("presentation");

    fireEvent.click(rippleEffect);

    expect(rippleEffect.children.length).toBe(1);
  });

  it("should create multiple ripples if clicked multiple times", () => {
    render(<RippleEffect />);

    const rippleEffect = screen.getByRole("presentation");

    fireEvent.click(rippleEffect);
    fireEvent.click(rippleEffect);
    fireEvent.click(rippleEffect);

    expect(rippleEffect.childNodes.length).toBe(3);
  });

  it("should discard all ripples after their animation has finished", async () => {
    // How long in ms the ripple animation takes to finish
    const duration = 100;

    render(<RippleEffect duration={duration} />);

    const rippleEffect = screen.getByRole("presentation");

    fireEvent.click(rippleEffect);
    fireEvent.click(rippleEffect);
    fireEvent.click(rippleEffect);

    await act(async () => {
      // Ripples are discarded after (duration * 2) ms
      await new Promise((r) => setTimeout(r, duration * 2));
    });

    expect(rippleEffect.childNodes.length).toBe(0);
  });

  it("should not discard ripples before their animation has finished", async () => {
    // How long in ms the ripple animation takes to finish
    const duration = 100;

    render(<RippleEffect duration={duration} />);

    const rippleEffect = screen.getByRole("presentation");

    fireEvent.click(rippleEffect);

    await act(async () => {
      // Ripples are discarded after (duration * 2) ms
      await new Promise((r) => setTimeout(r, duration * 0.5));
    });

    fireEvent.click(rippleEffect);

    expect(rippleEffect.childNodes.length).toBe(2);
  });
});
