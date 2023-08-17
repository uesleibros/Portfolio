import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { poppins } from "@/fonts";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import translations from "@/public/translations.json";
import Translations from "@/types/translationsTypes";
import Dropdown from "@/components/Dropdown";

export default function Header() {
  const { language, changeLanguage, updateLanguage } = useLanguageSwitcher();
  const Translations: Translations = translations;

  console.log(Translations)  

  let aboutItems: Array<{ label: string | null | any, link?: string, labelType?: string | null }> = [];
  let technologiesItems: Array<{ label: string | null | any, link?: string, labelType?: string | null }> = [];
  let languagesItems: Array<{ label: string | null | any, link?: string, labelType?: string | null }> = [];

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
      { label: Translations.alts[language.toLowerCase()].portuguese as string, labelType: "language-Portuguese" },
      { label: Translations.alts[language.toLowerCase()].english as string, labelType: "language-English" }
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
      <div className="container mx-auto flex flex-col justify-between items-center p-2">
        <h1 className={`text-xl text-blue-500 mb-5 select-none font-bold ${poppins.className}`}>Ueslei Paim</h1>
        <nav>
          <ul className="flex space-x-4 text-gray-400">
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
                    <small className="text-xs">({ Translations.alts[language.toLowerCase()][language.toLowerCase()] })</small>
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
