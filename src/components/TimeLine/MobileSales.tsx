import Card from "../Card";
import works from "../../utils/works";
import IconButton from "../IconButton";

const MobileSales = () => {
  return (
    <Card
      key="4"
      title="My Sales Experience"
      text="Oct 2020 - Oct 2022"
      sub="A Carreer Switch"
      color="red"
      click="xxx"
    >
      <p className="max-w-lg pb-10 pt-4">
        When I graduated, my dream was to launch my own upcycled fashion
        business. Although the project itself didn't work out, I had the chance
        to work for a bridal store. Those retail experiences taught me the art
        of understanding and meeting clients unique needs. While I was working,
        I started preparing my way to BeCode by learning CSS, HTML, JavaScript
        and PHP on Sololearn.
      </p>
      {works.map((work) => (
        <IconButton key={work.id} name={work.title} type={work.type} />
      ))}
    </Card>
  );
};

export default MobileSales;
