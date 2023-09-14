import { useState } from "react";

interface CardProps {
  title: string;
  sub: string;
  text: string;
  color: string;
  click?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  sub,
  text,
  color,
  click,
  children,
}) => {
  const [showMore, setShowMore] = useState(false);

  const cardClassName = `p-4 lg:mr-4 mb-4 md:py-8 rounded-3xl space-y-1 md:space-y-2 flex flex-col justify-between min-w-[300px] text-dark ${
    color === "blue" ? "bg-blue" : "bg-red"
  } `;

  return (
    <div className={cardClassName}>
      <div>
        <h5 className="text-xs-sub md:text-sub mb-1 mr-4 lg:mr-8">{title}</h5>
        <h6 className="text-xs-highlight md:text-highlight mr-4 lg:mr-8">
          {sub}
        </h6>
        <p className="pb-4">{text}</p>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          showMore
            ? "opacity-100 h-full w-full flex flex-col pr-8 gap-4"
            : "opacity-0 h-0"
        }`}
      >
        {showMore && children}
      </div>
      {click && (
        <button
          className="hover:opacity-80 transition-opacity flex justify-end text-xs-h2 leading-6 cursor-pointer md:translate-y-4 "
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "-" : "+"}
        </button>
      )}
    </div>
  );
};

export default Card;
