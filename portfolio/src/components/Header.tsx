import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  // prettier-ignore
  const { t, i18n: { changeLanguage, language }} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const { theme, setTheme } = useTheme();

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  const navLinks = [
    {
      name: t("home"),
      href: "/",
    },
    {
      name: t("projects"),
      href: "/projects",
    },
    {
      name: t("contact"),
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between w-content mx-auto">
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map((nav, id) => (
            <li key={id} className="link">
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Icon className="size-4" icon="prime:language" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Button variant="ghost" onClick={handleChangeLanguage}>
                    English
                  </Button>
                  <Button variant="ghost" onClick={handleChangeLanguage}>
                    Deutsch
                  </Button>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="ghost" className="" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Icon className="size-4" icon={theme === "dark" ? "radix-icons:moon" : "radix-icons:sun"} />
          </Button>
        </div>
      </nav>
    </header>
  );
}
