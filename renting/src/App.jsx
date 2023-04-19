import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Service from "./Components/service/Service";
import Renting from "./Components/renting/Renting";
import Contact from "./Components/contact/Contact";
import SinglePage from "./Components/singlepage/SinglePage";


function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/renting" element={<Renting/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singlepage" element={<SinglePage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
 
}

export default App
