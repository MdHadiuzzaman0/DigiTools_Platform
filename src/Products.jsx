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
            <h1 className='text-5xl font-extrabold mt-15 text-center'>Premium Digital Tools</h1>
            <h3 className='text-center mt-3'>Choose from our curated collection of premium digital products designed <br/>  to boost your productivity and creativity.</h3>
            
            <div className='w-68  mx-auto rounded-2xl mt-15 font-bold text-lg border-0 shadow-sm p-1'>
                <button onClick={btnActive} className={` ${isActive ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white" : "bg-white"} px-6 py-1 rounded-2xl`}>Products</button>
                <button onClick={btnActive} className={` ${isActive ? "bg-white" : "bg-gradient-to-r from-blue-700 to-purple-700 text-white"} px-8 py-1 rounded-2xl`}>Cart ({selected.length})</button>
            </div>
     
            {isActive ? <Product products={products} handleSelected={handleSelected} selected={selected} coin={coin} setCoin={setCoin}></Product> : <Cart selected={selected} setSelected={setSelected} coin={coin} setCoin={setCoin}></Cart>}
        </div>
    );
};

export default Products;