import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const Products = ({products, coin, setCoin, selected, setSelected, handleSelected}) => {
    //  const products = use(productRes)

     const [isActive, setIsActive]= useState(true)
    function btnActive(){
        setIsActive(!isActive)
    }

    // const [coin, setCoin] = useState(0)

    // const [selected, setSelected] = useState([])
    // function handleSelected(product){
    //     const isExit = selected.find(selectedCard => selectedCard.name === product.name)
    //     if(!isExit){
    //         setSelected([...selected, product])
    //         setCoin(coin + product.price)
    //     }
         
    // }

    return (
        <div>
            <div className='w-68 mt-20 mx-auto rounded-2xl my-6 font-bold text-lg border-0 shadow-sm p-1'>
           <button onClick={btnActive} className={` ${isActive ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white" : "bg-white"} px-6 py-1 rounded-2xl`}>Products</button>
           <button onClick={btnActive} className={` ${isActive ? "bg-white" : "bg-gradient-to-r from-blue-700 to-purple-700 text-white"} px-8 py-1 rounded-2xl`}>Cart ({selected.length})</button>
            </div>

            {isActive ? <Product products={products} handleSelected={handleSelected} selected={selected} coin={coin} setCoin={setCoin}></Product> : <Cart selected={selected} setSelected={setSelected} coin={coin} setCoin={setCoin}></Cart>}
        </div>
    );
};

export default Products;