import LogoLight from "../assets/images/logo-light.svg?react";
import FacbookIcon from "../assets/images/icon-facebook.svg";
import YouTubeIcon from "../assets/images/icon-youtube.svg";
import XIcon from "../assets/images/icon-twitter.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

const socialLinkes = [
  { link: "Facebook", href: "https://facebook.com", icon: FacbookIcon },
  { link: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
  { link: "X", href: "https://x.com", icon: XIcon },
  { link: "Pinterest", href: "https://pinterest.com", icon: PinterestIcon },
  { link: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
];

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
  { name: "Careers", href: "#careers" },
  { name: "Support", href: "#support" },
  { name: "Privacy Policy", href: "#privacy-policy" },
];

export function Footer() {
  return (
    <footer className="bg-primary-blue px-4 py-10">
      <div className="container my-4 mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-center text-neutral-gray-100">
        <div className="w-1/2 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center gap-8">
            <LogoLight className="mb-6" />
            <div className="mb-2 flex gap-4 justify-center">
              {socialLinkes.map((social) => (
                <a key={social.link} href={social.href}>
                  <img src={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <nav className="md:h-30 w-full my-4 flex flex-col flex-wrap gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold hover:text-primary-green"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <button className="px-8 py-3 rounded-full font-semibold text-white bg-linear-to-tr from-primary-cyan to-primary-green hover:opacity-85 cursor-pointer">
            Request Invite
          </button>
          <span className="block my-4 text-neutral-gray-600">
            © Digitalbank. All Rights Reserved
          </span>
        </div>
      </div>
      <div className="text-sm text-center text-neutral-gray-600">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-green-800 font-semibold hover:text-primary-green"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/amangofer"
          target="_blank"
          className="text-primary-green-800 font-semibold hover:text-primary-green"
        >
          Amanuel Haile
        </a>
        .
      </div>
    </footer>
  );
}
