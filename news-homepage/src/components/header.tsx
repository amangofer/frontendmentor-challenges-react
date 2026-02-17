import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/assets/images/logo.svg";
import MenuIcon from "@/assets/images/icon-menu.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const navItems = [
  { label: "Home", href: "#" },
  { label: "New", href: "#" },
  { label: "Popular", href: "#" },
  { label: "Trending", href: "#" },
  { label: "Categories", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full my-8">
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <div>
          <img src={Logo} />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems.map((navItem) => {
              return (
                <NavigationMenuItem key={navItem.label} className="">
                  <NavigationMenuLink className="text-dark-grayish-blue hover:text-soft-red hover:bg-transparent">
                    <a href={navItem.href}>{navItem.label}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <img src={MenuIcon} className="size-7" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-100">
              <NavigationMenu className="md:hidden block">
                <NavigationMenuList className="px-4 mt-34 flex flex-col items-start text-xl font-semibold">
                  {navItems.map((navItem) => {
                    return (
                      <NavigationMenuItem key={navItem.label} className="">
                        <NavigationMenuLink className="text-dark-grayish-blue hover:text-soft-red hover:bg-transparent">
                          <a href={navItem.href}>{navItem.label}</a>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
