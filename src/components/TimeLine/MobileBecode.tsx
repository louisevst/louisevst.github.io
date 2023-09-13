import Card from "../Card";
import IconButton from "../IconButton";
import projects from "../../utils/projects";

const MobileBecode = () => {
  return (
    <Card
      key="3"
      title="Web Developement"
      sub="BeCode, Bruxelles"
      text="Dec. 2022 - June 2023"
      color="blue"
      click="xxx"
    >
      <p className="max-w-lg pb-10 pt-4">
        Starting an exciting journey, I discovered web development at BeCode.
        From December 2022 to June 2023, I embraced the self-learning approach
        that BeCode is renowned for—a dynamic, collaborative environment where
        we collectively grow through hands-on projects. I gained knowledge of
        foundational concepts like using a mobile first strategy, developing
        responsive websites, and considering modularity and scalability.
      </p>
      <div className="space-y-2 w-full flex flex-col pr-8">
        {projects.map((project) => (
          <IconButton key={project.id} name={project.title} type="project" />
        ))}
      </div>
    </Card>
  );
};

export default MobileBecode;
