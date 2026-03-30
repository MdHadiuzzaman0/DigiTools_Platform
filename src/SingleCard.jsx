import { Check } from "lucide-react";
import React from "react";

const SingleCard = ({ product, handleSelected, selected }) => {

    function handleBuy(){
      handleSelected(product)
    }

const isSelected = selected.find(selectedCard => selectedCard.name === product.name)


  return (
    <div>
      <div className="card bg-base-100 w-86 shadow-sm border ">
        <h3 className="mr-6 mt-6 ml-55 text-center rounded-4xl border">{product.tag}</h3>

        <div className="card-body">
          <img src="./products/design-tool.png" alt="" className="w-7 my-2"/>
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
