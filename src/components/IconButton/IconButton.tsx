import { ButtonProps, AnchorProps, IconButtonType } from "./IconButton.types";
import { RippleEffect } from "../RippleEffect";

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => "href" in props;

/**
 * A round button that is ideally used for icons.
 *
 * If href is passed as prop, the button will render as anchor instead
 * and links to the provided URL.
 *
 * @example
 *
 * import { GiHamburgerMenu } from "react-icons/gi";
 *
 * <IconButton>
 *   <GiHamburgerMenu size={24} />
 * </IconButton>
 */
export const IconButton: IconButtonType = (
  props: ButtonProps | AnchorProps
) => {
  const className = `relative cursor-pointer overflow-hidden rounded-full p-2 hover:bg-neutral-600 ${
    props.className ?? ""
  }`;

  if (isAnchorProps(props)) {
    return (
      <a {...props} className={`${className}`}>
        {props.children}
        <RippleEffect />
      </a>
    );
  }

  return (
    <button {...props} className={className}>
      {props.children}
      <RippleEffect />
    </button>
  );
};
