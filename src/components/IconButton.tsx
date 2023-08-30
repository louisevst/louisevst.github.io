import visibility from "../assets/visibility.svg";
import add from "../assets/add.svg";

interface props {
  name: string;
  type?: string;
}

const ProjectButton: React.FC<props> = ({ name, type }) => {
  const iconSrc = type === "project" ? visibility : add;
  return (
    <button className="flex items-center border-b border-current">
      <img src={iconSrc} alt="See Project" className="w-8 mr-4" />
      {name}
    </button>
  );
};

export default ProjectButton;
