'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import educationImage3 from '../public/images/programs/3.jpg';

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerw" id="homeSection">
                <header>
                    <div className="container">
                        <div className="logo">
                            <Image 
                                src={logoImage} 
                                height={100} 
                                alt="Foundation Logo" 
                                className="rounded-md"/>
                        </div>

                        <nav className="pt-5 relative">
                            <div className="flex items-center justify-between px-4 py-3 md:flex md:space-x-4">
                                <div className="flex justify-between items-center w-full md:w-auto">
                                {!isOpen && (
                                    <button
                                        className="md:hidden text-gray-900 focus:outline-none relative top-4 right-4 z-50"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                        </svg>
                                    </button>
                                )}
                                </div>
                                <ul className={`mt-4 md:mt-0 md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                                    <li className="dropdown relative">
                                        <a href="/" className="dropbtn link rounded-md">HOME</a>
                                       
                                    </li>
                                    <li className="dropdown relative">
                                        <a href="/about" className="dropbtn link">ABOUT</a>
                                    </li>
                                    <li className="dropdown relative">
                                        <a href="/wedo" className="dropbtn link bg-[#1f8cad]">SERVICES</a>
                                       
                                    </li>
                                    <li>
                                        <Link href="/joinus" className="link block px-4 py-2 text-gray-700">CONTACT</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="link bg-amber-700 rounded-lg block px-4 py-2 text-white">202-555-7890</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}

                <div className="container">
                    <h1>our services</h1>
                    <p className="text-lg">
                    
                    </p>
                    
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container" id="joinusSection">
                <br /><br />
            <div class="mx-4 xl:mx-20 flex justify-between text-lg xl:flex-row flex-col xl:space-x-10 space-y-4 xl:space-y-0">
                <div className="w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] mx-auto flex flex-col items-center space-y-3">
                    <Image 
                        className="rounded1 w-full h-[200px] md:h-[250px] lg:h-[300px] hidden xl:flex" 
                        src={educationImage3}
                    />
                    
                </div>
                    <div className="space-y-3">
                        <p className="text-lg">
                        From $199
                        </p>
                        
                        <p className="text-lg">
                        Web Design
                        </p>
                       
                        
                        <p className="text-lg ">
                        Tell them exactly what this service will do for them.
                        </p>
                        
                        <p className="text-lg">
                        Focus on the direct benefits to the user, rather than just listing the features of your service. You can also address any objections you think they might have.
                        </p>

                        <p className="text-lg ">
                        We make beautiful websites that get you leads and sales. 
                        </p>

                        <p className="text-lg ">
                        Keep your target audience in mind, and keep it simple.
                        </p>
                        {/* <br /> */}
                        <button class="mb-5 rounded-lg bg-green-500 hover:bg-[#197996] px-4 py-2">
                            <Link href="/joinus">
                                <span class="text-lg text-white">Get A Quote</span>
                            </Link>
                        </button>
                    </div>

                </div>    
                {/* </div> */}

                <br /><br /><br />
            <div class="mx-4 xl:mx-20 flex justify-between text-lg xl:flex-row flex-col xl:space-x-10 space-y-4 xl:space-y-0">
                <div className="w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] mx-auto flex flex-col items-center space-y-3">
                    <Image 
                        className="rounded1 w-full h-[200px] md:h-[250px] lg:h-[300px] hidden xl:flex" 
                        src={educationImage3}
                    />
                    
                </div>
                    <div className="space-y-3">
                        <p className="text-lg">
                        From $199
                        </p>
                        
                        <p className="text-lg">
                        Graphic Design
                        </p>
                       
                        
                        <p className="text-lg ">
                        Tell them exactly what this service will do for them.
                        </p>
                        
                        <p className="text-lg">
                        Focus on the direct benefits to the user, rather than just listing the features of your service. You can also address any objections you think they might have.
                        </p>

                        <p className="text-lg ">
                        We make beautiful websites that get you leads and sales. 
                        </p>

                        <p className="text-lg ">
                        Keep your target audience in mind, and keep it simple.
                        </p>
                        {/* <br /> */}
                        <button class="mb-5 rounded-lg bg-green-500 hover:bg-[#197996] px-4 py-2">
                            <Link href="/joinus">
                                <span class="text-lg text-white">Get A Quote</span>
                            </Link>
                        </button>
                    </div>

                </div>    
                {/* </div> */}

                <br /><br /><br />
            <div class="mx-4 xl:mx-20 flex justify-between text-lg xl:flex-row flex-col xl:space-x-10 space-y-4 xl:space-y-0">
                <div className="w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] mx-auto flex flex-col items-center space-y-3">
                    <Image 
                        className="rounded1 w-full h-[200px] md:h-[250px] lg:h-[300px] hidden xl:flex" 
                        src={educationImage3}
                    />
                    
                </div>
                    <div className="space-y-3">
                        <p className="text-lg">
                        From $199
                        </p>
                        
                        <p className="text-lg">
                        Content Creation
                        </p>
                       
                        
                        <p className="text-lg ">
                        Tell them exactly what this service will do for them.
                        </p>
                        
                        <p className="text-lg">
                        Focus on the direct benefits to the user, rather than just listing the features of your service. You can also address any objections you think they might have.
                        </p>

                        <p className="text-lg ">
                        We make beautiful websites that get you leads and sales. 
                        </p>

                        <p className="text-lg ">
                        Keep your target audience in mind, and keep it simple.
                        </p>
                        {/* <br /> */}
                        <button class="mb-5 rounded-lg bg-green-500 hover:bg-[#197996] px-4 py-2">
                            <Link href="/joinus">
                                <span class="text-lg text-white">Get A Quote</span>
                            </Link>
                        </button>
                    </div>

                </div>    
                </div>
            </section>
            {/* About section ends here */}
            
            <section className="join" id="joinSection">
                <div className="container">
                    <div className="joinTitle">
                    You are welcome to SDA Bunga Central District
                        {/* & <span>SAVE LIVES</span> */}
                    </div>
                    <p className="text-lg">
                    Below is the Link to Register for our Camp Meeting
                    </p>
                    {/* <button className="joinNow rounded">
                    <Link href="/joinus">JOIN US </Link>
                    </button> */}
                    <button className="adoptBtn rounded">
                       <Link href="#">Register Now!</Link>
                    </button>
                </div>
            </section>
            {/* Join us section ends here */}

            <footer className="">
                <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">

                    {/* NewsLetter container ends here */}

                    <div className="linksContainer">
                        <div className="title">
                            Useful Links
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="link">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="link">
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link href="/wedo" className="link">
                                    SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link href="/joinus" className="link">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* LinksContainer ends here */}

                    <div className="newsLetterContainer md:w-96">
                        <Image src={logoImage} 
                        width={80}
                        className="rounded-md pb-5" 
                        alt="Logo Image"/>
                        {/* <p>
                            For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
                        </p>
                        <input 
                            type="text" 
                            placeholder="Enter your email address" /> */}
                    </div>

                    <div className="connectContainer space-y-6">
                        <div className="title flex items-center">
                            follow us 
                            
                        </div>
                
                        <span>© 2024 Hope Starter Design</span>
                        <br />
                        
                    </div>
                    {/* ConnectContainer ends here */}

                </div>
            </footer>

        </div>
    )
}