// App.jsx

import Navbar from '../src/components/Navbar'
import LandingPage from '../src/components/LandingPage'
import './App.css'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Copyright from './components/CopyRight'

function App() {
  
  return (
    <>
      <Navbar />
      <LandingPage />
      <Features />
      <Pricing />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
