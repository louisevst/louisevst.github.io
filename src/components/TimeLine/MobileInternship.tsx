import Card from "../Card";
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
        the frontend of a site to consult informations about phytosanitary
        products.I used Vue, Typescript and Tailwind. The original site was made
        using templating so I added JSON dump in the backend (Django, Python) to
        communicate with the frontend. While the site is currently in testing, I
        look forward to sharing it once it's live.
      </p>
    </Card>
  );
};

export default MobileInternship;
