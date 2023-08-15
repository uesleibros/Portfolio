import { useState } from "react";

export default function ProjectBox({ title, description, authors, color, badge, url }) {
  const [showAuthors, setShowAuthors] = useState(false);

  const handleShowAuthors= () => {
    setShowAuthors(true);
  };

  const handleHideAuthors= () => {
    setShowAuthors(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200" style={{ minHeight: "180px" }} onMouseOver={handleShowAuthors} onMouseOut={handleHideAuthors}>
      <div className="flex items-center mb-2">
        <div className={`w-4 h-4 ${color ? color : "bg-gray-400"} rounded-full mr-2`}></div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {badge && (
          <span className={`inline-block ml-2 px-2 py-1 text-xs rounded select-none ${color ? color : "bg-gray-400"} text-white`}>{ badge }</span>
        )}
      </div>
      <p className="text-gray-600 mb-2 max-w-sm">{description}</p>
      <div className="flex items-center text-sm text-gray-400">
      </div>
      {authors.length >= 1 && showAuthors && (
        <div className="mt-2 text-gray-600">
          Author(s): <strong>{authors.join(", ")}</strong>
        </div>
      )}
      {url && (
        <a href={url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
};
