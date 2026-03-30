import { Suspense, use, useState } from 'react'
import './App.css'
import Products from './Products'
import Navbar from './Navbar'
import Hero from './Hero'
import Rating from './Rating'

const productRes=fetch("./Data.json").then(res => res.json())

function App() {

const products = use(productRes)
const [coin, setCoin] = useState(0)

    const [selected, setSelected] = useState([])
    function handleSelected(product){
        const isExit = selected.find(selectedCard => selectedCard.name === product.name)
        if(!isExit){
            setSelected([...selected, product])
            setCoin(coin + product.price)
        }
         
    }

  return (
    <>
    <Navbar coin={coin} setCoin={setCoin} selected={selected}></Navbar>
      {/* <Hero></Hero> */}
      <Rating></Rating>
     {/* <Suspense fallback={<span className="loading loading-infinity loading-3xl block w-20 mx-auto"></span>}>
     <Products products={products} coin={coin} setCoin={setCoin} selected={selected} setSelected={setSelected} handleSelected={handleSelected}></Products>
     </Suspense> */}
    </>
  )
}

export default App
