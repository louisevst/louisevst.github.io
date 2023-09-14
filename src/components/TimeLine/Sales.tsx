import { useRef, useEffect, useState } from "react";
import works from "../../utils/works";
import Card from "../Card";
import ScrollButton from "./ScrollButton";

interface SalesProps {
  onSectionEnter: (section: string) => void;
}

const Sales: React.FC<SalesProps> = ({ onSectionEnter }) => {
  // Conditionnaly rendering left and right buttons
  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  const sectionRef = useRef(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Sales");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.8,
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="space-y-2" id="section-3">
      <h3 className="text-h4 font-serif js-show-on-scroll">
        My Sales Experience
      </h3>
      <h4 className="text-sub  js-show-on-scroll">A Career Switch</h4>
      <p className="text-highlight js-show-on-scroll">Oct 2020 - Oct 2022</p>
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        When I graduated, my dream was to launch my own upcycled fashion
        business. Although the project itself didn't work out, I had the chance
        to work for a bridal store. Those retail experiences taught me the art
        of understanding and meeting clients unique needs. While I was working,
        I started preparing my way to BeCode by learning CSS, HTML, JavaScript
        and PHP on Sololearn.
      </p>
      <div className="relative group">
        <div
          className="scroll-section lg:flex w-full js-show-on-scroll overflow-auto scroll-section scrollbar-hide"
          ref={scrollSectionRef}
        >
          {works.map((work) => (
            <Card
              key={work.id}
              title={work.title}
              text={work.duration}
              sub={work.location}
              color={work.color}
            />
          ))}
          {canScrollRight && (
            <ScrollButton direction="right" scrollRef={scrollSectionRef} />
          )}
          {canScrollLeft && (
            <ScrollButton direction="left" scrollRef={scrollSectionRef} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Sales;
