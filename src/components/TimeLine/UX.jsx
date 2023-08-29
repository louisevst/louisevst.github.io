import certificates from "../../assets/certificates.svg";
import React, { useRef, useEffect } from "react";

export default function UX({ onSectionEnter }) {
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("UX");
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
    <section ref={sectionRef} className="space-y-2" id="section-0">
      <h4 className="text-h4 font-serif">UX Design</h4>
      <h5 className="text-sub ">Coursera</h5>
      <h6 className="text-highlight">June - Now</h6>
      <p className="max-w-lg pb-10 pt-4">
        From understanding user behaviors to refining design principles, this
        experience complements my aspiration to become a versatile frontend
        developer. I'm excited to bring this newfound perspective to my future
        projects.
      </p>
      <img src={certificates} className="ml-auto" />
    </section>
  );
}
