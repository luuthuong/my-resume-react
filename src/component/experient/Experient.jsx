import React from "react";

import "./experient.scss";

const RenderStar = (props) => {
    const sumStar = [];
    for (let index = 0; index < props.star; index++) {
        sumStar.push(<ion-icon name="star"></ion-icon>);
    }
    return sumStar;
};

const DataExperient = {
    main: [
        {
            icon: "checkmark-done-circle",
            skill: "HTML",
            level: 5,
        },
        {
            icon: "checkmark-done-circle",
            skill: "CSS/SCSS",
            level: 5,
        },
        {
            icon: "checkmark-done-circle",
            skill: "JavaScript",
            level: 5,
        },
        {
            icon: "checkmark-done-circle",
            skill: "ReactJS",
            level: 5,
        },
        {
            icon: "checkmark-done-circle",
            skill: "React-Redux",
            level: 4,
        },
        {
            icon: "checkmark-done-circle",
            skill: "Tailwind",
            level: 5,
        },
        {
            icon: "checkmark-done-circle",
            skill: "Bootstrap",
            level: 4,
        },
    ],
    another: [
        {
            icon: "checkmark-done-circle",
            skill: "C/C++",
            level: 4,
        },
        {
            icon: "checkmark-done-circle",
            skill: "C#",
            level: 4,
        },
        {
            icon: "checkmark-done-circle",
            skill: "Python",
            level: 3,
        },
        {
            icon: "checkmark-done-circle",
            skill: "SQL (SQL Server, MySQL)",
            level: 3,
        },
        {
            icon: "checkmark-done-circle",
            skill: "Github/GitLab",
            level: 3,
        },
    ],
};

const ElementContent = (props) => {
    return (
        <div
            className="
            experience-element  
            rounded-xl 
            p-2
            w-full "
        >
            <h1
                className="
                text-center 
                mb-2 
                text-blue-500 
                font-normal 
                text-xl"
            >
                {props.children}
            </h1>

            <div
                className="
                    grid 
                    grid-cols-2 
                    h-full 
                    p-2 
                    justify-center "
            >
                {props.item.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className=" 
                                mb-5 
                                flex  
                                justify-start 
                                items-center "
                        >
                            <div
                                className=" 
                                    check-icon 
                                    w-1/2 
                                    text-right 
                                    mr-4"
                            >
                                <ion-icon name={item.icon}></ion-icon>
                            </div>
                            <div 
                            className=" 
                                text-left 
                                text-white 
                                font-bold 
                                w-full"
                            >
                                <div className=" ">{item.skill}</div>
                                <div className=" render-star">
                                    <RenderStar star={item.level} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Experient = () => {
    return (
        <div className=" w-full p-10">
            <div
                className="
                text-xm  text-gray-300 
                font-normal 
                text-center  "
            >
                Experience
            </div>
            <div
                className="
                text-4xl 
                mt-2 
                text-center 
                text-blue-500 
                font-semibold"
            >
                Skill I have
            </div>
            <div
                className="
                mt-10 
                flex 
                mobile:flex-col 
                justify-center 
                gap-3 "
            >
                <ElementContent item={DataExperient.main}>
                    FrontEnd Development
                </ElementContent>
                <ElementContent item={DataExperient.another}>
                    Another Skill
                </ElementContent>
            </div>
        </div>
    );
};

export default Experient;
