import visibility from "../assets/visibility.svg";
import work from "../assets/work.svg";
import school from "../assets/school.svg";

interface props {
  name: string;
  type?: string;
  to?: string;
}

const ProjectButton: React.FC<props> = ({ name, type, to }) => {
  const handleExternalRedirect = () => {
    window.open(to);
  };

  const iconClass = `w-8 mr-4`;

  const iconSrc =
    type === "project" ? visibility : type === "work" ? work : school;
  return (
    <button
      onClick={type === "project" ? handleExternalRedirect : undefined}
      className="flex items-center border-b border-current"
    >
      <img src={iconSrc} alt="See Project" className={iconClass} />
      {name}
    </button>
  );
};

export default ProjectButton;
