import React, {useState, useEffect} from 'react';
import Details from './Details';
import { useSpring, animated } from "react-spring";

function Question({ question , children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "0" },
        to: { opacity: isOpen ? "1" : "0", maxHeight: isOpen ? "200px" : "0" },
        config: { duration: "300" }
    });

    const rotateAnimation = useSpring({
        from: { transform: "rotateZ(0)" },
        to: { transform: isOpen ? "rotateZ(180deg)" : "rotateZ(0)" },
        config: { duration: "300" }
    })

    return (
        <div className='question'>
            <div className='q-header'>
                <div>
                    <h3>{question.title}</h3>
                    { question.description && <animated.button style={rotateAnimation} onClick={toggle}><img height="24px" width="24px" src="https://www.kidthink.ca/wp-content/uploads/2022/04/Screenshot-2022-04-27-100751.svg" /></animated.button>}
                </div>
                <Details description={<div>
                    <p><b>Low</b> - Present but not exhibited in last 3 days</p>
                    <p><b>Mild</b> - Exhibited on 1-2 of last 3 days</p>
                    <p><b>Moderate</b> - Exhibited daily in last 3 days, 1-2 episodes</p>
                    <p><b>Severe</b> - Exhibited daily in last 3 days, 3 or more episodes or continuously</p>
                </div>}/>
            </div>
            <div>
                {children}
                {
                    question.description &&
                    <div className="dropdown">
                        <animated.div style={openAnimation}>{question.description}</animated.div>
                    </div>    
                }
            </div>
        </div>
    )
}

export default Question;