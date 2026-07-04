import Container from "../../../ui/container";
import SectionHeading from "../../../ui/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";

const featuredProject = projects.find((project) => project.featured);

const otherProjects = projects.filter((project) => !project.featured);

const Projects = () => {
  return (
    <section id="projects" className="grid-bg relative min-h-screen overflow-hidden py-6">
      <Container className="lg:flex gap-8">
        <div className="w-full py-16">
          <SectionHeading
            className="max-w-lg gap-8"
            subtitle={"my creations"}
            title={"Making Ideas Real"}
            description={
              "A selection of projects where I combined design, React, and modern frontend practices to solve real-world problems."
            }
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <FeaturedProject project={featuredProject} />
          <ProjectCard projects={otherProjects} />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
