import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './font/stylesheet.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tech from './components/Tech';

function App() {

  return (
    <>
      <div className='bg-right-top'>
        <div className='container h-100'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className='body-container'>
        <Services />
        <Tech />

      </div>
    </>
  )
}

export default App
