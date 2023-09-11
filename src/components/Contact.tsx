import Button from "./Button";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Contact = () => {
  const downloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/public/my-cv.pdf";
    downloadLink.download = "my-cv.pdf";
    downloadLink.click();
  };

  return (
    <>
      <section className="border-y-2 border-light lg:flex lg:justify-between lg:px-16">
        <div className="space-y-4 border-b-2 border-light lg:border-0 py-8 px-4 md:px-8 lg:py-10">
          <h2 className="font-serif text-xs-h3">
            From Fashion Design to Web Developement
          </h2>
          <p className="md:max-w-lg pb-4">
            After finishing my studies, I lacked something intelectually
            challenging. I discovered coding thanks to a friend. I first started
            learning C to see if it was for me. I fell in love with coding and
            got into beCode.
          </p>
          <Button onClick={downloadCV}>Download my CV</Button>
        </div>
        <ul
          className="py-8 space-y-4 px-4 md:px-8 lg:border-l-2 border-light flex justify-center flex-col"
          id="contact"
        >
          <li className="text-xs-sub lg:text-sub ">Get in Touch</li>
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
