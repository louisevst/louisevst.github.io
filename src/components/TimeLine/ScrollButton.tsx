import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

interface props {
  direction: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollButton: React.FC<props> = ({ direction, scrollRef }) => {
  const src = direction === "left" ? left : right;
  const alt = direction === "left" ? "Scroll left" : "Scroll Right";
  const buttonClass = `bg-dark/30 absolute top-0 h-full opacity-0 group-hover:opacity-90 transition-opacity ${
    direction === "left" ? "left-0" : "right-0"
  }`;
  const handleScrollClick = () => {
    const scrollSection = scrollRef.current;

    if (scrollSection) {
      if (direction === "right") {
        scrollSection.scrollBy({ left: 700, behavior: "smooth" });
      } else {
        scrollSection.scrollBy({ left: -700, behavior: "smooth" });
      }
    }
  };

  return (
    <button onClick={handleScrollClick} className={buttonClass}>
      <img
        src={src}
        alt={alt}
        className="w-18 h-18 flex justify-center items-center p-4"
      ></img>
    </button>
  );
};

export default ScrollButton;
