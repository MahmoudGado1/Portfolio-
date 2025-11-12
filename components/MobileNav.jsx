"use client"
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open navigation"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <DialogTitle className="mt-16 mb-12 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            Mahmoud<span className="text-accent">.</span>
          </Link>
        </DialogTitle>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setOpen(false)} 
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } capitalize text-xl hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
