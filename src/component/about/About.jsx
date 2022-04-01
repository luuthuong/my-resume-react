import React from "react";

import "./about.scss";
import { ButtonPrimary } from "./../button/Button";

import aboutImage from "../../assets/Image/about.jpg";

const dataAbout = [
    {
        icon: "school-outline",
        title: "University",
        content: "Final year",
    },
    {
        icon: "file-tray-full-outline",
        title: "Project",
        content: "Personal Project",
    },
    {
        icon: "medal-outline",
        title: "Objective",
        content: "Professional web developer",
    },
];

const Card = () => {
    return (
        <div 
            className=" 
            card flex  
            mobile:flex-col 
            mobile-small:flex-col 
            gap-3 
            w-full "
        >
            {dataAbout.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="
                            text-center 
                            card-element 
                            relative  
                            z-10  
                            p-3 
                            flex-1 
                            flex-col 
                            h-auto 
                            items-center 
                            justify-center  
                            cursor-pointer  
                            rounded-lg "
                        >
                        <ion-icon name={item.icon}></ion-icon>
                        <div 
                            className="
                                text-white 
                                font-semibold 
                                text-xm 
                                m-3"
                        >
                            {item.title}
                        </div>
                        <div className="
                            text-gray-400 
                            h-12 
                            font-normal"
                        >
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const About = () => {
    return (
        <div
            className="
                about 
                mt-5 
                w-full "
        >
            <div className="header">
                <h1
                    className="
                    text-center 
                    text-xm 
                    text-gray-300 
                    font-normal "
                >
                    Get to know
                </h1>
                <h1
                    className="
                    text-center 
                    text-4xl 
                    text-blue-400 
                    font-semibold "
                >
                    About me
                </h1>
            </div>
            
            <div
                className="
                    mt-14 
                    flex 
                    mobile:flex-col  
                    justify-center 
                    items-center"
            >
                <div
                    className="
                        w-1/2 
                        relative  
                        image-about-wraper 
                        flex 
                        justify-center 
                        mobile:mb-20 
                        mobile:w-full"
                >
                    <img
                        className="
                        rounded-2xl 
                        cursor-pointer 
                        relative 
                        z-10 
                        image-about 
                        w-2/3 
                        object-cover"
                        src={aboutImage}
                        alt=""
                    />
                </div>
                <div
                    className="
                        about__content 
                        w-1/2 
                        mobile-small:w-full
                        mobile:w-2/3
                        flex  
                        flex-col 
                        items-center"
                >
                    <div
                        className="
                            card 
                            w-full 
                            px-10 
                            mobile:w-full
                            "
                    >
                        <Card />
                    </div>
                    <div
                        className="
                            content__detail
                            w-2/3 
                            leading-7 
                            mt-6 
                            text-gray-400 
                            text-lg 
                            mobile:w-full 
                            mobile:text-base
                            font-light"
                    >
                        Hello! I’m Thuong. Having an in-depth knowledge
                        including advanced HTML5, CSS, CSS3, SASS, JSON,
                        Python,C/C++, C#, JavaScript, JQuery, ReactJS,
                        React-Redux...
                    </div>
                    <div
                        className="
                            flex
                            w-2/3 
                            mt-10 
                            justify-center 
                            items-center"
                    >
                        <ButtonPrimary>Let's Talk</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
