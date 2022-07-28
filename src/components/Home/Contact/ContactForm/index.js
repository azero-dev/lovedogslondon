import * as React from 'react'
import { Container } from './ContactFormElements'

const ContactForm = () => {
  return (
    <Container>
      <form id="form">
        <input type="text" name="name" placeholder='Name' required></input>
        <input type="email" name="email" placeholder='Email address' required></input>
        <textarea id="subject" name="subject" placeholder="Type your message" ></textarea>
        <input type="hidden" name="_next" value="https://inferente.com"></input>
        <input type="hidden" name="_subject" value="New message from contact form"></input>
        <input type="text" name="_honey" style={{display: "none"}}></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <button type="submit">Send</button>
      </form>
      {/* <script>
        const myForm = document.getDocumentById('form');

        myForm.addEventListener('submit', function (e) {
          e.preventDefault()

          const formData = new formData(this)
        })
      </script> */}
    </Container>
  )
}

export default ContactForm