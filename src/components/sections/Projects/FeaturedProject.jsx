import Button from "../../../ui/Button";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const FeaturedProject = ({ project }) => {
  return (
    <div className="text-slate-300 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden hover:scale-[1.02] hover:translate-y-[-0.2]  transition-all duration-300">
      <div className="group">
        <div className="overflow-hidden">
          <img
            className="min-h-80 w-full
        aspect-video
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105"
            src={project.image}
            alt={`${project.title} preview`}
          />
        </div>
        <div className="flex flex-col justify-between gap-2 p-4">
          <h2 className="text-2xl text-white  font-bold text-center">{project.title}</h2>
            <p className="text-start text-sm">{project.description}</p>
          <div className="text-sm font-semibold flex gap-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-3 py-1 text-xs"
              >{`[ ${tech} ]`}</span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex flex-nowrap gap-2"><FiExternalLink /><span>Live Demo</span></Button>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex flex-nowrap gap-2"><FaGithub /><span>Github</span></Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
