/* eslint-disable react/prop-types */

export const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <img
          key={index}
          className="project"
          src={project.img}
          alt={project.category}
        />
      ))}
    </div>
  );
};