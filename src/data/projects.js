import taskManager from "/src/assets/images/task-manager-app-image.jpg"
import image1 from "/src/assets/images/image.png"
import image2 from "/src/assets/images/desktop-design.jpg"

const projects = [
  {
    id: 1,
    title: "Task Manager",
    image: `${taskManager}`,
    description: "An interactive task manager built to organize daily routines. Users can instantly add new tasks, mark items complete, and filter views by priority status.",
    highlights: [
      "CRUD operations",
      "Local Storage",
      "Responsive Design"
    ],
    techStack: [
      "React",
      "Tailwind CSS"
    ],
    github: "https://github.com/tarkeshwaruranw/Task-Manager-App-React",
    live: "https://task-manager-app-react-nine.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Weather App",
    image: `${image2}`,
    description: "",
    highlights: [
      "Local Storage",
      "Responsive Design"
    ],
    techStack: [
      "React",
      "Tailwind CSS"
    ],
    github: "",
    live: "",
    featured: false
  },
  {
    id: 3,
    title: "project 3",
    image: `${image1}`,
    description: "",
    highlights: [
      "CRUD operations",
      "Local Storage",
      "Responsive Design"
    ],
    techStack: [
      "React",
      "Tailwind CSS"
    ],
    github: "",
    live: "",
    featured: false
  },
]

export default projects