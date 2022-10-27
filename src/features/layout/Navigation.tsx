import { useRouter } from "next/router";
import clsx from "clsx";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Characters",
    path: "/characters",
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
  },
  {
    name: "Tournaments",
    path: "/tournaments",
  },
  {
    name: "Guides",
    path: "/guides",
  },
];

export const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <ul className="flex h-full gap-8">
      {navItems.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "flex h-full items-center px-4 text-lg",
            item.path === router.pathname && "border-b-4"
          )}
        >
          <a href={item.path}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};
