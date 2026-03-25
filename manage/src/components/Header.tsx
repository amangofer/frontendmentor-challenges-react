import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Pricing", href: "#" },
  { id: 2, name: "Product", href: "#" },
  { id: 3, name: "About Us", href: "#" },
  { id: 4, name: "Careers", href: "#" },
  { id: 5, name: "Community", href: "#" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="relative p-4 flex justify-between items-center">
      <a href="/" aria-label="Manage Homepage">
        <img src={Logo} alt="" />
      </a>

      {/* Mobile Menu  */}
      <div className="md:hidden flex flex-col justify-between items-center">
        <button onClick={toggleMenu}>
          <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menu Icon" />
        </button>
        <nav
          className={`${menuOpen ? "block" : "hidden"} bg-neutral-gray-50 p-4 flex flex-col gap-4 justify-center items-center absolute w-xs top-15 left-1/2 transform -translate-x-1/2 rounded shadow-lg`}
        >
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id} className="list-none font-bold">
                <a href={navItem.href}>{navItem.name}</a>
              </li>
            );
          })}
        </nav>
      </div>

      {/* Desktop Menu  */}
      <nav className="hidden px-4 w-lg md:flex gap-4 justify-between items-center">
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.id}
              className="list-none font-semibold hover:opacity-[.5]"
            >
              <a href={navItem.href}>{navItem.name}</a>
            </li>
          );
        })}
      </nav>
      <button className="hidden lg:block bg-primary-orange-400 text-neutral-gray-50 px-6 py-3 font-semibold rounded-full cursor-pointer hover:opacity-[.75]">
        Get Started
      </button>
    </header>
  );
}
