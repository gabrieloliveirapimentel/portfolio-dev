import { Header } from "./sections/header";
import { Projects } from "./sections/projects";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";

export function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
