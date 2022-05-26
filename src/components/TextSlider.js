import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import useLocalStorage from '../hooks/useLocalStorage';
import EventEmitter from '../utils/EventEmitter';
import { getSlug } from '../utils/lib';

if (!String.prototype.hashCode) {
    String.prototype.hashCode = function() {
        var hash = 0;
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}

const slug = getSlug();

function TextSlider({ title, setScore }) {
    const [value, setValue] = useLocalStorage((slug + title).hashCode(), 0);

    useEffect(() => {
        setScore(value)
    }, [value]);

    useEffect(() => {
        const flush = () => { setValue(0) }
        const listener = EventEmitter.addListener('flush', flush);
        return () => { listener.remove() }
    }, [])

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