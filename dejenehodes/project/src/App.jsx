
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Coffee from "./Coffee";
import Art from "./Art";
import Tour from "./Tour";
import Contact from "./Contact";



function App() {


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/art" element={<Art />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}>


          
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
