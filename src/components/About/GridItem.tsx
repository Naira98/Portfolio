import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const GridItem = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "group/bento to-[rgba(12,14,35,1) ] relative row-span-1 flex flex-col items-start justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#0b0e23] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default GridItem;
