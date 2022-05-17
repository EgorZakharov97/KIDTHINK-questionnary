import React, {useState} from 'react';
import Details from './Details';
import TextSlider from './TextSlider';

function QuizQuestion({ title, id, description, value, setValue}) {
    const [clicked, setClicked] = useState(false);
    
    const onClick = () => {
        if (clicked) {
            setValue(0)
            setClicked(false)
        } else {
            setClicked(true)
        }
    }
    
    return (
        <div style={{backgroundColor: clicked ? "#6ad2d8" : "transparent"}} className='question'>
            <div className='q-header'>
                <div>
                    <input onClick={onClick} name="question" id={id} type="checkbox" />
                    <label htmlFor={id}>{title}</label>
                </div>
                { description && <Details description={description}/> }
            </div>
            <div>
                {
                    clicked &&
                    <TextSlider
                        value={value}
                        setValue={setValue}
                    />
                }
            </div>
        </div>
    )
}

export default QuizQuestion;