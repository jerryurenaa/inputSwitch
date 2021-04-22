import React from 'react';
import './switch.css';

/**
 * 
 * @param {
 *      onClick | function
 *      checked | required boolean
 *      style | obtional string 'square'
 *      label | obtional string } props 
 */
export function Switch(props)
{
    return (
        <div className={`swithGroup ${props.className}`}>
            <div className="switch" onClick={()=> props.onclick()}>
                <input  type="checkbox" checked={props.checked} onChange={()=> {}} />
                <span className={`slider ${!!props.style ? props.style : 'round'}`}></span>
            </div>
            {props.label}
        </div>
    )
}
