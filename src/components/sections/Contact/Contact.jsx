import Container from "../../../ui/Container";
import SectionHeading from "../../../ui/SectionHeading";
import Button from "../../../ui/Button";

import contact from "../../../data/contact";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <section id="contact" className="grid-bg relative overflow-hidden py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <SectionHeading
              subtitle="LET'S CONNECT"
              title="Let's Build Something Together"
              description="Whether you're looking for an intern, a frontend developer, or simply want to discuss ideas, I'd love to hear from you."
            />

            <a href="/resume.pdf" download>
            <Button className="text-sm mt-10">Download Resume</Button>
          </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {contact.map((item) => (
              <ContactItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
