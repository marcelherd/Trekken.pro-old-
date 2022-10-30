import { NavLinks } from "./NavLinks";

/**
 * The desktop navigation menu, which is only shown on devices larger
 * than tablets.
 *
 * @example <MobileNavigation />
 */
export const DesktopNavigation: React.FC = () => {
  return (
    <nav className="hidden h-full lg:mx-auto lg:block lg:w-4/6">
      <NavLinks />
    </nav>
  );
};
