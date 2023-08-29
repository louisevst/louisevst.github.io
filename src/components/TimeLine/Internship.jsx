import React, { useRef, useEffect } from "react";
import internship from "../../assets/Internship.svg";

const Internship = ({ onSectionEnter }) => {
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Internship");
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
    <section ref={sectionRef} className="space-y-2" id="section-1">
      <h4 className="text-h4 font-serif">Front End Internship</h4>
      <h5 className="text-sub ">CRA-W, Gembloux</h5>
      <h6 className="text-highlight">June - Aug. 2023</h6>
      <p className="max-w-lg pb-10 pt-4">
        At the CRA-W, Center of Agronomical Research in Wallonia, I reimagined
        phytosanitary product data access. Vue, Typescript, Tailwind refined UX.
        JSON integration via Django enhanced backend collaboration. A spark for
        impactful frontend journey.
      </p>
      <img src={internship} className="p-4" />
    </section>
  );
};

export default Internship;
