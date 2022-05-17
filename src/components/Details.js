import React, { useState } from 'react';

function Details({ description }) {
    const [opacity, setOpacity] = useState("0%");

    const toggle = () => {
        setOpacity(opacity === "0%" ? "100%" : "0%");
    }

    return (
        <div className='window-wrapper'>
            <div onMouseEnter={toggle} onMouseLeave={toggle} className='icon-d-wrapper'>
                <div className='icon-d'>i</div>
            </div>
            <div style={{opacity}} className='d-window'>
                {description}
            </div>
        </div>
    )
}

export default Details;