"use client";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import Container from "./Container";
import { useCartContext } from "@/app/context/CartContext";
import nookies from "nookies";

function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const navLinks = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/store",
      title: "فروشگاه",
    },
  ];
  const { totalQty } = useCartContext();

  //get token
  const token = nookies.get().token;

  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={path === item.href ? "text-blue-400" : ""}
              >
                {item.title}
              </Link>
            ))}
            {token ? <Link href="/dashboard">داشبورد</Link> : null}
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="bg-red-500 text-white rounded-full px-2 py-1">
              {totalQty}
            </span>
            <Link href="/cart">سبد خرید</Link>
            {token ? (
              <button
                onClick={() => {
                  nookies.destroy(null, "token");
                  router.replace("/");
                }}
              >
                خروج
              </button>
            ) : (
              <Link href="/login">ورود / ثبت نام</Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
