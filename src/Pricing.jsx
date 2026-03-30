import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='px-39 mt-20'>
            <h1 className='text-5xl font-extrabold mt-15 text-center'>Get Started in 3 Steps</h1>
            <h3 className='text-center mt-3 mb-9'>Start using premium digital tools in minutes, not hours.</h3>

            <div className='grid grid-cols-3'>
            stemapsingleStep  
            
                <div className=" bg-base-100 w-96 shadow-md  border border-base-300 space-y-4 px-10 py-5 flex flex-col items-center rounded-lg">
                    <h3 className='text-white rounded-4xl p-2 bg-gradient-to-r from-blue-700 to-purple-700 ml-75'>singleStep.step</h3>
                    <img src="" className="w-24 bg-[#627382]/30 p-4 rounded-4xl" alt="" />
                    <h1 className='text-2xl font-bold'>singleStep.title</h1>
                    <p>singleStep.description</p>
                </div>
            
            </div>
            </div>
        </div>
    );
};

export default Pricing;