"use client";

import Logo from "@/public/Logo";
import HamburgerMenu from "@/public/HamburgerMenu";
import { useState } from "react";
import Link from "next/link";

const NavItems = [
  { href: "/dashboard", name: "Dashboard" },
  { href: "/discover", name: "Discover" },
  { href: "/meals", name: "Meals" },
  { href: "/ingredients", name: "Ingredients" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky w-full flex align-center justify-between px-4 gap-4">
      <Logo />

      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenu isOpen={isOpen} />
      </button>
      <nav
        data-isopen={isOpen}
        className="lg:flex-row lg:align-center lg:opacity-100 lg:bg-transparent lg:static lg:w-full lg:translate-x-0 fixed flex flex-col bg-white z-100 opacity-0 translate-x-full inset-0 top-16 w-full data-[isopen=true]:translate-x-0 data-[isopen=true]:opacity-100 transition-opacity ease-in-out duration-300"
      >
        <ul className="flex flex-col align-center lg:flex-row">
          {NavItems.map(item => (
            <li onClick={() => setIsOpen(false)} key={item.name}>
              <Link
                className="p-4 whitespace-nowrap text-zinc-900 hover:text-zinc-700 block font-semibold"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex-row lg:p-0 flex p-4 gap-4 flex-col justify-end align-center flex-1">
          <Link
            className="p-4 whitespace-nowrap text-zinc-900 hover:text-zinc-700 block font-semibold"
            href={"/signup"}
          >
            Sign up
          </Link>
          <Link className="primary-btn" href={"/signin"}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
