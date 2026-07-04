import Container from "../../../ui/container";
import about from "../../../data/about";
import SectionHeading from "../../../ui/SectionHeading";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section
      id="about"
      className="
    grid-bg
    relative
    min-h-screen
    overflow-hidden
    "
    >
      <Container className="lg:flex gap-6">
        <SectionHeading
          className={"max-w-lg md:py-20"}
          subtitle={"ABOUT ME"}
          title={"Who Am I?"}
          description={
            "I'm an Electronics Engineering student with a passion for crafting responsive, accessible, and modern web experiences. I enjoy turning ideas into polished interfaces using React and Tailwind CSS."
          }
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-2xl lg:max-w-full lg:max-h-72">
          {about.map((aboutItem) => (
            <AboutCard key={aboutItem.id} about={aboutItem} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
