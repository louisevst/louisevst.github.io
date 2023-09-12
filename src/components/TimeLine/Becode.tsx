import { useRef, useEffect } from "react";
import Card from "../Card";
import projects from "../../utils/projects";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import IconButton from "../IconButton";

interface BecodeProps {
  onSectionEnter: (section: string) => void;
}

const Becode: React.FC<BecodeProps> = ({ onSectionEnter }) => {
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
      <h4 className="text-h4 font-serif js-show-on-scroll">Web Developement</h4>
      <h5 className="text-sub js-show-on-scroll">BeCode, Bruxelles</h5>
      <h6 className="text-highlight js-show-on-scroll">
        Dec. 2022 - June 2023
      </h6>
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        Embarking on a transformative journey, I delved into the world of web
        development at BeCode. From December 2022 to June 2023, I embraced the
        self-learning approach that BeCode is renowned for—a dynamic,
        collaborative environment where we collectively grow through hands-on
        projects.
      </p>
      <div className="flex  w-full space-x-4 js-show-on-scroll items-start">
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
    </section>
  );
};

export default Becode;
