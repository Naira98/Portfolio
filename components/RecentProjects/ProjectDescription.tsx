import clsx from "clsx";

interface ProjectDescriptionPropsType {
  title: string;
  des: string;
  isVideoModal?: boolean;
}

const ProjectDescription = ({
  title,
  des,
  isVideoModal = false,
}: ProjectDescriptionPropsType) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="line-clamp-1 font-bold md:text-xl">{title}</h1>
      <p
        className={clsx("line-clamp-2 text-left text-sm font-light", {
          "line-clamp-none": isVideoModal,
        })}
      >
        {des}
      </p>
    </div>
  );
};

export default ProjectDescription;
