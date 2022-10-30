import { useSession } from "next-auth/react";
import { Logo } from "./Logo";
import { Navigation } from "./navigation";

/**
 * The Header for the default page layout.
 *
 * @example <Header />
 */
export const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className="h-16 border-b border-neutral-600 bg-neutral-700">
      <div className="flex h-full items-center">
        <section className="flex-1 px-4 md:px-6 lg:absolute">
          <Logo />
        </section>

        <Navigation />

        <section className="absolute right-0 hidden items-center gap-8 px-8 lg:flex">
          {session ? "Avatar" : "Login"}
        </section>
      </div>
    </header>
  );
};
