import React, { useState } from 'react';
import Section from './Section';

export default function({ scores }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return(
        <Section>
            <h2>Do you want us to contact you?</h2>
            <p>If you need help, please fill out the form below</p>
            <div>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" value={name} onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="name">Email</label>
                <input name="name" id="name" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="name">Phone</label>
                <input name="name" id="name" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
            </div>
            <button>Submit</button>
        </Section>
    )
}