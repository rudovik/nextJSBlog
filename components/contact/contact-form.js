const ContactForm = () => {
  return (
    <form className='contact-form'>
      <div className='contact-form__controls'>
        <div className='contact-form__control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className='contact-form__control'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' required />
        </div>
      </div>
      <div className='contact-form__control'>
        <label htmlFor='message'>Your Message</label>
        <textarea id='message' rows='5'></textarea>
      </div>
      <div className='contact-form__actions'>
        <button className='contact-form__button'>Send Message</button>
      </div>
    </form>
  )
}

export default ContactForm
