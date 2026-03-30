import React from "react";

const Rating = () => {
  return (
    <div>
      <div className="h-50  text-white bg-gradient-to-r from-blue-700 to-purple-700 mt-20">
        <div className="flex justify-between border py-14 px-60">
          <div>
            <h1 className="font-extrabold text-5xl">50K+</h1>
            <h3 className="mt-4 opacity-90">Active Users</h3>
          </div>
          
          <p className="h-22 border"></p>

          <div>
            <h1 className="font-extrabold text-5xl">200+</h1>
            <h3 className="mt-4 ml-2 opacity-90">Premium Tools</h3>
          </div>

          <p className="h-22 border"></p>
          
          <div>
            <h1 className="font-extrabold text-5xl">4.9</h1>
            <h3 className="mt-4 ml-4 opacity-90">Rating</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
