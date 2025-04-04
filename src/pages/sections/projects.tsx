import { ProjectCard } from "../../components/project-card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

import imgProject1 from "../../assets/Thumbnail_Project-01.png";
import imgProject2 from "../../assets/Thumbnail_Project-02.png";
import imgProject3 from "../../assets/Thumbnail_Project-03.png";
import imgProject4 from "../../assets/Thumbnail_Project-04.png";
import imgProject5 from "../../assets/Thumbnail_Project-05.png";
import imgProject6 from "../../assets/Thumbnail_Project-06.png";

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Travelgram",
      description:
        "Rede social onde as pessoas mostram os registros de suas viagens pelo mundo",
      image: imgProject1,
    },
    {
      id: 2,
      title: "Tech News",
      description:
        "Homepage de um portal de notícias sobre a área de tecnologia",
      image: imgProject2,
    },
    {
      id: 3,
      title: "Página de receita",
      description: "Página com o passo a passo de uma receita para cupcakes",
      image: imgProject3,
    },
    {
      id: 4,
      title: "Zingen",
      description:
        "Landing Page completa e responsiva de um aplicativo de karaokê",
      image: imgProject4,
    },
    {
      id: 5,
      title: "Refund",
      description: "Um sistema para pedido e acompanhamento de reembolsos",
      image: imgProject5,
    },
    {
      id: 6,
      title: "Página de turismo",
      description:
        "Página com as principais informações para quem quer viajar para Brasil",
      image: imgProject6,
    },
  ];

  return (
    <section className="py-20 max-w-[1168px] mx-auto space-y-4 sm:px-12 max-sm:px-6 ">
      <div className="text-center mb-12">
        <p className="text-rose-500 mb-2 font-['Inconsolata'] text-xl">
          Meu trabalho
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 font-['Asap']">
          Veja meus projetos em destaque
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
