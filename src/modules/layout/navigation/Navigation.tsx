import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

/**
 * A responsive navbar.
 *
 * @example <Navigation />
 */
export const Navigation: React.FC = () => {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
};
