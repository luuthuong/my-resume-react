import React from 'react'

import $ from 'jquery'

import './color.scss'

import color from './data'


const Color = ({className} )=> {
  return (
    <div className={`
                    ${className} 
                    color
                    rounded-xl
                    fixed
                    w-48
                    h-auto
                    pt-1
                    pb-1
                    top-5
                    z-50
                    `}>
        <div className="
                        color__title 
                        flex
                        justify-between
                        text-slate-700
                    ">
            <span className="
                            text-sm
                            m-1"
                            >
                    Select Color
            </span>
            <ion-icon
            onClick={
                ()=>$('.color').removeClass('active')
            }
            name="arrow-redo-outline"></ion-icon>
        </div>
        <div className="color__content ">
            {
                color.map((item,index)=>{
                    return (
                        <div 
                        
                        key={index}
                        className="
                            color__content__element
                            flex
                            justify-left
                            mt-0
                            items-center
                            p-1
                        ">
                            <span 
                                className={`
                                ${item.className}
                                absolute
                                color__symbol
                                w-4
                                h-4
                                rounded-full
                                select-none
                                `}></span>

                            <div
                            className="
                                w-full
                                ml-8
                                select-none
                                text-xm
                                capitalize
                            "
                            >{item.name}</div>
                            
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

Color.propTypes = {}

export default Color