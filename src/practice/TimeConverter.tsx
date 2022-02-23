import React, { useState } from 'react';

interface TimeConverterOptionStates {
    inputOption: string,
    resultOption: string,
}

interface TimeConverterValueStates {
    resultValue: number,
}

const TimeConverter = () => {
    const [options, setOption] = useState<TimeConverterOptionStates>({
        inputOption: 'hour',
        resultOption: 'minute',
    });
    const [value, setValue] = useState<TimeConverterValueStates>({
        resultValue: 0,
    })

    const ChangeInputOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const optionValue = e.target.value;
        setOption({
            inputOption: optionValue,
            resultOption: options.resultOption,
        })
    }

    const ChangeResultOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const optionValue = e.target.value;
        setOption({
            inputOption: options.inputOption,
            resultOption: optionValue,
        })
    }

    const ConvertTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const currentTime = parseFloat(e.target.value);
        let result;
        if (options.inputOption === 'hour') {
            if (options.resultOption === 'hour') result = currentTime;
            else if (options.resultOption === 'minute') result = currentTime * 60;
            else result = currentTime * 60 * 60;
        }
        else if (options.inputOption === 'minute') {
            if (options.resultOption === 'hour') result = currentTime / 60;
            else if (options.resultOption === 'minute') result = currentTime;
            else result = currentTime * 60;
        }
        else {
            if (options.resultOption === 'hour') result = currentTime / 60 / 60;
            else if (options.resultOption === 'minute') result = currentTime / 60;
            else result = currentTime;
        }
        setValue({resultValue: result})
    }

    const title = <h2>Time Converter</h2>

    const inputContainer =
        <div id='inputContainer'>
            <form>
                <select onChange={ChangeInputOption} value={options.inputOption}>
                    <option>hour</option>
                    <option>minute</option>
                    <option>second</option>
                </select>
                <input type='number' placeholder='0' onChange={ConvertTime}></input>
            </form>
        </div>

    const resultContainer =
        <div id='resultContainer'>
            <form>
                <select onChange={ChangeResultOption} value={options.resultOption}>
                    <option>hour</option>
                    <option>minute</option>
                    <option>second</option>
                </select>
                <input id='result' type='number' value={value.resultValue} readOnly></input>
            </form>
        </div>

    return (
        <>
            {title}
            {inputContainer}
            {resultContainer}
        </>
    )
}

export default TimeConverter;   