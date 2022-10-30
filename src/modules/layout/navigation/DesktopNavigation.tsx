import { NavLinks } from "./NavLinks";

/**
 * TODO: Document this.
 */
export const DesktopNavigation: React.FC = () => {
  return (
    <nav className="hidden h-full lg:mx-auto lg:block lg:w-4/6">
      <NavLinks />
    </nav>
  );
};
