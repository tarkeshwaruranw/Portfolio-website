import Navbar from './components/layout/Navbar'

import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Projects from './components/sections/Projects/Projects'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
