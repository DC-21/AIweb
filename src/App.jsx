import './App.css'
import Navbar from './components/Navbar'
import Hepa from './components/Hepa'

function App() {

  return (
    <>
     <Navbar/>
     <div className="bg-indigo-500 w-full h-screen">
      <Hepa/>
     </div>
    </>
  )
}

export default App
