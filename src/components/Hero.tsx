import Button from "./Button";

export default function Hero() {
  function goToContact() {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "instant" });
    }
  }

  return (
    <>
      <header className=" py-2 mx-4 lg:py-4 lg:mx-10 flex justify-between items-center">
        <p className="font-serif md:text-highlight">Louise Vassart</p>
        <Button onClick={goToContact}>Contact</Button>
      </header>
      <section className="bg-abstractShape w-full h-[500px] lg:h-[90vh] flex bg-center bg-contain justify-center bg-no-repeat md:bg-right lg:bg-center items-start md:justify-start md:items-center  lg:justify-center sm:p-4 md:pl-8 lg:p-0 border-b-2 border-light md:border-b-0 lg:border-b-2">
        <h1 className="text-xs-h1 md:text-md-h1 lg:text-h1 font-serif leading-[2.8rem] pt-12 lg:leading-[5.5rem] lg:pt-0 font-light">
          <span className="text-red">Front End</span>
          <br />
          Developer
        </h1>
      </section>
      <section className=" p-4 py-8 md:p-8 md:-translate-y-20 lg:translate-y-0 lg:w-full lg:flex lg:justify-center lg:flex-col lg:items-center lg:py-14">
        <h2 className="text-xs-sub md:text-sub text-blue text-center pb-6 md:text-left">
          Exploring the Art of Web Creation
        </h2>
        <div className="md:max-w-lg lg:text-center lg:max-w-3xl">
          <h3>
            As a frontend developer backed by a stylism background, I bring a
            unique blend of skills to your projects.
          </h3>
          I speak french and have a good level in english. My dedication,
          punctuality, and reliability make me a valuable asset to any
          development team.
        </div>
      </section>
    </>
  );
}
