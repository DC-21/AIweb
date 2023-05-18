import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './Blog'
import Content from './Content'
import Cta from './Cta'

function App() {

  return (
    <>
     <Navbar/>
     <div className="bg-indigo-200 w-full h-screen rounded">
      <Hero/>
     </div>
     <div className="bg-white h-full w-full">
      <Blog/>
     </div>
     <div>
      <Content/>
      </div>
      <div>
        <Cta/>
      </div>
    </>
  )
}

export default App
