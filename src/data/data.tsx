import { ReactNode } from "react";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  PiDatabase,
  PiInfinity,
  PiDevices,
  PiLinkedinLogo,
  PiInstagramLogo,
  PiEnvelope,
  PiGithubLogo,
} from "react-icons/pi";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface Badge {
  id: number;
  label: string;
  icon: ReactNode;
}

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: ReactNode;
}

export const services: Service[] = [
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

export const badges: Badge[] = [
  {
    id: 1,
    label: "GitHub",
    icon: <FaGithub className="fill-gray-300" />,
  },
  {
    id: 2,
    label: "HTML",
    icon: <FaHtml5 className="fill-rose-400" />,
  },
  {
    id: 3,
    label: "CSS",
    icon: <FaCss3Alt className="fill-blue-400" />,
  },
  {
    id: 4,
    label: "JavaScript",
    icon: <FaJs className="fill-yellow-500" />,
  },
  {
    id: 5,
    label: "React",
    icon: <FaReact className="fill-cyan-500" />,
  },
  {
    id: 6,
    label: "Node.js",
    icon: <FaNodeJs className="fill-lime-500" />,
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <PiLinkedinLogo className="text-xl " />,
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: <PiInstagramLogo className="text-xl " />,
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com",
    icon: <PiGithubLogo className="text-xl " />,
  },
  {
    id: 4,
    name: "E-mail",
    url: "mailto:email@email.com",
    icon: <PiEnvelope className="text-xl " />,
  },
];
