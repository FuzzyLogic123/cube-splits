import React from 'react';
import { ReactComponent as DownArrow } from '../Icons/down-arrow.svg';


function DownScrollButton() {
    return ( 
        <DownArrow className='h-20 m-auto hover:scale-125 ease-in-out duration-300' onClick={()=>window.scroll({
            left: 0,
            top: 800,
            behavior: 'smooth'
        })}/>
     );
}

export default DownScrollButton;