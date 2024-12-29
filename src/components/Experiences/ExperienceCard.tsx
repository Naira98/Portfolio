import { ExperiencesType } from "@/data/types";
import { formatDateRange } from "@/lib/formatDates";

const ExperienceCard = ({
  experience,
}: {
  experience: ExperiencesType[number];
}) => {
  const { startDate, endDate, range } = formatDateRange(
    experience.startDate,
    experience.endDate,
  );
  return (
    <div className="flex h-auto w-auto cursor-default flex-col rounded-2xl border border-white/20 bg-black-100 p-6 transition-colors duration-300 hover:border-white/30">
      <h1 className="text-2xl font-bold">{experience.title}</h1>
      <h2 className="mb-2 text-sm text-white/80">
        {startDate} - {endDate} • {range}
      </h2>
      <h2>
        <span className="text-purple">{experience.company}</span> •{" "}
        <span>
          {experience.employmentType} ({experience.locationType})
        </span>
      </h2>
      <ul className="list-disc">
        {experience.description?.map((des, i) => (
          <li className="text-balance text-white/80" key={i}>
            {des}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
