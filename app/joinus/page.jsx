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
            <div className="fullContainer bannerj" id="homeSection">
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
                                        <a href="/wedo" className="dropbtn link">SERVICES</a>
                                       
                                    </li>
                                    <li>
                                        <Link href="/joinus" className="link block px-4 py-2 text-gray-700 bg-[#1f8cad]">CONTACT</Link>
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
                    <h1>contact us</h1>
                    
                </div>
            </div>
            {/* Home section ends here */}
            <br /><br />
                <p className="text-center font-bold text-[40px]">
                We respond to all messages within 24 hours.
                </p>
                <br /><br /><br /> 
                
            <section className="fullContainer" id="aboutSection">
                <div className="container" id="joinusSection">
                
                <p className="text-center font-bold text-[40px]">
                Work with me online or in-person
                </p>
                <br /><br /><br />
                <div class="mx-4 xl:mx-20 flex justify-between text-lg xl:flex-row flex-col xl:space-x-10 space-y-4 xl:space-y-0">
                <div className="space-y-3">
                    <p className="text-lg ">
                    E-MAIL 
                    </p>
                    
                    <p className="text-lg">
                    contact@example.com 
                    </p>
                    
                    <br />
                    <p className="text-lg ">
                    PHONE 
                    </p>
                    
                    <p className="text-lg">
                    202-555-7890
                    </p>
                    
                    <br />
                    <p className="text-lg ">
                    LOCATION 
                    </p>
                    
                    <p className="text-lg">
                    123 Fifth Avenue, NY 10160, New York, USA 
                    </p>
                    
                    <br />
                    
                </div>
                    <div className="space-y-3">
                        <p className="text-lg ">
                        You can use this final section to write some directions to your physical location, or any other useful information.
                        </p>
                        
                        <p className="text-lg">
                        If you're using this template to build a website, and have any questions at all, I'd love to help!
                        </p>
                       
                        
                        <p className="text-lg ">
                        Just search for WP Maker to find our YouTube channel. Leave a comment on any video - I always reply.
                        </p>
                        
                        <p className="text-lg">
                        Thank you so much for watching our tutorials!
                        </p>
                        <br />
                    </div>

                </div>    
                {/* </div> */}
                    
                    
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