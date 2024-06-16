import Rootlayout from "./Layout/Rootlayout";
import {Route,Routes}from "react-router-dom"
// import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App(){
  return(
    <>
    <Rootlayout>
      <Routes>
        {/* <Route path="/" element={<Hero/>}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </Rootlayout>
    </>
  )
}