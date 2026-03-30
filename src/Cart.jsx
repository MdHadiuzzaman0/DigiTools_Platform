import { CiShoppingCart } from "react-icons/ci";
import React from "react";

const Cart = ({ selected, setSelected, coin, setCoin }) => {
  function handleDlt(clickedCard) {
    const updatedSelectedList = selected.filter(
      (selectedCard) => selectedCard.name !== clickedCard.name,
    );
    setSelected(updatedSelectedList);
    setCoin(coin - clickedCard.price);
  }

  function handleProceed() {
    setSelected([]);
    setCoin(0);
  }
  return (
    <div>
      <h3 className="mx-55 mt-10 font-semibold text-2xl">
        Your Cart ({selected.length})
      </h3>

      {selected.length === 0 && (
        <div className="mx-55 mt-5 p-6 shadow-md bg-base-200">
          <CiShoppingCart size={165} className="ml-109" />
          <h1 className="font-bold text-3xl text-center">Your cart is empty</h1>
        </div>
      )}

      {selected.map((card) => (
        <div className="flex justify-between items-center mx-55 mt-5 gap-5 shadow-md rounded-xl bg-base-200 p-6" key={card.id}>
          <div className="flex gap-3 w-90">
            <img
              src="./products/portfolio.png"
              alt=""
              className="p-3 rounded-4xl bg-white"
            />
            <div>
              <h3 className="font-bold text-2xl">{card.name}</h3>
              <h3 className="font-semibold text-lg">{card.price}</h3>
            </div>
          </div>

          <button
            onClick={() => handleDlt(card)}
            className="font-bold text-xl btn text-red-400"
          >
            Remove
          </button>
        </div>
      ))}

      {selected.length > 0 && (
        <div>
          <div className="mx-55 mt-5 p-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-3xl">Total</h1>
              <h1 className="font-bold text-4xl">$ {coin} </h1>
            </div>
          </div>

          <div className="mx-55 mt-5 py-4 rounded-4xl shadow-md bg-base-200 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <button
              onClick={handleProceed}
              className="mx-auto w-275 font-bold text-2xl"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
