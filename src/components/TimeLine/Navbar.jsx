import { useRef, useState, useEffect } from "react";

export default function Navbar({ currentSection, sectionTitles }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(
    sectionTitles.indexOf(currentSection)
  );

  useEffect(() => {
    setCurrentIndex(sectionTitles.indexOf(currentSection));
  }, [currentSection]);

  const scrollToSection = (sectionIndex) => {
    const sectionRef = document.getElementById(`section-${sectionIndex}`);
    sectionRef.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-1/3 h-96 m-4 bg-gradient-to-t from-white/0 via-light to-white/0">
      <ul
        ref={containerRef}
        className="flex flex-col items-start justify-center bg-dark ml-0.5 w-full h-full "
      >
        {sectionTitles.map((title, index) => {
          const distance = index - currentIndex;
          const style = {
            transform: `translateY(${distance * 20}px)`,
          };

          return (
            <li
              key={index}
              className={`text-lg pl-4 cursor-pointer transition-transform duration-150 ease-linear ${
                title === currentSection
                  ? "text-sub"
                  : "text-highlight text-light/75"
              }`}
              style={style}
              onClick={() => scrollToSection(index)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
