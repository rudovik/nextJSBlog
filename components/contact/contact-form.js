import { useState, useEffect } from 'react'
import Notification from '../ui/notification'

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }
}

// const notificationData = {
//   pending: {
//     status: 'pending',
//     title: 'Sending message...',
//     message: 'Your message is on its way!',
//   },
//   success: {
//     status: 'success',
//     title: 'Success!',
//     message: 'Message sent successfully!',
//   },
// }

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState() // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    let timer
    if (requestStatus === 'success' || requestStatus === 'error') {
      timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [requestStatus])

  const sendMessageHandler = async (event) => {
    event.preventDefault()

    try {
      setRequestStatus('pending')
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })
      setRequestStatus('success')
      setEnteredEmail('')
      setEnteredName('')
      setEnteredMessage('')
      event.target.reset()
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message is sent successfully!',
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    }
  }

  return (
    <>
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </>
  )
}

export default ContactForm
