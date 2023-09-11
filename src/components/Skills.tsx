import vue from "../assets/vue.svg";
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import typescript from "../assets/typescript.svg";
import git from "../assets/git.svg";

export default function Skills() {
  return (
    <ul className="lg:py-2 py-4 overflow-auto whitespace-nowrap flex justify-start lg:justify-center items-center space-x-2 border-y-2 border-light">
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={js} />
        <p>JavaScript</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={react} />
        <p>React</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={typescript} />
        <p>TypeScript</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={vue} />
        <p>Vue</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={figma} />
        <p>Figma</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={html} />
        <p>HTML</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={css} />
        <p>CSS</p>
      </li>
      <li className="flex items-center px-4">
        <img className="w-8 md:w-10 pr-2" src={git} />
        <p className="pr-4">Git</p>
      </li>
    </ul>
  );
}
