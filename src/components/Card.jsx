export default function Card({ title, sub, text, color, click }) {
  const cardClassName = `p-4 rounded-3xl space-y-1 md:space-y-2 flex flex-col justify-between min-w-[300px] ${
    color === "blue" ? "bg-blue text-dark" : "bg-red"
  }`;

  return (
    <ul className={cardClassName}>
      <li className="text-xs-sub md:text-sub mb-1 mr-4 lg:mr-8">{title}</li>
      <li className="text-xs-highlight md:text-highlight mr-4 lg:mr-8">
        {sub}
      </li>
      <li className="pb-4">{text}</li>
      {click && (
        <li
          className="flex justify-end text-xs-h2 leading-6 cursor-pointer"
          onClick={click}
        >
          +
        </li>
      )}
    </ul>
  );
}
