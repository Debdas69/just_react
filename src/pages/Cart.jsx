import { SkewLoader } from "react-spinners";
import ProductContext from "../context/ProductContext"
import { useContext } from "react";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);
 
  return (
    <div>
     
            
      <div className="lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mb-7 mt-5">
        
      { cart.length == ""? <div className="lg:w-[65vw] lg:h-[30vw] flex justify-center items-center "><SkewLoader color="#000" />Nothing to show</div> :
        cart.map((product, index) => {
          return(
            <div key={index}  className="bg-gray-300 mx-auto w-[80vw] lg:w-[20vw] rounded-md shadow-md overflow-hidden">
            <img src={product.thumbnail} className="rounded-md rounded-bl-none rounded-br-none hover:scale-105 transition-all" alt="" />
            <div className="p-2">
              <h3 className="font-bold text-gray-600">{product.title}</h3>
              <p className="text-xs">{product.description}</p>
              <div className="flex items-center justify-between my-1">
              <p className="font-bold">{product.price}</p>
              <button 
              onClick={()=>{removeFromCart(product)}} 
              className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 border-2 border-transparent hover:border-gray-700 font-bold px-3 rounded-md">Remove</button>
              </div>
            </div>
          </div> 
          )
        })
      }  
                  
             </div>
        
    </div>
  )
}

export default Cart