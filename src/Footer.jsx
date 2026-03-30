import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className=' mx-auto py-20 px-49 bg-[#101727] text-white'>
                <div className='flex justify-between gap-15'>
                    <div className='w-4/12'>
                        <h1 className='text-4xl font-extrabold'>DigiTools</h1>
                        <p className='mt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Product</h3>
                        <p>Features <br />
                        Pricing <br />
                        Templates <br />
                        Integrations</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Compony</h3>
                        <p>About <br /> 
                        Blog <br />
                        Careers <br />
                        Press</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Resources</h3>
                        <p>Documentation <br />
                        Help Center <br />
                        Community <br />
                        Contact</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-xl mb-3'>Social Links</h3>
                        <div className='flex gap-3'>
                            <FaFacebookSquare />
                            <FaSquareInstagram />
                            <FaSquareXTwitter />
                        </div>
                    </div>
                </div>

                <hr className='mt-20 mb-10'/>

                <div className='flex justify-between'>
                    <h3>© 2026 Digitools. All rights reserved.</h3>

                    <div className='flex gap-6'>
                        <h3>Privacy Policy</h3>
                        <h3>Terms of Service</h3>
                        <h3>Cookies</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;