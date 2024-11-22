"use client";

import Image from "next/image";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import useSectionInView from "@/hooks/useSectionInView";
import useScreenSize from "@/hooks/useScreenSize";

const Footer = () => {
  const screen = useScreenSize();
  // const threshold =
  //   screen == "xs" || screen == "sm" ? 0.7 : screen == "md" ? 0.4 : 0.5;
  const { ref } = useSectionInView("Contact", 0.4);
  return (
    <footer
      className="md:px-15 relative mt-20 w-full scroll-mt-24 px-12 pb-10 md:scroll-mt-28 lg:px-32"
      id="contact"
      ref={ref}
    >
      <div className="absolute top-0 h-full w-full">
        <Image
          src="/ui/footerGrid.svg"
          alt="grid"
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading text-balance">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="mb-9 mt-5 text-balance text-center text-white-200">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:nairamm99@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex items-center justify-between gap-2 md:flex-row">
        <p className="text-sm font-light md:font-normal">
          Copyright © 2024 Naira Mokhtar
        </p>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {socialMedia.map((info) => (
            <a
              target="__blank"
              href={info.link}
              key={info.img}
              className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
            >
              <Image
                src={`/ui/${info.img}`}
                alt="icons"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
