import { useRef, useEffect } from "react";
import works from "../../utils/works";
import Card from "../Card";

interface SalesProps {
  onSectionEnter: (section: string) => void;
}

const Sales: React.FC<SalesProps> = ({ onSectionEnter }) => {
  const sectionRef = useRef(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      onSectionEnter("Sales");
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
  }, []);

  return (
    <section ref={sectionRef} className="space-y-2" id="section-3">
      <h4 className="text-h4 font-serif js-show-on-scroll">My Sales Journey</h4>
      <h5 className="text-sub  js-show-on-scroll">A Career Pivot</h5>
      <h6 className="text-highlight js-show-on-scroll">Oct 2020 - Oct 2022</h6>
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        When I graduated, my dream was to launch my own upcycled fashion
        business. While that venture didn't materialize, I had the chance to
        work for a bridal store. These experiences taught me the art of
        understanding and meeting clients' unique needs.
      </p>
      <div className="lg:flex w-full js-show-on-scroll lg:flex-wrap">
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
};

export default Sales;
