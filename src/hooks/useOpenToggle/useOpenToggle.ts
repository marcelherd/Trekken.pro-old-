import { useState } from "react";
import { useOpenToggleResult } from "./useOpenToggle.types";

/**
 * Provides an open state, which can be used by components to keep track
 * of whether something is opened or not, as well as functionality to toggle
 * this state.
 *
 * @returns {useOpenToggleResult} the {@link useOpenToggleResult}.
 * @example
 *
 * const { isOpen, open, close } = useOpenToggle();
 *
 * return (
 *   <>
 *     <button onClick={() => open()}>Open</button>
 *     <MobileNavigation open={isOpen} onClose={close} />
 *   </>
 * )
 */
export function useOpenToggle(): useOpenToggleResult {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /** @see {@link useOpenToggleResult.open} */
  const open = () => {
    setIsOpen(true);
  };

  /** @see {@link useOpenToggleResult.close} */
  const close = () => {
    setIsOpen(false);
  };

  /** @see {@link useOpenToggleResult.toggle} */
  const toggle = () => {
    setIsOpen((old) => !old);
  };

  return { isOpen, open, close, toggle };
}
