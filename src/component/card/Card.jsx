import React from 'react'

import './card.scss'

const Card = (props) => {
  return (
    <div 
    className=" 
    card flex  
    mobile:flex-col 
    mobile-small:flex 
    gap-3 
    w-full
    
    "
>
    {props.item.map((item, index) => {
        return (
            <div
                key={index}
                className="
                    text-center 
                    w-full
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
  )
}

export default Card