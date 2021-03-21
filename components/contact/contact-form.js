import { useState } from 'react'

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')

  const sendMessageHandler = (event) => {
    event.preventDefault()

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <form className='contact-form' onSubmit={sendMessageHandler}>
      <div className='contact-form__controls'>
        <div className='contact-form__control'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>
        <div className='contact-form__control'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>
      </div>
      <div className='contact-form__control'>
        <label htmlFor='message'>Your Message</label>
        <textarea
          id='message'
          rows='5'
          required
          value={enteredMessage}
          onChange={(event) => setEnteredMessage(event.target.value)}
        ></textarea>
      </div>
      <div className='contact-form__actions'>
        <button className='contact-form__button'>Send Message</button>
      </div>
    </form>
  )
}

export default ContactForm
