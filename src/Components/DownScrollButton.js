import React from 'react';
import { ReactComponent as DownArrow } from '../icons/down-arrow.svg';


function DownScrollButton() {
    return (
        <div className='flex w-screen justify-center'>
            <DownArrow className='h-20 hover:scale-125 ease-in-out duration-300' onClick={() => window.scroll({
                left: 0,
                top: 800,
                behavior: 'smooth'
            })} />
        </div>
    );
}

export default DownScrollButton;