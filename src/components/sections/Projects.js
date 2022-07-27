import Project from "../projects/Project.js";

export default function Projects(props) {
  return (
    <>
      {props.projectsQuery &&
        props.projectsQuery.map((project, index) => {
          const bgColor = project.attributes.MainColor;

          return (
            <Project
              key={index}
              title={project.attributes.Title}
              description={project.attributes.Description}
              baseline={project.attributes.Baseline}
              src={project.attributes.MainPicture.data.attributes.url}
              mainColor={project.attributes.MainColor}
              url={project.attributes.URL}
            />
          );
        })}
    </>
  );
}