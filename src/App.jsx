import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import Testimonial from './Components/Testimonial'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Skills />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
