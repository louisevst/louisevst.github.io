import Card from "../Card";
import React, { useRef, useEffect } from "react";
import projects from "../../utils/projects";

export default function Becode({ onSectionEnter }) {
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Becode");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="space-y-2" id="section-2">
      <h4 className="text-h4 font-serif">Web Developement</h4>
      <h5 className="text-sub ">BeCode, Bruxelles</h5>
      <h6 className="text-highlight">Dec. 2022 - June 2023</h6>
      <p className="max-w-lg pb-10 pt-4">
        Embarking on a transformative journey, I delved into the world of web
        development at BeCode. From December 2022 to June 2023, I embraced the
        self-learning approach that BeCode is renowned for—a dynamic,
        collaborative environment where we collectively grow through hands-on
        projects.
      </p>
      <div className="lg:flex w-full lg:space-x-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            text={project.date}
            sub={project.description}
            color={project.color}
            click={project.link}
          />
        ))}
      </div>
    </section>
  );
}
