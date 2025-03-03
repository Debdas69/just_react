import { useState } from "react"


const Navbar = ({setProduct}) => {

  const[searchValue, setSearchValue] = useState('')

  const searchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
    const data = await res.json()
    setProduct(data.products)
    console.log(data.products)
  }

  return (
    <nav className="">

      <div className="flex items-center justify-evenly p-2  shadow-md">
       <div><h3 className="font-bold text-xl">Logo</h3></div>
       <div>
        <input onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder="Search here" className=" border-2 border-gray-300 rounded-md px-2 py-1 w-[500px]"/>
        <button onClick={searchProduct} className="bg-slate-500 outline-none border-2 hover:border-purple-500 ml-2 py-1 px-2 rounded-md">Search</button>
       </div>
       <ul className="font-bold text-xl flex items-center gap-7 justify-between">
        <li>Home</li>
        <li>Cart</li>
       </ul>
      </div>

    </nav>
  )
}

export default Navbar