import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './Blog'
import Content from './Content'

function App() {

  return (
    <>
     <Navbar/>
     <div className="bg-indigo-200 w-full h-screen">
      <Hero/>
     </div>
     <div className="bg-indigo-200 h-full w-full">
      <Blog/>
     </div>
     <div>
      <Content/>
      </div>
    </>
  )
}

export default App
