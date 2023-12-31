import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { poppins } from "@/fonts";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import Translations from "@/data/translations";
import Dropdown from "@/components/Dropdown";

export default function Header() {
  const { language, changeLanguage, updateLanguage } = useLanguageSwitcher();

  let aboutItems: { label: string; link?: string; labelType?: string }[] = [];
  let technologiesItems: { label: string; link?: string; labelType?: string }[] = [];
  let languagesItems: { label: string; link?: string; labelType?: string }[] = [];

  if (language) {
    aboutItems = [
      { label: Translations[language.toLowerCase()].about.title as string, link: "#about" },
      { label: Translations[language.toLowerCase()].about.s1.title as string, link: "#technical-expertise" },
      { label: Translations[language.toLowerCase()].about.s2.title as string, link: "#problem-solver" },
      { label: Translations[language.toLowerCase()].about.s3.title as string, link: "#lifelong-learner" }
    ];

    technologiesItems = [
      { label: Translations[language.toLowerCase()].technologies.title as string, link: "#technologies" },
      { label: Translations[language.toLowerCase()].technologies.s1.title as string, link: "#programming-languages" },
      { label: "Frameworks", link: "#frameworks" }
    ];

    languagesItems = [
      { label: "Português (pt-BR)", labelType: "language-Portuguese" },
      { label: "English (en-US)", labelType: "language-English" },
      { label: "Español (es-ES)", labelType: "language-Spanish" },
      { label: "日本語 (ja-JAP)", labelType: "language-Nihongo" }
    ];
  }

  function setupLanguage() {
    if (!localStorage.getItem("language")) {
      changeLanguage("language-Portuguese");
    }
  }

  useEffect(() => {
    updateLanguage();
    setupLanguage();
  }, []);

  return (
    <header className="bg-gray-50 py-4 mb-20 w-full">
      <div className="flex flex-col justify-between items-center p-2">
        <h1 className={`text-xl text-blue-500 mb-5 select-none font-bold ${poppins.className}`}>Ueslei Paim</h1>
        <nav>
          <ul className="flex sm:text-1xl sm:text-center sm:flex-col sm:gap-6 items-center w-full space-x-4 sm:space-x-0 text-gray-400">
            {language && (
              <>
                <li>
                  <span className="transition duration-300 hover:text-gray-600">
                    <Dropdown text={Translations[language.toLowerCase()].about.title} items={ aboutItems } />
                  </span>
                </li>
                <li>
                  <span className="transition duration-300 hover:text-gray-600">
                    <Dropdown text={Translations[language.toLowerCase()].technologies.title} items={ technologiesItems } />
                  </span>
                </li>
                <li>
                  <a href="#projects" className="transition duration-300 hover:text-gray-600">{Translations[language.toLowerCase()].projects.title}</a>
                </li>
                <li>
                  <a href="#contact" className="transition duration-300 hover:text-gray-600">{Translations[language.toLowerCase()].contacts.title}</a>
                </li>
                <li className="px-6">
                  <span>
                    <Dropdown text=<Languages /> items={ languagesItems } />
                    <small className="text-xs">({ Translations.langs[language.toLowerCase()] })</small>
                  </span>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
