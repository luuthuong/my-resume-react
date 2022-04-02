import React from "react";

import "./landing.scss";

import social from "./data";

import portrait from "../../assets/Image/portrait.jpg";

import Button, { ButtonPrimary } from "../button/Button";

import About from "./../about/About";

import Experient from "./../experient/Experient";

import Project from "./../project/Project";
import Contact from './../contact/Contact';

const Social = () => {
    return (
        <div className=" fixed z-50 left-1 bottom-5">
            {social.map((item, index) => {
                return (
                    <div onClick={() => window.open(item.link)}>
                        <ion-icon name={item.icon}></ion-icon>
                    </div>
                );
            })}
        </div>
    );
};

const ScrollDown = () => {
    return (
        <div
            className=" 
			fixed z-50 
			right-0 
			mobile:-right-5
			bottom-5 "
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
        </div>
    );
};

const Overview = () => {
    return (
        <div
            className="
				nav__wraper 
				flex flex-col 
				items-center 
				text-xs 
				rounded-b-xl "
        >
            <div
                className="
					header 
					mb-5 
					text-white 
					text-center  "
            >
                <div
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
                    className=" 
						text-center 
						text-3xl 
						font-semibold"
                >
                    Luu Thuong
                </div>
                <div
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

            <div className="">
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
        </div>
    );
};

const Langding = () => {
    return (
        <div className="landing">
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
                <ScrollDown />
                <Overview />
            </div>
            <div 
				className="
					"
			>
                <About />
            </div>
            <div 
				className="
					flex  
					justify-center 
					items-center 
					mt-10"
			>
                <Experient />
            </div>
            <div 
				className="
					flex  
					justify-center 
					items-center 
					mt-10"
			>
                <Project />
            </div>
            <div 
				className="
					flex  
					justify-center 
					items-center 
					mt-10"
			>
                <Contact />
            </div>
        </div>
    );
};

export default Langding;
