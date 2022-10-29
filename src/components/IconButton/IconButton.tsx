import { forwardRef } from "react";
import { RippleEffect } from "../RippleEffect";

type Props = {
  /**
   * The contents of the button, typically an icon.
   */
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A round button that is ideally used for icons.
 *
 * @example
 *
 * import { GiHamburgerMenu } from "react-icons/gi";
 * import { IconButton } from "../components/IconButton";
 *
 * <IconButton>
 *    <GiHamburgerMenu size={24} />
 * </IconButton>
 */
export const IconButton = forwardRef<HTMLButtonElement, Props>(
  function IconButton({ children, ...props }, ref) {
    return (
      <button
        ref={ref}
        {...props}
        className={`relative cursor-pointer overflow-hidden rounded-full p-3 hover:bg-neutral-600 ${props.className}`}
      >
        {children}
        <RippleEffect />
      </button>
    );
  }
);
