import Card from "../Card";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import works from "../../utils/works";
import IconButton from "../IconButton";

const MobileSales = () => {
  useScrollAnimation("js-show-on-scroll");

  return (
    <Card
      key="4"
      title="My Sales Journey"
      text="Oct 2020 - Oct 2022"
      sub="My work experience"
      color="red"
      click="xxx"
    >
      <p className="max-w-lg pb-10 pt-4">
        Embarking on a transformative journey, I delved into the world of web
        development at BeCode. From December 2022 to June 2023, I embraced the
        self-learning approach that BeCode is renowned for—a dynamic,
        collaborative environment where we collectively grow through hands-on
        projects.
      </p>
      {works.map((work) => (
        <IconButton key={work.id} name={work.title} />
      ))}
    </Card>
  );
};

export default MobileSales;
