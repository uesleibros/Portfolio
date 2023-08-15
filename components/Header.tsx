import { poppins } from "../fonts";

export default function Header() {
  return (
    <header className="bg-gray-50 py-4 mb-20 w-full">
      <div className="container mx-auto flex flex-col justify-between items-center p-2">
        <h1 className={`text-xl text-blue-500 select-none font-bold ${poppins.className}`}>Ueslei Paim</h1>
        <nav>
          <ul className="flex space-x-4 text-gray-400">
            <li><a href="#about" className="transition duration-300 hover:text-gray-600">About</a></li>
            <li><a href="#projects" className="transition duration-300 hover:text-gray-600">Projects</a></li>
            <li><a href="#contact" className="transition duration-300 hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
