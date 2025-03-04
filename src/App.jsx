import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Home"

import ProductContext from "./context/ProductContext"
import { useState } from "react"
import Cart from "./pages/Cart"

const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true);

  const addToCart = (product) => {
    setCart([...cart, product])
    alert("Product added to cart")
  }
 const removeFromCart = (product) => {
  setCart(cart.filter(item => item.id !== product.id))
  alert("Product removed from cart")
  }
  return (
    <>

    <ProductContext.Provider value={{products, setProducts, cart, addToCart, loading, setLoading, removeFromCart}}>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    </ProductContext.Provider>
       
                
    </>
  )
}

export default App

