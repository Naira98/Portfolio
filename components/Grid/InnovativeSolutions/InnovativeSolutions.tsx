// {
//     id: 5,
//     title: "Currently building a JS Animation library",
//     description: "The Inside Scoop",
//     className: "md:col-span-3 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//   },

import GridItem from "../GridItem";

const InnovativeSolutions = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-2">
      <div className="absolute left-20 top-5 h-full w-full md:left-0 md:top-0">
        <img
          src="/b5.svg"
          alt="code"
          className="w-60object-cover absolute bottom-0 right-0 object-center md:w-96"
        />
      </div>
      <div className="absolute -bottom-5 right-0 w-full opacity-80">
        <img
          src="/grid.svg"
          alt="grid"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex min-h-40 flex-col items-center justify-start p-5 transition duration-200 group-hover/bento:translate-x-2 lg:p-10">
        <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-xl">
          Innovative Problem Solving for Web Excellence
        </div>
      </div>
    </GridItem>
  );
};

export default InnovativeSolutions;
