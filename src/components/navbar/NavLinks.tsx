"use client";

import Link from "next/link";
import clsx from "classnames";

interface NavLinksProps {
  token: string | undefined;
  path: string;
}

const navLinks = [
  { href: "/", title: "خانه" },
  { href: "/store", title: "فروشگاه" },
];

const NavLinks = ({ token, path }: NavLinksProps) => {
  return (
    <div className="flex gap-1 items-center">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            "text-center py-2 rounded-md min-w-20",
            path === item.href ? "bg-black/75 text-white" : "hover:bg-gray-500"
          )}
        >
          {item.title}
        </Link>
      ))}

      {token && (
        <Link
          href="/dashboard"
          className={clsx(
            "text-center px-4 py-2 rounded-md min-w-20",
            path === "/dashboard"
              ? "bg-black/75 text-white"
              : "hover:bg-gray-500"
          )}
        >
          داشبورد
        </Link>
      )}
    </div>
  );
};

export default NavLinks;
