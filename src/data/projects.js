import taskManager from "/src/assets/images/task-manager-app-image.jpg"
import weatherApp from "/src/assets/images/weather-app-preview.png"
import ecommerce from "/src/assets/images/ecommerce-app-preview.png"

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
    image: `${weatherApp}`,
    description: "",
    highlights: [
      "Fetching APIs",
      "Responsive Design"
    ],
    techStack: [
      "React",
      "Tailwind CSS"
    ],
    github: "https://github.com/tarkeshwaruranw/Weather-App",
    live: "https://weather-app-tarkeshwar.vercel.app/",
    featured: false
  },
  {
    id: 3,
    title: "Ecommerce Website",
    image: `${ecommerce}`,
    description: "",
    highlights: [
      "Responsive Design",
      "Frontend"
    ],
    techStack: [
      "React",
      "Tailwind CSS"
    ],
    github: "https://github.com/tarkeshwaruranw/Ecommerce-App-React",
    live: "",
    featured: false
  },
]

export default projects