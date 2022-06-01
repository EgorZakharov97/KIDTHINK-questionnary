import React from 'react';

export default function Section(props) {
    return (
        <section id={props.id} className={`q-section ${props.className}`}>
            {props.children}
        </section>
    )
}