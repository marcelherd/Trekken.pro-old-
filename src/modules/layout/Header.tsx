import { useSession } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "../../components/IconButton/IconButton";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className="h-16 border-b border-neutral-600 bg-neutral-700">
      <div className="flex h-full items-center">
        <section className="flex-1 px-4 md:px-6 lg:absolute">
          <Logo />
        </section>
        <nav className="hidden h-full lg:mx-auto lg:block lg:w-4/6">
          <Navigation />
        </nav>
        <section className="px-8 lg:hidden">
          <IconButton>
            <GiHamburgerMenu size={24} />
          </IconButton>
        </section>
        <section className="absolute right-0 hidden items-center gap-8 px-8 lg:flex">
          {session ? "Avatar" : "Login"}
        </section>
      </div>
    </header>
  );
};
