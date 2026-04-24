"use client";

import Logo from "@/public/Logo";
import HamburgerMenu from "@/public/HamburgerMenu";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const NavItems = [
  { href: "/meals", name: "Meals" },
  { href: "/discover", name: "Discover" },
  { href: "/dashboard", name: "Dashboard" },
  { href: "/ingredients", name: "Ingredients" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuth();

  return (
    <header className="bg-white sticky w-full flex align-center justify-between p-5">
      <button onClick={() => setIsOpen(false)}>
        <Logo />
      </button>

      <button
        className="lg:static lg:hidden fixed top-5 right-5 z-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HamburgerMenu isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="bg-black/20 lg:hidden lg:opacity-0 fixed inset-0 w-full h-screen"></div>
      )}
      <nav
        data-isopen={isOpen}
        className="lg:flex lg:align-center lg:translate-x-0 lg:bg-transparent lg:static lg:w-fit fixed block bg-white z-10 translate-x-full right-0 top-0 w-full sm:w-110 data-[isopen=true]:translate-x-0 h-full transistion-all ease-in-out duration-300"
      >
        <button className="lg:hidden p-5" onClick={() => setIsOpen(false)}>
          <Logo />
        </button>
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
        {!user && (
          <div className="flex md:flex-row md:align-center">
            <Link className="secondary-btn" href={"/signup"}>
              Sign up
            </Link>
            <Link className="primary-btn" href={"/signin"}>
              Sign in
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
