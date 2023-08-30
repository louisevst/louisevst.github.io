import React, { useRef, useEffect } from "react";
import creation from "../../assets/front.jpg";
import back from "../../assets/back.jpg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

interface FashionProps {
  onSectionEnter: (section: string) => void;
}

const Fashion: React.FC<FashionProps> = ({ onSectionEnter }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Fashion");
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
    <section ref={sectionRef} className="space-y-2" id="section-4">
      <h4 className="text-h4 font-serif js-show-on-scroll">
        Bachelor in Fashion Design
      </h4>
      <h5 className="text-sub js-show-on-scroll">Helmo, Liège</h5>
      <h6 className="text-highlight js-show-on-scroll">
        September 2015 - June 2020
      </h6>
      <div className="flex justify-between  w-3/4 xl:w-full">
        <div className="flex flex-col">
          <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
            From understanding user behaviors to refining design principles,
            this experience complements my aspiration to become a versatile
            frontend developer. I'm excited to bring this newfound perspective
            to my future projects.
          </p>
          <p className="text-xs-text self-end translate-x-20 pr-8 2xl:translate-x-40 pt-20 js-show-on-scroll">
            My creation for the 'Fashion Chessboard' Project
          </p>
        </div>
        <div className="flex xl:pr-8 js-show-on-scroll">
          <img
            src={creation}
            alt="Creation"
            className="max-h-80 translate-x-20 z-0"
          />
          <img
            src={back}
            alt="Back of the creation"
            className="max-h-80 z-10 translate-y-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Fashion;
