import { Navbar } from "reactstrap"
import Header from "./Header"

import Mainbanner from "./Home/Mainbanner"
import Features from "./Home/Features"
import Trending from "./Home/Trending"
import Mostplayed from "./Home/Mostplayed"
import Categories from "./Home/Categories"
import Cat from "./Home/Cat"
import Footer from "./Home/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
     <Mainbanner/>
     <Features/>
     <Trending/>
     <Mostplayed/>
     <Categories/>
     <Cat/>
     <Footer/>
    </div>
  )
}

export default App

