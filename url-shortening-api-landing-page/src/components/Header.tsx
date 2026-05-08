import Logo from "../assets/images/logo.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navLinks = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Resoureces", href: "#resoureces" },
];

const authLinks = [
  { title: "Login", href: "#login", type: "link" },
  { title: "Sign Up", href: "#sign-up", type: "btn" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="text-base">
      <div className="container relative px-4 md:mx-auto my-8 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <a href="/">
            <Logo className="fill-[#34313D]" />
          </a>
          <ul className="hidden ml-8 md:flex gap-8 items-center">
            {navLinks.map((navLink) => (
              <li onClick={toggleMenu}>
                <a
                  href={navLink.href}
                  className="font-semibold text-neutral-gray-500 hover:text-neutral-gray-950"
                >
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex gap-8 items-center">
            {authLinks.map((authLink) => (
              <li onClick={toggleMenu}>
                <a
                  href={authLink.href}
                  className={`${authLink.type == "btn" ? "bg-primary-blue-400 text-white rounded-full py-2 px-6 hover:bg-primary-blue-400/75" : "text-neutral-gray-500 hover:text-neutral-gray-950"} font-semibold`}
                >
                  {authLink.title}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={toggleMenu} className="md:hidden">
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        </div>
        {/* Mobile Menu*/}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} absolute mt-6 top-full left-4 right-4 z-50 rounded-lg bg-primary-purple-950 text-white`}
        >
          <div className="flex flex-col w-full text-center py-8 font-semibold gap-4">
            <ul className="space-y-8 border-b border-neutral-gray-500 mx-6 pb-8">
              {navLinks.map((navLink) => (
                <li onClick={toggleMenu}>
                  <a href={navLink.href}>{navLink.title}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-8 mx-6">
              {authLinks.map((authLink) => (
                <li onClick={toggleMenu}>
                  <a
                    href={authLink.href}
                    className={`${authLink.type == "btn" ? "bg-primary-blue-400 block rounded-full py-2" : ""} hover:bg-primary-blue-400/75`}
                  >
                    {authLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
