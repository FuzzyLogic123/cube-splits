import React from 'react';
function InputField({ title }) {
    return (
        <div className='w-screen text-center my-14'>
            <div className='text-left inline-block'>
                <label className='text-white m-3 ml-7 inline-block text-3xl font-bold'>
                    {title}
                </label>
                <br></br>
                <input type="text" className='h-16 xl:h-24 rounded-full outline-none focus:border-8 border-[#C62368] p-8 text-4xl text-center font-bold text-[#FA7268]' />
            </div>
        </div>
    );
}

export default InputField;
