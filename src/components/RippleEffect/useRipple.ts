import { MouseEventHandler, useEffect, useState } from "react";
import { RippleType, useRippleResult } from "./ripple.types";

/**
 * Returns a {@link useRippleResult} object, which includes functionality to
 * manage ripple effects.
 *
 * @param {number} duration - The duration in ms over which the ripple animation fully plays.
 * @returns {useRippleResult} the {@link useRippleResult}.
 * @example
 *
 * const { ripples, dispatchRipple } = useRipple(duration);
 *
 * return (
 *   <div
 *     onClick={(e) => dispatchRipple(e)}
 *     className="absolute top-0 left-0 h-full w-full">
 *       {ripples.map((ripple, index) => (
 *         ...
 *       ))}
 *   </div>
 * );
 */
export function useRipple<T extends HTMLElement>(
  duration: number
): useRippleResult<T> {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  // This runs each time the using component is re-rendered due to a new
  // ripple being dispatched.
  // At this point, a timeout starts which cleans up any existing ripples.
  // This timeout is reset each time the hook runs, thereby ensuring that
  // the ripples are only removed once they have all been resolved.
  // The cleanup occurs after duration * 2 milliseconds to ensure that the
  // user doesn't see any visual glitches.
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined;

    if (ripples.length > 0) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setRipples([]);
      }, duration * 2);
    }

    return () => clearTimeout(timeout);
  }, [ripples, duration]);

  /** @see {@link useRippleResult.dispatchRipple} */
  const dispatchRipple: MouseEventHandler<T> = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();

    // The maximum of width and height is chosen to ensure that the ripple
    // covers the entire container.
    const size = Math.max(rippleContainer.width, rippleContainer.height);
    const offsetLeft = event.clientX - (rippleContainer.x + size / 2);
    const offsetTop = event.clientY - (rippleContainer.y + size / 2);

    const ripple: RippleType = {
      size,
      offsetLeft,
      offsetTop,
    };

    setRipples((old) => [...old, ripple]);
  };

  return { ripples, setRipples, dispatchRipple };
}
