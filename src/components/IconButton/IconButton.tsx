import { forwardRef } from "react";
import { RippleEffect } from "../Ripple";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  function IconButton({ children, className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={`relative cursor-pointer overflow-hidden rounded-full p-3 hover:bg-neutral-600 ${className}`}
        {...props}
      >
        {children}
        <RippleEffect />
      </button>
    );
  }
);
