import React from 'react';
import { Check } from "lucide-react";

const Pricing = ({pricing}) => {
    return (
        <div>
            <div className='px-39'>
            <h1 className='text-5xl font-extrabold mt-15 text-center'>Simple, Transparent Pricing</h1>
            <h3 className='text-center mt-3 mb-9'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</h3>

            <div className='grid grid-cols-3 gap-15'>
                {pricing.map(singleCard => 
                   <div className={`relative w-96 shadow-md border border-base-300  px-10 py-9 rounded-xl ${singleCard.plan_name === "Pro" ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white" : "bg-base-200"}`}>
                       
                       {singleCard.plan_name === "Pro" ?  <h3 className="absolute -top-3 left-30 bg-amber-200 text-amber-600 w-4/12 text-center rounded-4xl font-bold">Most Popular</h3> : ""}
                       <h3 className="font-bold text-2xl mt-5">{singleCard.plan_name}</h3>
                       <h3 className="mt-2">{singleCard.tagline}</h3>
                       <h3 className="my-5"><span className="font-bold text-3xl">$ {singleCard.price}</span> {singleCard.billing_cycle}</h3>

                       <div className='h-42 space-y-1'>
                       {singleCard.features.map((feature, index) => (<ol key={index}><li><Check className="inline text-green-400"/> {feature}</li></ol>))}
                       </div>

                       <button className={`btn rounded-4xl w-full mt-6 ${singleCard.button_text === "Start Pro Trial" ? "bg-base-200 text-purple-700" : "bg-gradient-to-r from-blue-600 to-purple-700 text-white"}`}>{singleCard.button_text}</button>
                   </div>)}
            
            </div>
            </div>
        </div>
    );
};

export default Pricing;