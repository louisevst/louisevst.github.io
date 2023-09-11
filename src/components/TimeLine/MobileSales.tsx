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
      sub="A carreer pivot"
      color="red"
      click="xxx"
    >
      <p className="max-w-lg pb-10 pt-4">
        When I graduated, my dream was to launch my own upcycled fashion
        business. While that venture didn't materialize, I had the chance to
        work for a bridal store. These experiences taught me the art of
        understanding and meeting clients' unique needs.
      </p>
      {works.map((work) => (
        <IconButton key={work.id} name={work.title} />
      ))}
    </Card>
  );
};

export default MobileSales;
