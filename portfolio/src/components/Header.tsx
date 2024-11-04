import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  // prettier-ignore
  const { t, i18n: { changeLanguage, language }} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const { theme, setTheme } = useTheme();

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    changeLanguage(lang);
  };

  const navLinks = [
    {
      text: t("home"),
      href: "/"
    },
    {
      text: t("projects"),
      href: "/projects"
    },
    {
      text: t("contact"),
      href: "/contact"
    }
  ];

  const languages = [
    {
      id: "en",
      text: "English",
      icon: "circle-flags:us"
    },
    {
      id: "de",
      text: "Deutsch",
      icon: "circle-flags:de"
    }
  ];

  return (
    <header className="sticky top-0 z-50 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between w-content mx-auto">
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map((nav, i) => (
            <li key={i} className="link">
              <a href={nav.href}>{nav.text}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <NavigationMenu delayDuration={0} skipDelayDuration={0}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Icon className="size-4" icon="mdi:language" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {languages.map((lang, i) => (
                    <Button
                      key={i}
                      className={"w-full justify-start " + (currentLanguage === lang.id ? "underline" : "")}
                      variant="ghost"
                      onClick={() => setLanguage(lang.id)}>
                      <Icon icon={lang.icon} />
                      {lang.text}
                    </Button>
                  ))}
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
