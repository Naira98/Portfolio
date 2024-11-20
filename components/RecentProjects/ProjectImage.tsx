import Image from "next/image";

interface ProjectImagePropsType {
  img: string;
  title: string;
}

const ProjectImage = ({ img, title }: ProjectImagePropsType) => {
  return (
    <div className="relative mb-5 flex h-[14rem] w-full items-center justify-center overflow-hidden">
      {/* Background image div */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <Image src="/ui/gradientBg.png" alt="bg-image" fill />
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
  );
};

export default ProjectImage;
