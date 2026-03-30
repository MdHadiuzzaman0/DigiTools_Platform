import React from "react";

const Navbar = ({coin, selected}) => {
    console.log(selected);
    console.log(coin);
    
    
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-19 grid grid-cols-3">
        <div>
          <h1 className="btn-ghost text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">DigiTools</h1>
        </div>

        <div className="flex gap-8 justify-center font-semibold text-md">
            <h3>Products</h3>
            <h3>Features</h3>
            <h3>Pricing</h3>
            <h3>Testimonials</h3>
            <h3>FAQ</h3>
        </div>

        <div className="flex items-center gap-4 justify-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item text-red-400 font-bold">{selected.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{selected.length} Items</span>
                <span className="text-info ">Subtotal: ${coin}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-md">Login</h3>
          <button className="font-semibold text-xl bg-amber-500 px-3 py-2 text-white rounded-3xl bg-gradient-to-r from-blue-700 to-purple-700">Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
