import type { ReactNode } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg text-['Asap']">
      <div className="flex justify-start mb-4">{service.icon}</div>
      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
      <p className="text-gray-300 text-sm">{service.description}</p>
    </div>
  );
}
