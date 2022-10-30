import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Breakpoints } from "../../constants";
import { Backdrop } from "../../../components/Backdrop";
import { IconButton } from "../../../components/IconButton";
import { useOpenToggle } from "../../../hooks/useOpenToggle";
import { NavLinks } from "./NavLinks";

/**
 * The mobile navigation menu, which is only shown on mobile and tablet devices.
 *
 * The menu is initially closed. In this state, it shows a button to open the
 * mobile navigation menu. When opened, it will show the user links to navigate
 * the application and to manage his session.
 * If the window is resized and the viewport becomes large enough, the mobile
 * navigation menu will automatically be closed and the button to open it will
 * be hidden.
 *
 * @example <MobileNavigation />
 */
export const MobileNavigation: React.FC = () => {
  const desktop = useMediaQuery({ query: `(min-width: ${Breakpoints.lg}px)` });
  const { isOpen, open, close } = useOpenToggle();

  // The button that opens the mobile navigation menu is only visible on
  // smaller screens, therefore this should only occur if the browser
  // window was resized.
  // In this situation, the mobile navigation menu can simply be closed,
  // as the regular navigation bar is visible on the larger viewport.
  useEffect(() => {
    if (desktop) {
      close();
    }
  }, [desktop]);

  return isOpen ? (
    <Backdrop className="flex">
      <div className="flex-1" onClick={() => close()} />
      <nav className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-neutral-700 shadow-2xl sm:w-3/5 md:w-1/2">
        <div className="flex justify-end py-3 px-4">
          <IconButton onClick={() => close()}>
            <CgClose size={24} />
          </IconButton>
        </div>
        <NavLinks />
        <div className="flex justify-end py-4 px-8 text-lg">Login</div>
      </nav>
    </Backdrop>
  ) : (
    <section className="flex px-4 lg:hidden">
      <IconButton onClick={() => open()}>
        <GiHamburgerMenu size={24} />
      </IconButton>
    </section>
  );
};
