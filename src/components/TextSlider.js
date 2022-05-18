import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';

function TextSlider({ setScore }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setScore(value)
    }, [value])

    return (
    <div className='slider'>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            onChange={setValue}
            defaultValue={0}
            value={value}
            min={0}
            max={4}
        />
        <div className='scale'>
            <div><p onClick={() => (setValue(0))} className='noselect'>Not Present</p></div>
            <div><p onClick={() => (setValue(1))} className='noselect'>Low</p></div>
            <div><p onClick={() => (setValue(2))} className='noselect'>Mild</p></div>
            <div><p onClick={() => (setValue(3))} className='noselect'>Moderate</p></div>
            <div><p onClick={() => (setValue(4))} className='noselect'>Severe</p></div>
        </div>
    </div>
    );
}

export default TextSlider;