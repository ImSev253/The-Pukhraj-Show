import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Guests from "./components/Guests.jsx";
import Podcast from "./components/Podcast.jsx";
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import HandlesPage from "./components/HandlesPage.jsx";

const getPathname = () => {
  if (typeof window === 'undefined') {
    return '/'
  }

  const pathname = window.location.pathname.replace(/\/+$/, '')
  return pathname || '/'
}

const App = () => {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(getPathname())
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const navigate = (nextPath) => {
    if (nextPath === window.location.pathname) {
      setPathname(getPathname())
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(getPathname())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isHandlesRoute = pathname === '/handles'

  return (
    <div className='min-h-screen grid-pattern dark:grid-pattern-light'>
      <AnimatedBackground />
      <Header currentPathname={pathname} onNavigate={navigate} />
      <main>
        {isHandlesRoute ? (
          <HandlesPage />
        ) : (
          <>
            <Hero />
            <Guests />
            <Podcast />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer currentPathname={pathname} onNavigate={navigate} />
    </div>
  )
}

export default App
