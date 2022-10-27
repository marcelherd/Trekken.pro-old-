import styled, { keyframes } from "styled-components";
import { RippleType } from "./ripple.types";

// @ts-ignore
import type { RippleEffect } from "./RippleEffect";

type Props = {
  /**
   * The {@link RippleType} which contains information about where the ripple
   * originates from and how large the ripple should be.
   */
  ripple: RippleType;

  /**
   * The CSS background-color of the ripple effect.
   */
  color: string;

  /**
   * The duration in ms over which the ripple animation fully plays.
   */
  duration: number;
};

const rippleAnimation = keyframes`
  to {
    transform: scale(2);
    opacity: 0;
  }
`;

/**
 * Represents one ripple inside {@link RippleEffect}.
 *
 * When the ripple is added to the DOM, it is scaled up over time until it
 * covers the entire container and becomes gradually more translucent
 * until it is no longer visible.
 */
export const Ripple = styled.span<Props>`
  position: absolute;
  width: ${({ ripple }) => `${ripple.size}px`};
  height: ${({ ripple }) => `${ripple.size}px`};
  top: ${({ ripple }) => `${ripple.offsetTop}px`};
  left: ${({ ripple }) => `${ripple.offsetLeft}px`};
  border-radius: 9999px;
  opacity: 0.75;
  background: ${({ color }) => color};
  animation: ${rippleAnimation} ${({ duration }) => duration}ms;
  transform: scale(0);
`;
