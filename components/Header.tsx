import { poppins } from "@/fonts";
import Dropdown from "@/components/Dropdown";

export default function Header() {
  const aboutItems = [
    { label: "About Me", link: "#about" },
    { label: "Technical Expertise", link: "#technical-expertise" },
    { label: "Problem Solver", link: "#problem-solver" },
    { label: "Lifelong Learner", link: "#lifelong-learner" }
  ];

  const tecnologiesItems = [
    { label: "Tecnologies", link: "#tecnologies" },
    { label: "Programming Languages", link: "#programming-languages" },
    { label: "Frameworks", link: "#frameworks" }
  ];

  return (
    <header className="bg-gray-50 py-4 mb-20 w-full">
      <div className="container mx-auto flex flex-col justify-between items-center p-2">
        <h1 className={`text-xl text-blue-500 mb-5 select-none font-bold ${poppins.className}`}>Ueslei Paim</h1>
        <nav>
          <ul className="flex space-x-4 text-gray-400">
            <li>
              <span className="transition duration-300 hover:text-gray-600"><Dropdown text="About" items={ aboutItems } /></span>
            </li>
            <li>
              <span className="transition duration-300 hover:text-gray-600"><Dropdown text="Tecnologies" items={ tecnologiesItems } /></span>
            </li>
            <li>
              <a href="#projects" className="transition duration-300 hover:text-gray-600">Projects</a>
            </li>
            <li>
              <a href="#contact" className="transition duration-300 hover:text-gray-600">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
