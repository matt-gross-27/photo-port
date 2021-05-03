import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMsg, setErrorMsg] = useState('');

  function handleBlur(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      isValid ? setErrorMsg('') : setErrorMsg('Please enter a valid email');
    } else {
      e.target.value.length ? setErrorMsg('') : setErrorMsg(`${e.target.name} is required`)
    }

    errorMsg && (setFormState({ ...formState, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch post formData to backend
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleBlur} />
        </div>

        {/* email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleBlur} />
        </div>

        {/* message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleBlur} />
        </div>

        {errorMsg && (
          <div>
            <p className="error-text">{errorMsg}</p>
          </div>
        )}

        {/* submit */}
        <button type="submit">Submit</button>

      </form>
    </section>
  )
}

export default ContactForm;