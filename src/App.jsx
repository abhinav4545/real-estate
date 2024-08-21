import React from 'react'
import  {DarkModeProvider} from './components/DarkModeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import  Services from './sections/Services'
import Clients from './sections/Clients'
import Contacts from './sections/Contacts'



const App = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Hero />
      <About />
      <PopularAreas />
      <Services />
      <Clients />
      <Contacts />
      <Footer />
    </DarkModeProvider>
  )
}

export default App;
