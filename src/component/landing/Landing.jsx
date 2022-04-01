import React from "react";

import "./landing.scss";

import social from "./data";

import portrait from "../../assets/Image/portrait.jpg";

import Button,{ButtonPrimary} from '../button/Button';

import About from './../about/About';

const Social=() => {
	return (
		<div className=" absolute left-12 bottom-5" >
				{
					social.map((item,index) => {
						return (
						<div >
								<ion-icon name={item.icon}></ion-icon>
						</div>
						)
					})
				}
		</div>
	)
}

const ScrollDown = () => {
	return (
		<div className=" absolute z-10 right-10 bottom-5 ">
		<div className=" scroll-down  text-xl bg-transparent relative bottom-14  cursor-pointer text-blue-400  text-center rotate-90  p-4 ">
			Scroll Down
		</div>
		</div>
	)
}

const Overview=() => {
	return (
        <div className="nav__wraper flex flex-col items-center text-xs rounded-b-xl ">
            <div className="header mb-5 text-white text-center  ">
                <div className=" text-xl mb-1 text-blue-200 font-semibold text-center">
                    Hello, I'm
                </div>
                <div className=" text-center text-4xl font-semibold">
                    Luu Thuong
                </div>
                <div className=" text-center text-sm font-medium mt-2 text-gray-300">
                    Front End Developer
                </div>
            </div>
            <div className="flex justify-center items-center mb-5">
                <Button className="mr-3">Download CV</Button>
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
}

const Langding = () => {

    return (
		<div className="landing">
        <div className="overview__contain h-screen w-full flex justify-center items-center relative">
			<Social/>
			<ScrollDown/>
            <Overview/>
        </div>
		<div className="flex justify-center items-center">
			<About/>
		</div>
		</div>
    );
};

export default Langding;
