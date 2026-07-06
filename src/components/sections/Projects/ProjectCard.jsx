import Button from "../../../ui/Button";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
const ProjectCard = ({ projects }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 text-white ">
      {projects.map((project) => (
        <div
          key={project.id}
          className=" md:max-w-3xl bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border-2 border-indigo-400/10 hover:border-indigo-200/10 hover:scale-105 hover:-translate-y-0.5  transition-all duration-300 group"
        >
          <div className="w-full flex flex-col justify-between items-center">
            <div className="overflow-hidden">
              <img
                className="w-full
        aspect-video
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105"
                src={project.image}
                alt="project picture"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2 py-2">
              <h2 className="text-lg font-bold text-center">{project.title}</h2>
              <div className="flex gap-2 text-xs">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="flex flex-nowrap gap-2">
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </Button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="flex flex-nowrap gap-2">
                    <FaGithub />
                    <span>Github</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
