import React, { useState } from 'react';

const TimeConverter = () => {
    const ChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    }
    
    const title = <h2>Time Converter</h2>
    const inputType = 
    <form>
        <select onChange={ChangeOption}>
            <option>hour</option>
            <option>minute</option>
            <option>second</option>
        </select>
    </form>
    const resultType = 
    <form>
        <select>
            <option>hour</option>
            <option>minute</option>
            <option>second</option>
        </select>
    </form>
    

    return(
        <>
            { title }
            { inputType }
        </>
    )
}

export default TimeConverter;   