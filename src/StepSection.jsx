import React from 'react';

const StepSection = ({step}) => {
    return (
        <div>
            <div className='px-39 py-30 bg-[#F1F1F1]/60'>
            <h1 className='text-5xl font-extrabold text-center'>Get Started in 3 Steps</h1>
            <h3 className='text-center mt-3 mb-9'>Start using premium digital tools in minutes, not hours.</h3>

            <div className='grid grid-cols-3 gap-15'>
            {step.map(singleStep => 
            
                <div className=" bg-base-100 w-96 shadow-md  border border-base-300 space-y-4 px-10 py-5 flex flex-col items-center rounded-lg">
                    <h3 className='text-white rounded-4xl py-1 px-2 bg-gradient-to-r from-blue-700 to-purple-700 ml-75'>{singleStep.step}</h3>
                    <img src={singleStep.image} className="w-24 bg-[#627382]/30 p-5 rounded-4xl" alt="" />
                    <h1 className='text-2xl font-bold'>{singleStep.title}</h1>
                    <p className='text-center'>{singleStep.description}</p>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};

export default StepSection;