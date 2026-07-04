import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const contact = [
  {
  id: 1,
  title: "Email",
  value: "tarkeshwaruranw111@gmail.com",
  link: "mailto:tarkeshwaruranw111@gmail.com",
  icon: MdEmail,
  color: "text-red-500",
  copyable: true
},
{
  id: 2,
  title: "Phone",
  value: "+91 6265776636",
  link: "tel:+916265776636",
  icon: FaPhoneAlt,
  color: "text-green-500",
  copyable: true
},
{
  id: 3,
  title: "LinkedIn",
  value: "linkedin.com/in/tarkeshwar-uranw",
  link: "https://linkedin.com/in/tarkeshwar-uranw",
  icon: FaLinkedin,
  color: "text-blue-500",
  copyable: true
},
{
  id: 4,
  title: "GitHub",
  value: "github.com/tarkeshwaruranw",
  link: "https://github.com/tarkeshwaruranw",
  icon: FaGithub,
  color: "text-white",
  copyable: true
},

]
export default contact;