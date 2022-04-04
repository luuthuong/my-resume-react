import React from 'react'

import movie from '../../assets/Image/movie.png'

import smartIOT from '../../assets/Image/smartIOT.png'

import dashboard from '../../assets/Image/dashboard.png'

import Button from '../button/Button'

import './project.scss'
import { ButtonPrimary } from './../button/Button';

const dataProject=[
    {
        name:'Smart Gardent IOT',
        img:smartIOT,
        link:'https://github.com/luuthuong/ScadaIOTWeb.github.io'
    },
    {
        name:'Movie App React',
        img:movie,
        link:'https://github.com/luuthuong/Movie-Website'
    },
    {
        name:'Dashboard Multiple Themes',
        img:dashboard,
        link:'https://github.com/luuthuong/multiple-themes-dashboard'
    }
]

const Card=() => {
    return (
        <div
            className="
                grid 
                grid-cols-3 
                mobile:grid-cols-1 
                gap-3"
        >
            {dataProject.map((item, index) => {
                return (
                    <div
                        className="
                                project-card
                                rounded-xl
                                p-4
                                text-center
                            "
                        key={index}
                    >
                        <div
                            className="
                                    relative
                                    project-img-wraper
                                    flex 
                                    justify-center 
                                    shadow-white
                                    overflow-hidden
                                    rounded-2xl 
                                    items-center"
                            onClick={() => window.open(item.link)}
                        >
                            <img
                                className="
                                        project-img
                                        w-full 
                                    "
                                src={item.img}
                                alt=""
                            />
                        </div>
                        <div>
                            <div
                                className="
                                        text-white 
                                        text-xl 
                                        mobile:text-base 
                                        my-3 
                                        h-8 
                                        font-bold"
                            >
                                {item.name}
                            </div>
                            <Button onClick={() => window.open(item.link)}>
                                GitHub
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const Project = () => {
  return (
    <div className=" w-full p-10">
        <div data-aos="fade-up" className="header mb-10">
                <h1 
                    className="
                        text-center 
                        text-xm 
                        text-gray-300 
                        font-normal "
                >
                    Introduction
                </h1>
                <h1 
                    className="
                        text-center 
                        text-4xl 
                        text-blue-500 
                        font-semibold "
                >
                    Some product
                </h1>
        </div>
        <div data-aos="fade-up">
                <Card/>
        </div>
    </div>
  )
}

export default Project