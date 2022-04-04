import React from "react";

import "./landing.scss";

import social from "./data";

import portrait from "../../assets/Image/portrait.jpg";

import Button, { ButtonPrimary } from "../button/Button";

import About from "./../about/About";

import Experient from "./../experient/Experient";

import Project from "./../project/Project";

import Contact from './../contact/Contact';

import '../../../node_modules/aos/dist/aos.css'

import AOS from 'aos'

import {Link ,Element} from 'react-scroll'


const Social = () => {
    return (
        <div className=" fixed z-50 left-1 bottom-5">
            {social.map((item, index) => {
                return (
                    <div key={index} onClick={() => window.open(item.link)}>
                        <ion-icon name={item.icon}></ion-icon>
                    </div>
                );
            })}
        </div>
    );
};

const ScrollDown = (props) => {
    return (
        <Link
            to="bottom"
            className={` 
            ${props.className}
			fixed z-50 
			right-0 
			mobile:-right-5
			bottom-5 `}
        >
            <div
                className=" 
					scroll-down  
					text-xl 
					mobile:text-sm 
					mobile-small:text-xs 
					bg-transparent 
					relative 
					bottom-14  
					cursor-pointer 
					text-blue-400  
					text-center 
					rotate-90  
					select-none
					p-3 "
            >
                Scroll Down
            </div>
        </Link>
    );
};

const Overview = (props) => {
    return (
        <Element
            name="home"
            className={`
                ${props.className}
				nav__wraper 
				flex flex-col 
				items-center 
				text-xs 
				rounded-b-xl `}
        >
            <div
                className="
					header 
					mb-5 
					text-white 
					text-center  "
            >
                <div
                data-aos="fade-left"
                    className=" 
						text-xl 
						mb-1 
						text-blue-200 
						font-semibold 
						text-center"
                >
                    Hello, I'm
                </div>
                <div
                data-aos="fade-left"
                    className=" 
						text-center 
						text-3xl 
						font-semibold"
                >
                    
                    Luu Thuong
                </div>
                <div
                data-aos="fade-left"
                    className=" 
						text-center 
						text-sm 
						font-medium 
						mt-2 
						text-gray-300"
                >
                    Front End Developer
                </div>
            </div>
            <div
            data-aos="fade-up"
                className="
					flex 
					justify-center
					gap-3
					w-full 
					mobile-small:flex-col 
					items-center 
					mb-5"
            >
                <Button className="">Download CV</Button>
                <ButtonPrimary>Contact</ButtonPrimary>
            </div>

            <div  data-aos="zoom-in" className="">
                <img
                    className="
							portrait	
							w-96
							mobile:w-56
							cursor-pointer
					"
                    src={portrait}
                    alt=""
                />
            </div>
        </Element>
    );
};

const Langding = () => {



    React.useEffect(() => {
        AOS.init({
            duration : 1000,
            easing:'ease',
            offset:200,
            once:true
          });
    }, [])
    

    return (
        <div className="landing app">
            <div 
				className="
					overview__contain 
					h-screen w-full 
					flex 
					justify-center 
					items-center 
					relative"
			>
                <Social />
                <ScrollDown  />
                <Overview data-aos="fade-left" data-scene />
            </div>
            <Element
                name="about"
                data-scene
				className="
				"
			>
                <About />
            </Element>
            <Element
                name="skill"
                data-scene
				className="
					flex  
					justify-center 
					items-center 
					mt-10"
			>
                <Experient />
            </Element>
            <Element
                name="project" 
                data-scene
				className="
					flex  
					justify-center 
					items-center 
					mt-10"
			>
                <Project />
            </Element>
            <Element 
                name="bottom"
                data-scene
				className="
					flex  
					justify-center 
					items-center 
					mt-10"
			>
                <Contact />
            </Element>
            
        </div>
    );
};

export default Langding;
