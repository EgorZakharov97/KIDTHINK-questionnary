import React from 'react';
import ReactSlider from 'react-slider';

function NumericSlider({ min=0, max=18, value, setValue }) {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    return (
    <div className='slider'>
        <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={setValue}
        defaultValue={0}
        value={value}
        min={min}
        max={max}
        />
        <div className='scale'>
            { (range(min, max, 1)).map((e, i) => (<p key={i}>{e}{(e) === 18 ? "+" : ""}</p>)) }
        </div>
    </div>
    );
}

export default NumericSlider;