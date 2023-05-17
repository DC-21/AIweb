import './App.css'
import Navbar from './components/Navbar'
import Hepa from './components/Hepa'
import Blog from './Blog'

function App() {

  return (
    <>
     <Navbar/>
     <div className="bg-indigo-200 w-full h-screen">
      <Hepa/>
     </div>
     <div className="bg-indigo-200 h-full w-full">
      <Blog/>
     </div>
    </>
  )
}

export default App
