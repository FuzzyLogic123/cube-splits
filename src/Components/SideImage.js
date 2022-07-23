import { motion, useScroll } from "framer-motion"
import React, { useState, useEffect } from 'react';
import FelixOnCubes from '../img/felix_lying_on_cubes.jpg';

function SideImage() {
    const { scrollYProgress } = useScroll();

    useEffect( ()=> console.log(scrollYProgress), [scrollYProgress])
    return (
        <>
            <motion.img
                className="absolute -left-[400px] top-[50rem] scale-75"
                src={FelixOnCubes}
                alt='Felix lying on cubes'
                whileInView={{ x: 400 }}
                transition={{ type: "spring", duration: 2 }}
            >

            </motion.img>
        </>
    );
}

export default SideImage;