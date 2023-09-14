import vue from "../assets/vue.svg";
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import typescript from "../assets/typescript.svg";
import git from "../assets/git.svg";

const Skills = () => {
  return (
    <ul className="lg:py-2 py-4 overflow-auto whitespace-nowrap flex justify-start lg:justify-center items-center space-x-2 border-y-2 border-light">
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={js} />
        <h3>JavaScript</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={react} />
        <h3>React</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={typescript} />
        <h3>TypeScript</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={vue} />
        <h3>Vue</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={figma} />
        <h3>Figma</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={html} />
        <h3>HTML</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={css} />
        <h3>CSS</h3>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={git} />
        <h3 className="pr-4">Git</h3>
      </li>
    </ul>
  );
};
export default Skills;
