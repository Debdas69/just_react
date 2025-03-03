import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Home"
import { useState } from "react"


const App = () => {
  const [product, setProduct] = useState([])

  return (
    <>

        <BrowserRouter>
        <Navbar setProduct={setProduct}/>
        <Routes>
          <Route path="/" element={<Home product={product} setProduct={setProduct}/>}/>
        </Routes>
        </BrowserRouter>

        
       
      
    </>
  )
}

export default App

