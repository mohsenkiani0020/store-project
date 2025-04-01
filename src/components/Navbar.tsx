"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

function Navbar() {
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

  return (
    
      <nav className="shadow p-4">
        <Container>
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
          </div>
        </Container>
      </nav>
    
  );
}

export default Navbar;
