import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set your EmailJS service ID, template ID, and public key
    const serviceId = 'service_8t9uzil';
    const templateId = 'template_m3xgi1e';
    const publicKey = 'C9CLFLE6HlVbQKc31';

    emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
    }, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        setIsSubmitted(false);
      });
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <h2>Thank you for submitting the form!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
