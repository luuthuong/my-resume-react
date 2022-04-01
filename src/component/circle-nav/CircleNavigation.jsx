import React from "react";

import PropTypes from "prop-types";

import './circleNavigation.scss';

import circleData from "./data";

import $ from 'jquery';
import Color from './../color/Color';

const CircleNavigation = ({className,onClick}) => {

    const handleClick=(e)=>{
        e.toggleClass('active')
    }
    
    return (
       <div className="circle-navi-container">
            <div 
            className={`
                        ${className}
                        text-base
                        circle-navi
                        fixed
                        flex
                        justify-center 
                        items-center
                        `}>
            <div 
            className=" toggle-circle 
                        w-10
                        h-10
                        absolute
                        flex
                        rounded-full  
                        justify-center 
                        items-center
                        z-50
                        "
            onClick={
                    ()=>{
                        $('.color').removeClass('active')
                        handleClick($('.circle-navi '))
                    }
                }
            >
                <ion-icon name="settings-outline"></ion-icon>
            </div>
            {circleData.icons.map((item, index) => {
                return (
                    <li
                        key={index}
                        style={
                            {
                            "--i":index.toString() 
                            }
                        }
                        onClick={()=>{
                            item.onClick();
                            $('.circle-navi ').removeClass('active')
                        }}
                        className="
                                    element  
                                    absolute 
                                    left-0
                                    w-10
                                    h-10
                                    leading-10
                                    flex
                                    justify-center
                                    items-center
                                    rounded-full
                                    hover:rotate-90
                                    "
                    >
                        <ion-icon  name={item.className}></ion-icon>
                    </li>
                );
            })}
        </div>
        <Color/>
       </div>
    );
};

CircleNavigation.propTypes = {
    onClick: PropTypes.func,
};

export default CircleNavigation;
