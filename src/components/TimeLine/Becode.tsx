import { useRef, useState, useEffect } from "react";
import Card from "../Card";
import projects from "../../utils/projects";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import IconButton from "../IconButton";
import ScrollButton from "./ScrollButton";

interface BecodeProps {
  onSectionEnter: (section: string) => void;
}

const Becode: React.FC<BecodeProps> = ({ onSectionEnter }) => {
  // Conditionnaly rendering left and right buttons
  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Function to check scrollable dimensions
  const checkScrollableDimensions = () => {
    const scrollSection = scrollSectionRef.current;

    if (scrollSection) {
      const containerWidth = scrollSection.clientWidth;
      const scrollableWidth = scrollSection.scrollWidth - containerWidth;

      setCanScrollLeft(scrollSection.scrollLeft > 0);

      setCanScrollRight(scrollSection.scrollLeft < scrollableWidth - 5);
    }
  };

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;

    if (scrollSection) {
      scrollSection.addEventListener("scroll", checkScrollableDimensions);
    }

    checkScrollableDimensions();

    return () => {
      if (scrollSection) {
        scrollSection.removeEventListener("scroll", checkScrollableDimensions);
      }
    };
  }, []);

  //Having the title of the section displayed on the side
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Becode");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  useScrollAnimation("js-show-on-scroll");

  return (
    <section ref={sectionRef} id="section-2">
      <h3 className="text-h4 font-serif js-show-on-scroll">Web Developement</h3>
      <h4 className="text-sub js-show-on-scroll">BeCode, Bruxelles</h4>
      <p className="text-highlight js-show-on-scroll">Dec. 2022 - June 2023</p>
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        Starting an exciting journey, I discovered web development at BeCode.
        From December 2022 to June 2023, I embraced the self-learning approach
        that BeCode is renowned for—a dynamic, collaborative environment where
        we collectively grow through hands-on projects. I gained knowledge of
        foundational concepts like using a mobile first strategy, developing
        responsive websites, and considering modularity and scalability.
      </p>
      <div className="relative group">
        <div
          ref={scrollSectionRef}
          className="scroll-section flex w-full js-show-on-scroll items-start overflow-auto scrollbar-hide"
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              text={project.date}
              sub={project.description}
              color={project.color}
              click={project.link}
            >
              {project.details}
              <IconButton
                name="See Project"
                to={project.link}
                type="project"
                color={project.color}
              />
            </Card>
          ))}
        </div>

        {canScrollRight && (
          <ScrollButton direction="right" scrollRef={scrollSectionRef} />
        )}
        {canScrollLeft && (
          <ScrollButton direction="left" scrollRef={scrollSectionRef} />
        )}
      </div>
    </section>
  );
};

export default Becode;
