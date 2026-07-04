import Container from "../../../ui/Container";
import SectionHeading from "../../../ui/SectionHeading";
import skills from "../../../data/skills";
import SkillCard from "./SkillCard";
import { delay, motion } from "framer-motion";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delay:0.2
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      grid-bg
      relative
      min-h-screen
      overflow-hidden
      py-10 md:py-0
      "
    >
      <Container className="flex flex-col gap-12">
        <SectionHeading
          subtitle={"Skills"}
          title={"Technologies I Work With"}
          description={
            "A collection of the technologies I use to build responsive, modern, and user-friendly web applications."
          }
        />
        <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        className="grid grid-cols-1 mx-auto gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
          </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
