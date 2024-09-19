import React from 'react'
import "./Button.css"
function Button({clickeventhandler}) {
  return (
    <div className='btn-container'>
        <div className='btn-row'>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>C</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>(</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>)</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>Dele</button>
        </div>
        <div className='btn-row'>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>9</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>8</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>7</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>*</button>
        </div>
        <div className='btn-row'>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>6</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>5</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>4</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>+</button>
        </div>
        <div className='btn-row'>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>3</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>2</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>1</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>-</button>
        </div>
        <div className='btn-row'>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>.</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>0</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>00</button>
            <button className='btn' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>/</button>
        </div>
        <div className='btn-row'>
            <button className='btn-logo'>TOM</button>
            <button className='btn-result' onClick= {(e)=>{clickeventhandler(e.target.innerText)}}>=</button>
        </div>

    </div>
  )
}

export default Button