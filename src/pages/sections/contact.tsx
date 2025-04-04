import { PiArrowUpRightBold } from "react-icons/pi";
import backgroundImg from "../../assets/Background_Contacts.png";
import { socialLinks } from "../../data/data";

export function Contact() {
  return (
    <section
      className="py-24 "
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-8 ">
        <span className="text-purple-500 mb-2 font-['Inconsolata'] text-xl">
          Contato
        </span>
        <h2 className="text-2xl md:text-3xl mb-3">Gostou do meu trabalho?</h2>
        <span className="text-gray-400 mb-8 text-base max-md:text-sm">
          Entre em contato ou acompanhe as minhas redes sociais!
        </span>
      </div>

      <div className="max-w-md mx-auto space-y-4 mb-16">
        {socialLinks.map((link) => (
          <button
            key={link.id}
            className="flex items-center justify-between bg-[#292C34] p-4 rounded-lg border-[#292C34] border-2 hover:border-blue-400 w-full hover:text-blue-400"
          >
            <div className="flex items-center gap-3">
              {link.icon}
              <span>{link.name}</span>
            </div>
            <a href={link.url} target="_blank">
              <PiArrowUpRightBold className="text-xl" />
            </a>
          </button>
        ))}
      </div>
    </section>
  );
}
