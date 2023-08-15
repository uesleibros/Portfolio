import { useState, useEffect } from "react";
import ArrowOpen from "/components/ArrowOpen";
import ArrowClosed from "/components/ArrowClosed";

export default function TableOfContents() {
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [arrowDirection, setArrowDirection] = useState(<ArrowOpen />);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShowTableOfContents(true);
    } else {
      setShowTableOfContents(false);
    }
  };

  const changeArrow = () => {
    if (arrowDirection.type.name == "ArrowOpen") {
      setArrowDirection(<ArrowClosed />);
    } else {
      setArrowDirection(<ArrowOpen />);
    }
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`fixed left-0 top-1/2 transform -translate-y-1/2 ${showTableOfContents ? "opacity-100" : "opacity-0"} transition-opacity duration-300 bg-transparent z-20`}>
        <div onClick={changeArrow} className="cursor-pointer w-sm">
          { arrowDirection }
        </div>
        <ul className={`bg-white p-4 rounded shadow ${showDetails ? "opacity-100" : "opacity-0"}`}>
          <li><a href="#about" className="text-blue-500 hover:underline">About</a></li>
          <li><a href="#projects" className="text-blue-500 hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-blue-500 hover:underline">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};