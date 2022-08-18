import * as React from 'react'
import emailjs from 'emailjs-com'
import { useState, useRef } from 'react'
import { Container } from './ContactFormElements'

const ContactForm = () => {
  const form = useRef();

  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_hys46uo', 'template_rhb7o0d', form.current, 'EM0J7sLLNKSIU8cIn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('')
      setEmail('')
      setText('')
  }

  //Handle Change
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  return (
    <Container>
      <form ref={form} onSubmit={handleSubmit} >
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Name' required></input>
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email address' required></input>
        <input type="text" name="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type your message" ></input>
        <button type="submit">Send</button>
      </form>
    </Container>
  )
}

export default ContactForm