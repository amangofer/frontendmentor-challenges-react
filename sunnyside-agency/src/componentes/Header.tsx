import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-hamburger.svg";
import ArrowIcon from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const navItems = [
    { id: 1, name: "About", href: "#" },
    { id: 2, name: "Services", href: "#" },
    { id: 3, name: "Projects", href: "#" },
  ];

  return (
    <header className="w-full relative h-full px-6 md:px-12 py-8 bg-header-mobile md:bg-header-desktop bg-cover bg-no-repeat bg-center">
      <div className="flex justify-between">
        <div>
          <a href="#">
            <img
              src={Logo}
              alt="Sunnyside Logo"
              className="brightness-0 invert"
            />
          </a>
        </div>
        <div className="md:hidden">
          <img
            src={MenuIcon}
            alt="Menu Icon"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex gap-8 items-center">
            {navItems.map((navItem) => {
              return (
                <li
                  key={navItem.id}
                  className="text-md font-semibold text-neutral-white"
                >
                  <a href={navItem.href}>{navItem.name}</a>
                </li>
              );
            })}
            <button
              type="button"
              className="px-6 py-4 bg-neutral-white rounded-full text-sm font-fraunces font-semibold uppercase cursor-pointer hover:text-neutral-white hover:bg-sky-300"
            >
              Content
            </button>
          </ul>
        </div>
      </div>
      <nav
        className={`${isOpen ? "block" : "hidden"} absolute inset-x-6 top-24 z-50 md:hidden`}
      >
        <ul className="w-full py-8 text-md flex flex-col gap-6 items-center bg-neutral-white before:content-[''] before:border-16 before:absolute before:right-0 before:top-1 before:transform before:-translate-y-full before:border-transparent before:border-b-neutral-white before:border-r-neutral-white">
          {navItems.map((navItem) => {
            return (
              <li
                key={navItem.id}
                className="font-semibold text-neutral-grey-550"
              >
                <a href={navItem.href}>{navItem.name}</a>
              </li>
            );
          })}
          <button
            type="button"
            className="px-8 py-3 bg-primary-yellow-500 rounded-full font-fraunces font-semibold uppercase"
          >
            Content
          </button>
        </ul>
      </nav>
      <div className="w-full mt-28 flex flex-col gap-16 items-center">
        <h1 className="text-[clamp(3rem,5vw,5rem)] text-center font-fraunces font-bold uppercase text-neutral-white">
          We Are Creatives
        </h1>
        <img src={ArrowIcon} alt="Down Arrow Icon" />
      </div>
    </header>
  );
}
