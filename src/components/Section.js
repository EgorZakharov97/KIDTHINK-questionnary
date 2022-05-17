import React from 'react';

export default function Section(props) {
    return (
        <section className="q-section">
            {props.children}
        </section>
    )
}