import React, { useRef, useEffect } from "react";
import certificates from "../../assets/certificates.svg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface UXProps {
  onSectionEnter: (section: string) => void;
}

const UX: React.FC<UXProps> = ({ onSectionEnter }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("UX");
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
    <section ref={sectionRef} className="space-y-2" id="section-0">
      <h3 className="text-h4 font-serif js-show-on-scroll">UX Design</h3>
      <h4 className="text-sub js-show-on-scroll">Coursera</h4>
      <p className="text-highlight js-show-on-scroll">June - Now</p>
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        From understanding user behaviors to refining design principles, this
        experience complements my aspiration to become a versatile frontend
        developer. I'm excited to bring this newfound perspective to my future
        projects.
      </p>
      <img
        src={certificates}
        alt="Certificates"
        className="ml-auto js-show-on-scroll"
      />
    </section>
  );
};

export default UX;
