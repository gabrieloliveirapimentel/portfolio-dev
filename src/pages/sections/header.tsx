import { FaAnglesDown } from "react-icons/fa6";
import backgroundImg from "../../assets/Background_Intro.png";

import { Badge } from "../../components/badge";
import { badges } from "../../data/data";
import { Icon } from "../../components/icon";

export function Header() {
  return (
    <header
      className="flex flex-col items-center justify-center min-h-screen text-center relative py-20 mx-auto"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Icon />
      <span className="text-gray-400 mb-4 font-['Inconsolata'] text-xl">
        Hello World! Meu nome é{" "}
        <span className="text-rose-500">Gabriel Oliveira Pimentel</span> e sou
      </span>

      <h1 className="text-6xl max-md:text-5xl mb-6">Desenvolvedor Fullstack</h1>

      <span className="text-[#878EA1] max-w-3xl mb-12 text-base max-md:text-sm">
        Transformo necessidades em aplicações reais, escaláveis e funcionais.
        Desenvolvo sistemas através da minha paixão pela tecnologia, com
        soluções inovadoras e eficazes para desafios complexos.
      </span>

      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge) => (
          <Badge key={badge.id} icon={badge.icon} label={badge.label} />
        ))}
      </div>
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <FaAnglesDown
          className="fill-gray-400 hover:cursor-pointer"
          size={24}
        />
      </div>
    </header>
  );
}
