import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <>
     <Navbar/>
     <div className="bg-purple-400 w-full h-screen">
      <Hero/>
     </div>
    </>
  )
}

export default App
