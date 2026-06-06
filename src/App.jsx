import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Guests from "./components/Guests.jsx";
import Podcast from "./components/Podcast.jsx";
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";



const App = () => {
  return (
    <div className='min-h-screen grid-pattern dark:grid-pattern-light'>
    <AnimatedBackground/>
    <Header/>
    <main>

      <Hero />
      <Guests />
      <Podcast/>
      <About/>
      <Contact/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
