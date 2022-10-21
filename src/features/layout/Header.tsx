import { useSession } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsDownload } from "react-icons/bs";

export const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className="h-16 border-b border-neutral-600 bg-neutral-700">
      <div className="flex h-full items-center">
        <section className="flex-1 px-4 md:px-6 lg:absolute">
          <span className="font-BarlowCondensed text-xl font-extralight">
            Trekken.pro
          </span>
        </section>
        <section className="hidden lg:mx-auto lg:block lg:w-4/6">
          <ul className="flex gap-10">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Characters</a>
            </li>
            <li>
              <a href="#">Leaderboards</a>
            </li>
            <li>
              <a href="#">Tournaments</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
          </ul>
        </section>
        <section className="px-8 lg:hidden">
          <GiHamburgerMenu size={24} />
        </section>
        <section className="absolute right-0 hidden items-center gap-8 px-8 lg:flex">
          <a
            href="#"
            className="flex gap-2 rounded border-2 border-neutral-300 px-2 py-2"
          >
            <BsDownload size={20} /> Download
          </a>
          {session ? "Avatar" : "Login"}
        </section>
      </div>
    </header>
  );
};
