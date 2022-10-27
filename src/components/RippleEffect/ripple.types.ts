import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type RippleType = {
  /**
   * How far the ripple will extend, typically max(width, height) of the container.
   */
  size: number;

  /**
   * Offset to the top of the container, used to determine the ripples origin location.
   */
  offsetTop: number;

  /**
   * Offset to the left of the container, used to determine the ripples origin location.
   */
  offsetLeft: number;
};

export type useRippleResult<T extends HTMLElement> = {
  /**
   * The ripples that are currently present in the DOM
   */
  ripples: RippleType[];

  /**
   * Updates the ripples that are currently present in the DOM.
   *
   * If you want to create new ripples when mouse events occur,
   * use {@link dispatchRipple} instead as it already includes
   * the required logic to create ripples originating from the
   * clicked location within the container. It will also dispose
   * of existing ripples automatically once their animation has
   * finished playing.
   */
  setRipples: Dispatch<SetStateAction<RippleType[]>>;

  /**
   * Produces a {@link RippleType} with the given {@link MouseEvent} and
   * adds it to the internal state, so that it can be rendered.
   *
   * @param {MouseEvent} event - the mouse event which is used to compute
   *    the origin location of the ripple.
   * @returns {MouseEventHandler<T>} a handler function for mouse events.
   */
  dispatchRipple: MouseEventHandler<T>;
};
