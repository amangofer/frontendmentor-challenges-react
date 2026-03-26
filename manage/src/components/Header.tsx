import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import { useState } from "react";

const navLinks = [
  { name: "Pricing", href: "#pricing" },
  { name: "Product", href: "#product" },
  { name: "About Us", href: "#about" },
  { name: "Careers", href: "#careers" },
  { name: "Community", href: "#community" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean | null>(null);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="relative ">
      <nav className="container mx-auto p-6 flex justify-between items-center">
        <a href="/" aria-label="Manage Homepage">
          <img src={Logo} alt="" />
        </a>

        {/* Desktop Menu  */}
        <div className="flex">
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-primary-blue-950 font-medium hover:opacity-75 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="hidden lg:inline-flex bg-primary-orange-400 hover:opacity-75 text-neutral-gray-50 font-bold py-3 px-6 rounded-full transition-colors shadow-lg"
        >
          Get Started
        </a>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src={menuOpen ? CloseIcon : MenuIcon} alt="" />
        </button>
      </nav>

      {/* Mobile Menu  */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-neutral-gray-50 shadow-lg mx-6 rounded-lg py-6 ${menuOpen === null ? "hidden" : ""} ${menuOpen ? "animate-fade-in" : "animate-fade-out"}`}
      >
        <div className="flex flex-col items-center gap-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-primary-blue-950 font-medium py-2 hover:opacity-75 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-2 bg-primary-orange-400 hover:opacity-75 text-neutral-gray-50 font-bold py-3 px-6 rounded-full transition-colors shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
