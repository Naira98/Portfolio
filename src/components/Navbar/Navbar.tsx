import { useEffect, useRef, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { SquigglyUnderline } from "./SquigglyUnderline";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <nav
      ref={ref}
      className={cn(
        "fixed flex h-20 w-full transform items-center justify-between bg-gradient-to-b from-black-100 to-transparent px-4 duration-500 md:px-14",
        {
          "from-black from-70% opacity-90": isScrolled,
        },
      )}
    >
      <div className="relative h-8 w-64">
        <img
          src="/logo.webp"
          alt="Naira Mokhtar Logo"
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
