import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";

function Details({ description }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        setIsVisible(!isVisible);
    }

    const fade = useSpring({
        from: { visibility: "hidden", opacity: "0" },
        to: { opacity: isVisible ? "1" : "0", visibility: isVisible ? "visible" : "hidden" },
        config: { duration: "300" }
    })

    return (
        <div className='window-wrapper'>
            <div onMouseEnter={toggle} onMouseLeave={toggle} className='icon-d-wrapper'>
                <div className='icon-d'>i</div>
            </div>
            <animated.div style={fade} className='d-window'>
                {description}
            </animated.div>
        </div>
    )
}

export default Details;