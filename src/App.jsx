import './App.css'
import Navbar from './components/Navbar'
import Hepa from './components/Hepa'

function App() {

  return (
    <>
     <Navbar/>
     <div className="bg-purple-400 w-full h-screen">
      <Hepa/>
     </div>
    </>
  )
}

export default App
