import ContactSection from '../components/contact/contact-section'
import Head from 'next/head'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactSection />
    </>
  )
}

export default ContactPage
