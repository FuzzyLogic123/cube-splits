import React, { useState, useEffect } from 'react';
import FelixOnCubes from '../img/felix_lying_on_cubes.jpg';

function SideImage() {
    const handleScroll = () => {
        const position = window.pageYOffset;
        const felix = document.querySelector(".scrollClass");
        felix.style.left = `${position / document.body.scrollHeight * 1500 - 500}px`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <img style={{left: -500}} className="top-3/4 absolute scrollClass left-5" src={FelixOnCubes} alt='Felix lying on cubes' />
        </>
    );
}

export default SideImage;