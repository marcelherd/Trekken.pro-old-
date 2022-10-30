import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation: React.FC = () => {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
};
