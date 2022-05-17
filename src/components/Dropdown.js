import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Drowdown({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "0" },
        to: { opacity: isOpen ? "1" : "0", maxHeight: isOpen ? "200px" : "0"},
        config: { duration: "300" }
    });

    return(
        <div className="dropdown">
            <button onClick={toggle}>Details</button>
            <animated.div style={openAnimation}>{children}</animated.div>
        </div>
    )
}