import { Ripple } from "./Ripple.styled";
import { useRipple } from "./useRipple";

type Props = {
  /**
   * The duration in ms over which the ripple animation fully plays.
   *
   * If no custom duration is provided, it will default to 500ms.
   */
  duration?: number;

  /**
   * The CSS background-color of the ripple effect, such as #ff0000 or rgb(255, 0, 0).
   *
   * If no custom color is provided, it will default to rgb(115, 115, 115).
   */
  color?: string;
};

/**
 * Augments the parent container with a ripple effect on mouse click.
 *
 * The parent container _must_ include the following CSS properties:
 * - position: relative
 * - overflow: hidden
 *
 * @example
 *
 * <button className="relative overflow-hidden">
 *   Button with ripple effect
 *   <RippleEffect duration={750} />
 * <button>
 */
export const RippleEffect: React.FC<Props> = ({
  duration = 500,
  color = "rgb(115, 115, 115)",
}: Props) => {
  const { ripples, dispatchRipple } = useRipple(duration);

  return (
    <div
      role="presentation"
      className="absolute top-0 left-0 h-full w-full"
      onClick={(e) => dispatchRipple(e)}
    >
      {ripples.map((ripple, index) => (
        <Ripple key={index} ripple={ripple} duration={duration} color={color} />
      ))}
    </div>
  );
};
