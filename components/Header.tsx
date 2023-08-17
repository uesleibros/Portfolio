import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { poppins } from "@/fonts";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import translations from "@/public/translations.json";
import Dropdown from "@/components/Dropdown";

export default function Header() {
  const { language, changeLanguage, updateLanguage } = useLanguageSwitcher();

  let Translations = {};
  let aboutItems: Array<{ label: string | null | any, link?: string, labelType?: string | null }> = [];
  let technologiesItems: Array<{ label: string | null | any, link?: string, labelType?: string | null }> = [];
  let languagesItems: Array<{ label: string | null | any, link?: string, labelType?: string | null }> = [];

  if (language) {
    Translations = translations[language.toLowerCase()];
    const TranslationsAlt = translations.alts[language.toLowerCase()];
    aboutItems = [
      { label: Translations.about.title as string, link: "#about" },
      { label: Translations.about.s1.title as string, link: "#technical-expertise" },
      { label: Translations.about.s2.title as string, link: "#problem-solver" },
      { label: Translations.about.s3.title as string, link: "#lifelong-learner" }
    ];

    technologiesItems = [
      { label: Translations.technologies.title as string, link: "#technologies" },
      { label: Translations.technologies.s1.title as string, link: "#programming-languages" },
      { label: "Frameworks", link: "#frameworks" }
    ];

    languagesItems = [
      { label: TranslationsAlt.portuguese as string, labelType: "language-Portuguese" },
      { label: TranslationsAlt.english as string, labelType: "language-English" }
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
                    <Dropdown text={Translations.about.title} items={ aboutItems } />
                  </span>
                </li>
                <li>
                  <span className="transition duration-300 hover:text-gray-600">
                    <Dropdown text={Translations.technologies.title} items={ technologiesItems } />
                  </span>
                </li>
                <li>
                  <a href="#projects" className="transition duration-300 hover:text-gray-600">{Translations.projects.title}</a>
                </li>
                <li>
                  <a href="#contact" className="transition duration-300 hover:text-gray-600">{Translations.contacts.title}</a>
                </li>
                <li className="px-6">
                  <span>
                    <Dropdown text=<Languages /> items={ languagesItems } />
                    <small className="text-xs">({ Translations.alts })</small>
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
