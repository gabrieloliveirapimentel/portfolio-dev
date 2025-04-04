interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg p-4 gap-4 bg-[#292C34]">
      <div className="bg-gray-900 rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg font-['Asap']">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-1.5">{project.description}</p>
      </div>
    </div>
  );
}
