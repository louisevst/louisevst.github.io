import Button from "./Button";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Contact = () => {
  const downloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/CV.pdf";
    downloadLink.download = "CV.pdf";
    downloadLink.click();
  };

  return (
    <>
      <section className="border-y-2 border-light lg:flex lg:justify-between lg:px-16">
        <div className="space-y-4 border-b-2 border-light lg:border-0 py-8 px-4 md:px-8 lg:py-10">
          <h2 className="font-serif text-xs-h3">Let's Work Together</h2>
          <div className="md:max-w-lg pb-4">
            <h3>I have a strong desire to learn and grow as a developer.</h3>
            <p>
              I am a fast-learner, punctual, and reliable. I can work
              independently or as part of a team, depending on the project
              requirements. More information can be found in my CV, which can be
              downloaded below.
            </p>
          </div>
          <Button onClick={downloadCV}>Download my CV</Button>
        </div>
        <ul
          className="py-8 space-y-4 px-4 md:px-8 lg:border-l-2 border-light flex justify-center flex-col"
          id="contact"
        >
          <li>
            <h3 className="text-xs-sub lg:text-sub ">Get in Touch</h3>
          </li>
          <li>
            <a
              className="flex items-center"
              href="mailto:louisevassart@gmail.com"
            >
              <img src={mail} className="w-8 mr-2" />
              louisevassart@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/louise-vassart"
              className="flex items-center"
            >
              <img src={linkedin} className="w-8  mr-2" />
              Louise Vassart
            </a>
          </li>
          <li>
            <a
              href="https://github.com/louisevst"
              className="flex items-center"
            >
              <img src={github} className="w-8  mr-2" />
              Louise Vst
            </a>
          </li>
        </ul>
      </section>
      <footer className="flex justify-center py-2 border-b-2 border-light">
        &copy; 2023 - Louise Vassart
      </footer>
    </>
  );
};
export default Contact;
