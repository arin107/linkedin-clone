import React from 'react'
import './InputOption.css'

const InputOption = ({Icon,title,color}) => {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}}/>
        <h6>{title}</h6>
    </div>
  )
}

export default InputOption