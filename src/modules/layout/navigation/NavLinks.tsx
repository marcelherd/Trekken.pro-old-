import { useRouter } from "next/router";
import clsx from "clsx";
import { routes } from "../../constants";

export const NavLinks: React.FC = () => {
  const router = useRouter();

  return (
    <ul className="flex h-full flex-col gap-8 py-8 lg:flex-row lg:py-0">
      {routes.map((item) => (
        <li
          key={item.name}
          className={clsx(
            "flex justify-center text-2xl lg:h-full lg:items-center lg:px-4 lg:text-lg",
            item.path === router.pathname && "lg:border-b-4 tablet:font-bold"
          )}
        >
          <a href={item.path}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};
