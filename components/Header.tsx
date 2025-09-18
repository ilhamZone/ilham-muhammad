"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { ThemeToggler } from "./ThemeToggler";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Adding buffer zone to prevent twitch
    const threshold = 5; // Buffer zone 5px
    let lastScrollY = 0;

    const scrollHandler = () => {
      const currentScrollY = window.scrollY;

      // Only change state if scroll difference exceeds threshold
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        // Use requestAnimationFrame for throttling
        requestAnimationFrame(() => {
          // Add hysteresis to prevent twitch around value 50
          if (currentScrollY > 60) {
            setHeader(true);
          } else if (currentScrollY < 40) {
            setHeader(false);
          }

          lastScrollY = currentScrollY;
        });
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 transition-all",
        header
          ? "py-4 bg-white shadow-md dark:bg-accent bg-"
          : "py-6 dark:bg-transparent",
        pathname === "/" && "bg-[#fef9f5]"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden lg:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
