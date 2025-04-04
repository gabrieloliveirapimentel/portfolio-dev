import {
  FaAnglesDown,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaCode,
} from "react-icons/fa6";
import { Badge } from "../../components/badge";
import backgroundImg from "../../assets/Background_Intro.png";

export function Header() {
  return (
    <header
      className="flex flex-col items-center justify-center min-h-screen text-center relative py-20"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-4 border-rose-500 relative mx-auto mb-12">
          <img
            src="https://avatars.githubusercontent.com/u/63811493?v=4"
            alt="Gabriel Oliveira Pimentel"
            className="w-full h-full object-cover rounded-full border-5 border-[#16181D]"
          />
          <div className="absolute bottom-1 right-1 bg-[#16181D] p-1 rounded-full text-xs z-50  ">
            <FaCode className="text-lime-500" size={30} />
          </div>
        </div>
      </div>

      <p className="text-gray-400 mb-4 font-['Inconsolata'] text-xl">
        Hello World! Meu nome é{" "}
        <span className="text-rose-500">Gabriel Oliveira Pimentel</span> e sou
      </p>

      <h1 className="text-6xl max-md:text-5xl font-bold mb-6 font-['Asap']">
        Desenvolvedor Fullstack
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-base max-md:text-sm">
        Transformo necessidades em aplicações reais, escaláveis e funcionais.
        Desenvolvo sistemas através da minha paixão pela tecnologia, com
        soluções inovadoras e eficazes para desafios complexos.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Badge icon={<FaGithub className="fill-gray-300" />} label="GitHub" />
        <Badge icon={<FaHtml5 className="fill-rose-400" />} label="HTML" />
        <Badge icon={<FaCss3Alt className="fill-blue-400" />} label="CSS" />
        <Badge icon={<FaJs className="fill-yellow-500" />} label="JavaScript" />
        <Badge icon={<FaReact className="fill-cyan-500" />} label="React" />
        <Badge icon={<FaNodeJs className="fill-lime-500" />} label="Node.js" />
      </div>
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <FaAnglesDown className="fill-gray-400" size={24} />
      </div>
    </header>
  );
}
