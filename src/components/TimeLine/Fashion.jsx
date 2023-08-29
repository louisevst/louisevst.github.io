import creation from "../../assets/front.jpg";
import React, { useRef, useEffect } from "react";
import back from "../../assets/back.jpg";

export default function Fashion({ onSectionEnter }) {
  const sectionRef = useRef(null);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Fashion");
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
    <section ref={sectionRef} className="space-y-2" id="section-4">
      <h4 className="text-h4 font-serif">Bachelor in Fashion Design</h4>
      <h5 className="text-sub ">Helmo, Liège</h5>
      <h6 className="text-highlight">September 2015 - June 2020</h6>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="max-w-lg pb-10 pt-4">
            From understanding user behaviors to refining design principles,
            this experience complements my aspiration to become a versatile
            frontend developer. I'm excited to bring this newfound perspective
            to my future projects.
          </p>
          <p className=" text-xs-text self-end translate-x-20 2xl:translate-x-40 pt-20">
            My creation for the 'Fashion Chessboard' Project
          </p>
        </div>
        <div className="flex pr-8">
          <img src={creation} className="max-h-80 translate-x-20 z-0" />
          <img src={back} className="max-h-80 z-10 translate-y-6" />
        </div>
      </div>
    </section>
  );
}
