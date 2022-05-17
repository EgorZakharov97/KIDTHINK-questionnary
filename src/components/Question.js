import React from 'react';
import Details from './Details';

function Question(props) {
    return (
        <div className='question'>
            <div className='q-header'>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <Details description={<div>
                    <p>Low - Present but not exhibited in last 3 days</p>
                    <p>Mild - Exhibited on 1-2 of last 3 days</p>
                    <p>Moderate - Exhibited daily in last 3 days, 1-2 episodes</p>
                    <p>Severe - Exhibited daily in last 3 days, 3 or more episodes or continuously</p>
                </div>}/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Question;