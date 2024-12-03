import { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "../BackgroundGradientAnimation";
import GridItem from "../GridItem";
import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

const CopyMail = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText("nairamm99@gmail.com");
    setCopied(true);
  };
  return (
    <GridItem className="flex items-center justify-center md:col-span-3 md:row-span-1 lg:col-span-2">
      <div className="flex h-full items-center justify-center">
        <BackgroundGradientAnimation />
        <div className="relative flex min-h-40 w-full flex-col items-center justify-center text-balance p-5 text-center md:h-full md:max-w-full lg:p-10">
          <div className="font-sans text-lg font-bold lg:text-xl">
            Do you want to start a project together?
          </div>

          <div className="mt-4 min-w-full">
            <div className="pointer-events-none absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              {copied && (
                <Lottie
                  loop={false}
                  animationData={animationData}
                  className="h-[400px] w-[400px]"
                />
              )}
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={copied ? <FaCheck /> : <IoCopyOutline />}
              position="left"
              onClick={handleCopy}
            />
          </div>
        </div>
      </div>
    </GridItem>
  );
};

export default CopyMail;
