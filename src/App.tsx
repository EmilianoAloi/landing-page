import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './font/stylesheet.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  return (
    <>
      <div className='container h-100'>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
