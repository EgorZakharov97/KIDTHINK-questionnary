import React, { useState } from 'react';
import Section from './Section';
import { submitUserData } from '../utils/submitGForms';
import Loading from './Loading';
import useLocalStorage from '../hooks/useLocalStorage';
import { getSlug } from '../utils/lib';

export default function({ quiz, scores }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useLocalStorage(getSlug()+"/contact-submitted", "");
    const [userMSG, setUserMSG] = useState("");

    const onSubmit = async () => {
        if (!confirmed) {
            setUserMSG("Please, confirm first");
            return;
        }
        if (!name) {
            setUserMSG("Please, leave your name");
            return;
        }
        if (!email || !phone) {
            setUserMSG("Please, leave either email, phone or both");
            return;
        }
        setLoading(true);
        submitUserData(name, email, phone, message, quiz, scores)
            .then(() => {
                setLoading(false);
                setUserMSG("Success!");
                setLoaded((new Date()).toString());
            })
            .catch((e) => {
                setLoading(false);
                setUserMSG("Sorry. There was a problem submitting your request");
                console.log(e);
            })
    }

    return(
        <Section className="personal-info">
            <div className='container'>
                <h2>Do you want us to contact you?</h2>
                {loaded.length > 0 && (new Date(loaded)).getDay() >= (new Date()).getDay() ?
                    <p><string>Thank you for your submission!</string></p> : (
                <>
                <p><strong>If you need help, please fill out the form below</strong></p>
                {
                    loading ? 
                     <Loading/>
                     :
                     (
                        <div>
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
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea rows="8" id="message" name="message" value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
                        </div>
                        <div>
                            <p>I prefer KIDTHINK to read an analyze my personal information. I would like to be contacted regarding my answers.</p>
                            <input type="checkbox" id="personal-information" name="personal-information-confirmation" value={confirmed} onChange={() => {setConfirmed(!confirmed)}}/>
                            <label className='inline' htmlFor="personal-information">Confirm</label>
                        </div>
                        <div id="p-submit">
                            <button onClick={onSubmit}>Submit</button>
                            {userMSG && <p>{userMSG}</p>}
                        </div>
                        </div>
                     )
                }
                </>
                )}
            </div>
        </Section>
    )
}