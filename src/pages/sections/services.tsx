import { PiDevices, PiDatabase, PiInfinity } from "react-icons/pi";
import type { ReactNode } from "react";
import { ServiceCard } from "../../components/service-card";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Websites e Aplicativos",
      description: "Desenvolvimento de interfaces",
      icon: <PiDevices className="text-purple-500" size={44} />,
    },
    {
      id: 2,
      title: "API e banco de dados",
      description: "Criação de serviços de sistema",
      icon: <PiDatabase className="text-yellow-500" size={44} />,
    },
    {
      id: 3,
      title: "DevOps",
      description: "Gestão e infraestrutura de aplicação",
      icon: <PiInfinity className="text-lime-500" size={44} />,
    },
  ];

  return (
    <section className="bg-[#0D0E11] py-20 space-y-4 sm:px-12 max-sm:px-6 ">
      <div className="max-w-[1168px] mx-auto">
        <div className="text-center mb-12 ">
          <p className="text-rose-500 mb-2 font-['Inconsolata'] text-xl">
            Meus serviços
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-['Asap']">
            Como posso ajudar o seu negócio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
