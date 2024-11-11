import React from "react";

interface Props {
  stack: string[];
  position: "above" | "below";
}

const Stack = ({ stack, position }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {position === "above" && <EmptyCard />}

      {stack.map((item: string, i: number) => (
        <span
          key={i}
          className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50"
        >
          {item}
        </span>
      ))}
      {position === "below" && <EmptyCard />}
    </div>
  );
};

function EmptyCard() {
  return (
    <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center"></span>
  );
}

export default Stack;
