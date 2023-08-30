import Card from "../Card";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const MobileUX = () => {
  useScrollAnimation("js-show-on-scroll");

  return (
    <Card
      key="1"
      title="UX Design"
      text="June - Now"
      sub="Coursera"
      color="blue"
      click="xxx"
    >
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        From understanding user behaviors to refining design principles, this
        experience complements my aspiration to become a versatile frontend
        developer. I'm excited to bring this newfound perspective to my future
        projects.
      </p>
    </Card>
  );
};

export default MobileUX;
