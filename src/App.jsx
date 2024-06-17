import { useState } from 'react'
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Banner from "./Components/Banner"
import AppStore from './Components/AppStore'
import Testimontial from './Components/Testimontial'
import Footer from "./Components/Footer"


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<Navbar />
<Hero />
<Services classname="" />
<Banner/>
<AppStore />
<Testimontial />
<Footer/>
  </>

  )
}

export default App 
