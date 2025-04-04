import {
  PiLinkedinLogo,
  PiInstagramLogo,
  PiGithubLogo,
  PiEnvelope,
} from "react-icons/pi";
import { PiArrowUpRightBold } from "react-icons/pi";

import type { ReactNode } from "react";

import backgroundImg from "../../assets/Background_Contacts.png";
import { Form } from "@/components/form";

interface SocialLink {
  id: number;
  name: string;
  icon: ReactNode;
  url: string;
}

export function Contact() {
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <PiLinkedinLogo className="text-xl" />,
      url: "https://www.linkedin.com",
    },
    {
      id: 2,
      name: "Instagram",
      icon: <PiInstagramLogo className="text-xl" />,
      url: "https://www.instagram.com",
    },
    {
      id: 3,
      name: "GitHub",
      icon: <PiGithubLogo className="text-xl" />,
      url: "https://github.com",
    },
    {
      id: 4,
      name: "E-mail",
      icon: <PiEnvelope className="text-xl" />,
      url: "https://github.com",
    },
  ];

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-8">
        <p className="text-purple-500 mb-2 font-['Inconsolata'] text-xl">
          Contato
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 font-['Asap']">
          Gostou do meu trabalho?
        </h2>
        <p className="text-gray-400 mb-8 text-base max-md:text-sm">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {socialLinks.map((link) => (
          <button
            key={link.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors w-full"
          >
            <div className="flex items-center gap-3">
              {link.icon}
              <span>{link.name}</span>
            </div>
            <a href={link.url} target="_blank">
              <PiArrowUpRightBold className="text-blue-400" />
            </a>
          </button>
        ))}
      </div>
      <div className="max-w-2xl mx-auto mt-10">
        <Form />
      </div>
    </section>
  );
}
