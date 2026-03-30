import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className='mt-20 py-25 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center space-y-3'>
                <h1 className='font-extrabold text-5xl'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>

                <div className='flex justify-center gap-3'>
                <button className='btn rounded-4xl text-purple-400'>Explore Products</button>
                <button className='btn rounded-4xl text-white bg-gradient-to-r from-blue-700 to-purple-600 '>View Pricing</button>
                </div>

                <p>14-day free trial • No credit card required • Cancel anytime</p>

            </div>
        </div>
    );
};

export default Workflow;