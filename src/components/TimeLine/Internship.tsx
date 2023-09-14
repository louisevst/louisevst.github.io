import React, { useRef, useEffect } from "react";
import internship from "../../assets/Internship.svg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface InternshipProps {
  onSectionEnter: (section: string) => void;
}

const Internship: React.FC<InternshipProps> = ({ onSectionEnter }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Internship");
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
    <section ref={sectionRef} className="space-y-2 xl:pr-20" id="section-1">
      <h3 className="text-h4 font-serif js-show-on-scroll">
        Front End Internship
      </h3>
      <h4 className="text-sub js-show-on-scroll">CRA-W, Gembloux</h4>
      <p className="text-highlight js-show-on-scroll">June - Aug. 2023</p>
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        At the CRA-W, Center of Agronomical Research in Wallonia, I reimagined
        the frontend of a site to consult informations about phytosanitary
        products.I used Vue, Typescript and Tailwind. The original site was made
        using templating so I added JSON dump in the backend (Django, Python) to
        communicate with the frontend. While the site is currently in testing, I
        look forward to sharing it once it's live.
      </p>
      <img
        src={internship}
        alt="Internship"
        className="p-4 js-show-on-scroll"
      />
      <p className="text-xs-text js-show-on-scroll">
        The project before and after the frontend improvement
      </p>
    </section>
  );
};

export default Internship;
