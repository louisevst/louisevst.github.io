import { useRef, useState, useEffect } from "react";

interface NavbarProps {
  currentSection: string;
  sectionTitles: string[];
}

const Navbar = ({ currentSection, sectionTitles }: NavbarProps) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(
    sectionTitles.indexOf(currentSection)
  );

  useEffect(() => {
    setCurrentIndex(sectionTitles.indexOf(currentSection));
  }, [currentSection]);

  const scrollToSection = (sectionIndex: number) => {
    const sectionRef = document.getElementById(`section-${sectionIndex}`);
    if (sectionRef) {
      sectionRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-40 sticky top-1/3 h-96 m-4 bg-gradient-to-t from-white/0 via-light to-white/0">
      <ul
        ref={containerRef}
        className="flex flex-col items-start justify-center bg-dark ml-0.5 w-full h-full"
      >
        {sectionTitles.map((title, index) => {
          const distance = index - currentIndex;
          const style = {
            transform: `translateY(${distance * 20}px)`,
          };

          return (
            <li
              key={index}
              className={` text-lg pl-4 cursor-pointer transition-transform duration-150 ease-linear ${
                title === currentSection
                  ? "text-sub"
                  : "text-highlight text-light/75 hover:text-light transition-colors"
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
};

export default Navbar;
