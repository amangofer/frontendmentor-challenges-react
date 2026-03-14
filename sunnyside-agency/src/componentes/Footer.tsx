import Logo from "../assets/images/logo.svg";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import TweitterIcon from "../assets/images/icon-twitter.svg";

const navItems = [
  { id: 1, name: "About", href: "#" },
  { id: 2, name: "Services", href: "#" },
  { id: 3, name: "Projects", href: "#" },
];

const socialLinks = [
  { id: 1, name: "Instagram", href: "#", icon: FacebookIcon },
  { id: 2, name: "Facebook", href: "#", icon: InstagramIcon },
  { id: 3, name: "Pintrest", href: "#", icon: PinterestIcon },
  { id: 4, name: "twetter", href: "#", icon: TweitterIcon },
];

export function Footer() {
  return (
    <footer className="pt-8 bg-[#90d4c5] flex gap-8 flex-col items-center">
      <a href="#">
        <img src={Logo} alt="Sunnyside Logo" className="w-40 brightness-80" />
      </a>
      <nav className="w-xs text-lg font-semibold text-primary-green-500">
        <ul className="flex gap-4 justify-evenly">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <a href={navItem.href} className="hover:text-neutral-white">
                  {navItem.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <ul className="flex gap-6">
          {socialLinks.map((socialLink) => {
            return (
              <li key={socialLink.id}>
                <a href={socialLink.href}>
                  <img
                    src={socialLink.icon}
                    className="hover:brightness-0 hover:invert"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-2 tracking-wide text-sm text-center text-primary-green-500 md:text-base">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-green-800 font-semibold hover:text-neutral-white"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/amangofer"
          target="_blank"
          className="text-primary-green-800 font-semibold hover:text-neutral-white"
        >
          Amanuel Haile
        </a>
        .
      </div>
    </footer>
  );
}
