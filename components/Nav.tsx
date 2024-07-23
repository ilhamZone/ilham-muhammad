"use client";

import Link from "next/link";
import links from "@/utils/links";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavProps = {
  containerStyles: string;
  linkStyles?: string;
  underlineStyles?: string;
  onClick?: () => void;
};

const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onClick,
}: NavProps) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${
            link.path === path && "text-primary lg:text-foreground"
          } ${linkStyles}`}
          onClick={onClick}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
