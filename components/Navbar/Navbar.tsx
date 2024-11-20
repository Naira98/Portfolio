"use client";

import Image from "next/image";
import HamburgerButton from "./HambugerButton";
import { SquigglyUnderline } from "./SquigglyUnderline";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 150 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <nav
      ref={ref}
      className={clsx(
        "fixed flex h-20 w-full transform items-center justify-between bg-gradient-to-b from-black-100 to-transparent px-6 duration-300 md:px-14",
        {
          "bg-black opacity-90": isScrolled,
        },
      )}
    >
      <div className="relative h-24 w-64">
        <Image
          src="/ui/logo.webp"
          alt="Naira Mokhtar Logo"
          fill
          className="absolute object-contain"
        />
      </div>

      <div className="md:hidden">
        <HamburgerButton />
      </div>

      <div className="hidden md:block">
        <SquigglyUnderline />
      </div>
    </nav>
  );
};

export default Navbar;
