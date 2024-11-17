import Image from "next/image";
import GridItem from "../GridItem";

const ClientCollaboration = () => {
  return (
    <GridItem className="bg-[url('/b1.svg')] md:col-span-6 md:row-span-4 lg:col-span-3">
      <div className="absolute left-0 right-0 top-0 md:max-lg:-top-[35%]">
        <Image
          width={1}
          height={1}
          src="/b1.svg"
          alt="MacBook"
          className="w-full object-cover object-center sm:max-lg:translate-y-[-10%]"
        />
      </div>

      <div className="relative flex min-h-40 flex-col items-center justify-end text-balance p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10">
        <div className="max-w-96 font-sans text-lg font-bold lg:text-xl">
          I prioritize client collaboration, fostering open communication
        </div>
      </div>
    </GridItem>
  );
};

export default ClientCollaboration;