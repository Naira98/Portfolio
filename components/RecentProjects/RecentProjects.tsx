import Image from "next/image";
import { projects } from "@/data/index";
import { AnimatedTooltip } from "./AnimatedTooltip";
import SocialLinks from "./SocialLink";

const RecentProjects = () => {
  return (
    <div className="md:px-15 mt-20 px-12 lg:px-32">
      <h1 className="heading mb-5 text-balance">
        A small selection&nbsp;of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        {/* Maping on projects */}
        {projects.map(
          ({ id, title, des, iconLists, img, github, video, website }) => (
            /* All projects */
            <div
              key={title}
              className="rotated-image-container relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 rounded-2xl border bg-white/20 decoration-clone p-px transition duration-500 hover:bg-purple"
            >
              {/* Single Project */}
              <div className="flex h-[25rem] w-auto flex-col items-center justify-between rounded-[inherit] bg-black-100 p-4 text-white">
                {/* Div for 2 images */}
                <div className="relative mb-5 flex h-[14rem] w-full items-center justify-center overflow-hidden">
                  {/* Background image div */}
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image src="/bg.png" alt="bg-image" fill />
                  </div>

                  {/* Project image */}
                  <Image
                    src={img}
                    alt={title}
                    width={450}
                    height={250}
                    className="rotated-image absolute top-0 rounded-lg"
                  />
                </div>

                <div className="flex flex-col items-start">
                  <h1 className="line-clamp-1 font-bold md:text-xl">{title}</h1>
                  <p className="line-clamp-2 text-left text-sm font-light md:text-balance">
                    {des}
                  </p>
                </div>

                <div className="mt-3 flex w-full items-center justify-between">
                  <div className="flex">
                    {/* Social Meida project */}
                    {id === 3 ? (
                      <>
                        <AnimatedTooltip items={iconLists.slice(0, 3)} />
                        <div className="lg:w-4" />
                        <AnimatedTooltip items={iconLists.slice(4, 9)} />
                        <div className="lg:w-4" />
                        <AnimatedTooltip items={iconLists.slice(10, 12)} />
                      </>
                    ) : (
                      <AnimatedTooltip items={iconLists} />
                    )}
                  </div>
                  <div>
                    <SocialLinks
                      github={github}
                      website={website}
                      video={video}
                    />
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
