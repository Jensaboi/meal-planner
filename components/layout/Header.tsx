"use client";

import Logo from "@/public/Logo";
import HamburgerMenu from "@/public/HamburgerMenu";
import { useState } from "react";
import Link from "next/link";

const NavItems = [
  { href: "/meals", name: "Meals" },
  { href: "/discover", name: "Discover" },
  { href: "/dashboard", name: "Dashboard" },
  { href: "/ingredients", name: "Ingredients" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky w-full flex align-center justify-between p-5">
      <button onClick={() => setIsOpen(false)}>
        <Logo />
      </button>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenu isOpen={isOpen} />
      </button>

      <nav
        data-isopen={isOpen}
        className="fixed block bg-white z-10 translate-x-full right-0 top-18 w-full sm:w-120 data-[isopen=true]:translate-x-0 h-full"
      >
        <ul className="flex flex-col align-center">
          {NavItems.map(item => (
            <li onClick={() => setIsOpen(false)} key={item.name}>
              <Link
                className="p-4 whitespace-nowrap block font-medium"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
