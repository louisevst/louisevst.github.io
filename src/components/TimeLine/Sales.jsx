import React, { useRef, useEffect } from "react";
import works from "../../utils/works";
import Card from "../Card";

export default function Sales({ onSectionEnter }) {
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Sales");
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
    <section ref={sectionRef} className="space-y-2" id="section-3">
      <h4 className="text-h4 font-serif">My Sales Journey</h4>
      <h5 className="text-sub ">My work experience</h5>
      <h6 className="text-highlight">Oct 2020 - Oct 2022</h6>
      <p className="max-w-lg pb-10 pt-4">
        From understanding user behaviors to refining design principles, this
        experience complements my aspiration to become a versatile frontend
        developer. I'm excited to bring this newfound perspective to my future
        projects.
      </p>
      <div className="lg:flex w-full lg:space-x-4">
        {works.map((work) => (
          <Card
            key={work.id}
            title={work.title}
            text={work.duration}
            sub={work.location}
            color={work.color}
          />
        ))}
      </div>
    </section>
  );
}
