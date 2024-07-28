import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './grevence.css';

const GrevenceForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(import.meta.env.REACT_PUBLIC_SERVICE_ID, import.meta.env.REACT_PUBLIC_TEMPLATE_ID, form.current, import.meta.env.REACT_PUBLIC_KEY)
            .then(
                (result) => {
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    setError(true);
                    form.current.reset();
                },
            );
    };

    return (
        <div className="container">
            <div className="inner-container">
                <div className="text-container">
                    <h1>Grevence Form</h1>
                    <span>Fill the form and we will conatct you soon...</span>
                    <div className="icon-container">
                    </div>
                </div>
                <form
                    onSubmit={sendEmail}
                    ref={form} className="form-container"
                >
                    <label htmlFor="name">Name</label>
                    <input id="name" name="user_name" type="text" required />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="user_email" type="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="user_message" rows={6} required />

                    <button type="submit">Send</button>
                    {/* {success && <span className="success-message">Your message has been sent successfully!</span>}
                    {error && <span className="success-message">Your message has been sent successfully!</span>} */}
                    {success || error && alert('Your message has been sent successfully!')}
                </form>
            </div>
        </div>
    );
}

export default GrevenceForm;
