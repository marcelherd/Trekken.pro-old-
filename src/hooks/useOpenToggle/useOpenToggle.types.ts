export type useOpenToggleResult = {
  /**
   * Whether the state is currently set to open or not. Initially false.
   */
  isOpen: boolean;

  /**
   * Sets the state to open.
   */
  open: () => void;

  /**
   * Sets the state to closed.
   */
  close: () => void;

  /**
   * Toggles the open state.
   */
  toggle: () => void;
};
