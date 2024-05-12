import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './font/stylesheet.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tech from './components/Tech';
import Brands from './components/Brands';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { FC } from "react"

const App: FC = () => {

  return (
    <>
      <motion.div
        className='bg-right-top'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className='container h-100'>
          <Navbar />
          <Hero />
        </div>
      </motion.div>
      <div className='body-container'>
        <Services />
        <Tech />
        <Brands />
        <Footer />
      </div>
    </>
  )
}

export default App
