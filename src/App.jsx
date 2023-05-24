import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './Blog'
import Content from './Content'
import Cta from './Cta'
import Footer from './Footer'

function App() {

  return (
    <>
     <Navbar/>
     <div>
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
        <Footer/>
      </div>
    </>
  )
}

export default App
