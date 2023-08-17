import { useState, useEffect } from "react";
import { NextPage } from "next";
import useLanguageSwitcher from "@/hooks/useLanguageSwitcher";
import Translations from "@/data/translations";

interface Props {
  name: string;
  description: string;
  color?: string;
  badge?: string;
  url?: string;
}

const ProjectBox: NextPage<Props> = (props) => {
  const { language, setLanguage } = useLanguageSwitcher();
  const { name, description, color, badge, url } = props;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200" style={{ minHeight: "190px" }}>
      <div className="flex items-center mb-2">
        <div className={`w-4 h-4 ${color ? color : "bg-gray-400"} rounded-full mr-2`}></div>
        <h2 className="text-lg font-semibold">{ name }</h2>
        {badge && (
          <span className={`inline-block ml-2 px-2 py-1 text-xs rounded select-none ${color ? color : "bg-gray-400"} text-white`}>{ badge }</span>
        )}
      </div>
      <p className="text-gray-600 mb-2 max-w-sm">{ description }</p>
      {url && (
        <a href={url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {language && Translations[language].github}
        </a>
      )}
    </div>
  );
};

export default ProjectBox;