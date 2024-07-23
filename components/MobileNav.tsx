"use client";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full py-8 items-center">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col gap-y-6 items-center"
              linkStyles="text-2xl transition-all relative"
              onClick={() => setOpen(false)}
            />
          </div>

          <Socials className="flex gap-x-4" iconClassName="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
