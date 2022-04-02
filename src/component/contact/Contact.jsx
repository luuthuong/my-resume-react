import React from 'react'

import './contact.scss'
import Card from './../card/Card';

const dataContact=[
    {
        icon:'mail-outline',
        title:'Mail',
        content:'Send a message to me! '
    },
    {
        icon:'chatbubbles-outline',
        title:'Messenger',
        content:'Send a message to me! '
    },
]


const Contact = () => {
  return (
    <div>
        <div className="header">
                <h1
                    className="
                    text-center 
                    text-xm 
                    text-gray-300 
                    font-normal "
                >
                    Get in touch
                </h1>
                <h1
                    className="
                    text-center 
                    text-3xl 
                    text-blue-400 
                    font-semibold "
                >
                    Contact Me
                </h1>
        </div>
        <div className="mt-10">
            <div>
                <Card item={dataContact}/>
            </div>
            <div>
                
            </div>
        </div>
    </div>
)
}

export default Contact