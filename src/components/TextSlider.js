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
            <p>Not Present</p>
            <p>Low</p>
            <p>Mild</p>
            <p>Moderate</p>
            <p>Severe</p>
        </div>
    </div>
    );
}

export default TextSlider;