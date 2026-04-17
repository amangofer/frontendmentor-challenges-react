import LogoLight from "../assets/images/logo-dark.svg?react";
import MenuIcon from "../assets/images/icon-hamburger.svg?react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
  { name: "Careers", href: "#careers" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container relative p-4 md:mx-auto flex justify-between items-center">
        <div>
          <a href="/">
            <LogoLight />
          </a>
        </div>
        <button onClick={toggleMenu} className="md:hidden cursor-pointer">
          <MenuIcon />
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden w-full absolute left-0 top-20">
            <ul className="w-xs mx-auto py-6 flex flex-col gap-4 items-center bg-white rounded-md">
              {navLinks.map((navLink) => (
                <li key="navLink.name">
                  <a
                    href={navLink.href}
                    className="text-primary-blue font-medium"
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className="hidden md:block ">
          <ul className="w-full py-3 flex gap-8 justify-between">
            {navLinks.map((navLink) => (
              <li key="navLink.name" className="h-full">
                <a
                  href={navLink.href}
                  className="text-neutral-gray-600 inline-block font-medium relative hover:text-primary-blue after:content-[''] after:w-full after:absolute after:-bottom-7 after:left-0 after:border-b-4 after:border-transparent hover:after:border-primary-green"
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden lg:block px-8 py-3 rounded-full font-semibold text-white bg-linear-to-tr from-primary-cyan to-primary-green hover:opacity-85 cursor-pointer">
          Request Invite
        </button>
      </div>
    </header>
  );
}
