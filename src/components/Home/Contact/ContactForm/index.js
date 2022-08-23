import * as React from 'react'
import emailjs from 'emailjs-com'
import { useState, useRef } from 'react'
import { Container } from './ContactFormElements'
import Text from '../../../Text/index'

const ContactForm = () => {
  const form = useRef();

  //Handle form request return
  const [sendIt, setSendIt] = useState('')

  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_hys46uo', 'template_rhb7o0d', form.current, 'EM0J7sLLNKSIU8cIn')
      .then((result) => {
          console.log(result.text);
          setSendIt(true)
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
    <>
      <Container>
        <form ref={form} onSubmit={handleSubmit} >
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Name' required></input>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email address' required></input>
          <textarea type="text" name="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type your message" maxlength="1000" required></textarea>
          <button type="submit">Send</button>
        </form>
        {sendIt ? <Text dark="true"><h3>Message sent!</h3></Text> : null}
      </Container>
    </>
  )
}

export default ContactForm