import GridItem from "../GridItem";

const ClientCollaboration = () => {
  return (
    <GridItem className="bg-[url('/b1.svg')] md:col-span-6 md:row-span-4 lg:col-span-3">
      <div className="absolute right-0 top-0 md:bottom-[50%]">
        <img
          src="/b1.svg"
          alt="MacBook"
          className="object-cover object-center"
        />
      </div>

      <div className="relative flex min-h-40 flex-col items-center justify-end p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10">
        <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-xl">
          I prioritize client collaboration, fostering open communication
        </div>
      </div>
    </GridItem>
  );
};

export default ClientCollaboration;
