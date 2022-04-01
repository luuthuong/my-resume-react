import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children,className,onClick}) => {
  return (
    <button className={`${className} button p-2 outline-none px-5 hover:text-white hover:text- transition-all  text-blue-400 text-xl border border-blue-300 rounded-md`}
    onClick={onClick?onClick:null}
    >
        {children}
    </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export const ButtonPrimary = ({children}) => {
    console.log('render button');
    return (
        <Button 
        className="bg-blue-300 text-gray-800 "
        >
            {children}
        </Button>
    )
}
ButtonPrimary.propTypes={

}
export default Button