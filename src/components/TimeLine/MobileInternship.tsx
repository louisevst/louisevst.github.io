import Card from "../Card";
import internship from "../../assets/Internship.svg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const MobileInternship = () => {
  useScrollAnimation("js-show-on-scroll");

  return (
    <Card
      key="2"
      title="Front End Internship"
      text="June - Aug. 2023"
      sub="CRA-W, Gembloux"
      color="red"
      click="xxx"
    >
      <p className="max-w-lg pb-10 pt-4 js-show-on-scroll">
        At the CRA-W, Center of Agronomical Research in Wallonia, I reimagined
        phytosanitary product data access. Vue, Typescript, Tailwind refined UX.
        JSON integration via Django enhanced backend collaboration. A spark for
        impactful frontend journey.
      </p>
      <img src={internship} alt="Internship" />
      <p className="text-xs-text">
        The project before and after the frontend improvement
      </p>
    </Card>
  );
};

export default MobileInternship;
