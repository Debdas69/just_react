import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"

const Home = ({product, setProduct}) => {

  const [loading, setLoading] = useState(true);

    const getProducts = async () => {
     const res = await fetch('https://dummyjson.com/products')
     const data = await res.json()
     setProduct(data.products)
     setLoading(false)
      }
    
  useEffect(() => {
    getProducts();
   }, [])
  return (
    <>
 
      <div className="lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mb-7 mt-5">
{ loading? <div className="w-[65vw] h-[30vw] flex justify-center items-center"><PropagateLoader color="#36d7b7" /></div> :
  product.map((count, index) => {
    return(
      <div key={index}  className="bg-gray-300 mx-auto w-[80vw] lg:w-[20vw] rounded-md shadow-md overflow-hidden">
      <img src={count.thumbnail} className="rounded-md rounded-bl-none rounded-br-none hover:scale-105 transition-all" alt="" />
      <div className="p-2">
        <h3 className="font-bold text-gray-600">{count.title}</h3>
        <p className="text-xs">{count.description}</p>
        <div className="flex items-center justify-between my-1">
        <p className="font-bold">{count.price}</p>
        <button className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 border-2 border-transparent hover:border-gray-700 font-bold px-3 rounded-md">Buy</button>
        </div>
      </div>
    </div> 
    )
  })
}  
            
       </div>

    </>
  )
}

export default Home