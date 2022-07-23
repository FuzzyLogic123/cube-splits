import React from 'react';
import InputField from './InputField';


function Inputs() {
    return (
        <div className=' w-screen flex justify-center flex-col mt-[50vh] mb-[5vh]'>
            <InputField className='' title={"Cross"}/>
            <InputField title={"F2L"}/>
            <InputField title={"OLL"}/>
            <InputField title={"PLL"}/>
        </div>
    );
}

export default Inputs;