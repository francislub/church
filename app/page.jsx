'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from './public/images/logo1.png'
import educationImage from './public/images/gallery/8.jpg'

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="scroll-smooth">
            <div className="fullContainer bannerh" id="homeSection">
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
                                        <a href="/" className="dropbtn link bg-[#1f8cad] rounded-md">HOME</a>
                                       
                                    </li>
                                    <li className="dropdown relative">
                                        <a href="/about" className="dropbtn link">ABOUT</a>
                                    </li>
                                    <li className="dropdown relative">
                                        <a href="/wedo" className="dropbtn link">SERVICES</a>
                                       
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
                    <h1>SDA BUNGA CENTRAL DISTRICT</h1>
                    <p className="text-lg">
                        {/* For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira. */}
                    </p>
                    <button className="mb-5 hover:bg-[#197996]">
                        <Link href="#">
                            <span className="text-lg">CAMP MEETING REGISTER NOW</span>
                        </Link>
                    </button>
                </div>
            </div>

            {/* our impact section ends here */}

            <section className="programs" id="programsSection">
                <div className="container mx-5">
                <h6 className=" text-center ">
                THE ADVENT MESSEGE TO ALL THE WORLD IN MY GENERATION
                </h6>
                <br />
                <h2 className=" text-center text-[30px] md:text-[30px] lg:text-[30px]">
                    BUNGA CENTRAL DISTRICT CHURCHES
                </h2>
                <br />
                    <div className="boxContainer md:flex grid md:justify-center md:space-x-12 md:flex-row">

                        <div className="box flex flex-col">
                            <div className="cardImage md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">SDA Bunga Central Church</span>
                            </div>
                            <div className="programDesc">
                                <p className="px-2">
                                    {/* We empower individuals through knowledge.  */}
                                    <br />We are a multi-ethnic family oriented church located in Bunga, Kampala, 12 miles, off Gaba road. We would be honoured to have you worship with us on 
                                </p>
                            </div>
                            {/* <button className="hover:bg-[#197996] w-40">
                                <Link href="/education">
                                    Explore More
                                </Link>
                            </button> */}
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">NewLife SDA Church Lubowa</span>
                            </div>
                            <div className="programDesc">
                                <p className="px-2">
                                NewLife SDA Church Lubowa, is an English speaking family oriented church located in Lubowa Area, Kampala, 2.5km, along Kigo road. 
                                </p>
                            </div>
                            {/* <button className=" w-40">
                                <Link href="/community">
                                    Explore More
                                </Link>
                            </button> */}
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage md:flex"></div>
                            <div className="programTitle px-5">
                            <span className="text-xl text-[#1f8cad]">SDA Faithway Community Church Senge</span>
                            </div>
                            <div className="programDesc">
                                <p className="px-2">
                                Faithway Community Church and Senge SDA Church are committed to fostering a supportive and inclusive community for all members.
                                </p>
                            </div>
                            {/* <button className=" w-40">
                                <Link href="/programs">
                                    Explore More
                                </Link>
                            </button> */}
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            <br /><br />
            <div class="mx-4 xl:mx-20 flex justify-between text-lg xl:flex-row flex-col xl:space-x-20 space-y-4 xl:space-y-0">
                <div className="w-3/4 md:w-2/3 lg:w-1/2 xl:w-[100%] mx-auto flex flex-col items-center space-y-3">
                    <Image 
                        className="rounded1 w-full h-[200px] md:h-[250px] lg:h-[300px] hidden xl:flex" 
                        src={educationImage}
                    />
                    <p className="text-4xl font-bold text-center">
                        Pastor Bernard Kakuru
                    </p>
                    
                    <p className="text-lgtext-center">
                    Seventh day Adventist <br />District Pastor <br /> SDA Bunga Central District
                    </p>
                    
                </div>
                    <div className="space-y-3">
                        <p className="text-lg font-bold">
                         WELCOME!
                        </p>
                        <br />
                        <h2 className="text-4xl text-[#1f8cad]">Welcome to the SDA Bunga Central District website! I am Pastor Bernard Kakuru, </h2>
                        <br />
                        <p className="text-lg">
                          I am delighted to extend a warm greeting to all our visitors. We are a community dedicated to faith, fellowship, and service, and we invite you to explore our site to learn more about our mission, programs, and upcoming events.
                        </p>
                        <br />
                        <p className="text-lg">
                        it is my pleasure to welcome you to our vibrant and faith-filled community. Our district comprises three wonderful churches: SDA Bunga Central District, NewLife SDA Church Lubowa, and Faithway Community SDA Church. Each of our congregations is committed to spiritual growth, community service, and living out the teachings of Jesus Christ.
                        </p>
                        <br />
                        <p className="text-lg font-bold">
                        We invite you to join us in worship, fellowship, and service as we journey together in faith. services.
                        </p>
                        <br />
                        <p className="text-lg">
                        See more about our churches
                        </p>
                        <br />
                        <div class="flex space-x-4">
                            <button class="joinNow rounded bg-green-500 text-white hover:bg-green-300 px-4 py-2">
                                <a href="/wedo">Our Churches</a>
                            </button>
                            <button class="adoptBtn rounded bg-white text-green-500 hover:bg-green-300 hover:text-white px-4 py-2 border border-green-500">
                                <a href="/about">More About Me</a>
                            </button>
                        </div>
                    </div>

                </div>
                </section>
                {/* Programs section ends here */}
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