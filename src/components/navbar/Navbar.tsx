"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Container from "../Container";
import CartIcon from "./CartIcon";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import nookies from "nookies";
import Image from "next/image";

function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const token = nookies.get().token;

  const AUTH_PATHS = ["/auth/login", "/auth/register", "/auth/forgot-password"];
  const shouldShowLogin = !token && !AUTH_PATHS.includes(path);

  return (
    <nav className="shadow p-4 bg-black text-white fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Image src="/images/logo.png" alt="logo image" width={150} height={27} priority />
          <NavLinks token={token} path={path} />
          <div className="flex items-center gap-4">
            <CartIcon />
            {shouldShowLogin && (
              <Link
                className="hover:bg-gray-500 px-3 py-2 rounded-md"
                href="/auth/login"
              >
                ورود / ثبت نام
              </Link>
            )}
            {token && (
              <UserMenu
                onLogout={() => {
                  nookies.destroy(null, "token");
                  router.replace("/");
                }}
              />
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
