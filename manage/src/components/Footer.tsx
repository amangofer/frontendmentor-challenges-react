import Logo from "../assets/images/logo.svg?react";
import FacebookIcon from "../assets/images/icon-facebook.svg?react";
import YouTubeIcon from "../assets/images/icon-youtube.svg?react";
import TwitterIcon from "../assets/images/icon-twitter.svg?react";
import PinterestIcon from "../assets/images/icon-pinterest.svg?react";
import InstagramIcon from "../assets/images/icon-instagram.svg?react";

const footerLinks = {
  product: [
    { name: "Home", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Products", href: "#" },
    { name: "About Us", href: "#" },
  ],
  resources: [
    { name: "Careers", href: "#" },
    { name: "Community", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: FacebookIcon },
    { name: "YouTube", href: "#", icon: YouTubeIcon },
    { name: "Twitter", href: "#", icon: TwitterIcon },
    { name: "Pinterest", href: "#", icon: PinterestIcon },
    { name: "Instagram", href: "#", icon: InstagramIcon },
  ],
};

export function Footer() {
  return (
    <footer className="w-full px-4 lg:mx-0 py-10 bg-neutral-gray-950 text-neutral-gray-50">
      <div className="container mx-auto py-4 flex flex-col justify-between md:flex-row-reverse">
        <div className="flex flex-col justify-between">
          <div className="py-4 flex gap-4 justify-between items-center text-primary-blue-950">
            <input
              className="bg-white px-4 py-2 rounded-full"
              type="email"
              placeholder="Updates in your inbox…"
            />
            <a
              href="#"
              className="px-6 py-2 rounded-full bg-primary-orange-400 text-neutral-gray-50"
            >
              Go
            </a>
          </div>
          <p className="hidden md:block my-4 text-sm text-center text-neutral-gray-50/50">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
        <div className="w-xs md:w-md mx-auto p-4 flex justify-between">
          <div>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-orange-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-orange-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-col-reverse gap-8 justify-between items-center">
          <div className="">
            <ul className="flex gap-4">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-orange-400">
                    <link.icon className="size-8 lg:size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Logo className="md:self-start " />
        </div>
        <p className="md:hidden my-4 text-sm text-center text-neutral-gray-50/50">
          Copyright 2020. All Rights Reserved
        </p>
      </div>

      <div className="text-sm text-center text-neutral-gray-50/50">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-green-800 font-semibold hover:text-primary-orange-400"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/amangofer"
          target="_blank"
          className="text-primary-green-800 font-semibold hover:text-primary-orange-400"
        >
          Amanuel A. Haile
        </a>
        .
      </div>
    </footer>
  );
}
