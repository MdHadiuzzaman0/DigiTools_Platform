import { Check } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const SingleCard = ({ product, handleSelected, selected }) => {

    function handleBuy(){
      toast.success("Added to cart", {autoClose: 1500,})
      handleSelected(product)
    }

const isSelected = selected.find(selectedCard => selectedCard.name === product.name)


  return (
    <div>
      <div className="card bg-base-100 w-86 shadow-sm border border-base-300">
        <h3 className="mr-6 mt-6 ml-55 text-center">{product.tag === "Best Seller" ? <h3 className="bg-amber-200 text-amber-800 rounded-4xl font-bold">Best Seller</h3> : product.tag === "New" ? <h3 className="bg-green-200 text-green-500 rounded-4xl font-bold">New</h3> : product.tag === "Popular" ? <h3 className="bg-blue-200 text-blue-800 rounded-4xl font-bold">Popular</h3> : <h3 className="bg-red-200 text-red-800 rounded-4xl font-bold">Hot</h3>}</h3>

        <div className="card-body">
          {product.price === 29 ? <img src="./products/design-tool.png" alt="" className="w-7 my-2"/> : product.price === 49 ? <img src="./products/portfolio.png" alt="" className="w-7 my-2"/> : product.price === 19 ? <img src="./products/shopping-cart.png" alt="" className="w-7 my-2"/> : product.price === 79 ? <img src="./products/social-media.png" alt="" className="w-7 my-2"/> : product.price === 15 ? <img src="./products/writing.png" alt="" className="w-7 my-2"/> : product.price === 39 ? <img src="./products/download.png" alt="" className="w-7 my-2"/> : product.price === 25 ? <img src="./products/download3.png" alt="" className="w-9 my-1"/> : <img src="./products/operation.png" alt="" className="w-7 my-2"/>}
          
          <h2 className="card-title font-bold text-2xl">{product.name}</h2>
          <p className="font-semibold text-justify">{product.description}</p>
          <h3 className="my-3"><span className="font-bold text-xl">$ {product.price}</span>/{product.period}</h3>
          {product.features.map((feature, index) => (<ol key={index}><li><Check className="inline text-green-400"/> {feature}</li></ol>))}
          <button onClick={(handleBuy)} className="btn rounded-4xl text-white mt-3 bg-gradient-to-r from-blue-700 to-purple-700">{isSelected ? "Added to cart" : "Buy Now"}</button>
    
        </div>

      </div>
    </div>
  );
};

export default SingleCard;
