import * as React from 'react'
import { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Container, TextWrap, ContactDetails } from './ContactElements'
import Text from '../../Text/index'
import ContactForm from './ContactForm/index'

const Contact = () => {
  // Query social media icons
  const socialMedia = useStaticQuery(graphql`
    query GetSocialMedia {
      allFile(filter: {relativeDirectory: {eq: "SocialMedia"}}) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
    }  
  `)
  const icons = socialMedia.allFile.edges

  // Reveal contact info
  const [reveal, setReveal] = useState(false)
  const handleClick = () => {
    setReveal(true)
  }

  return (
    <Container>
      <TextWrap>
        <Text dark="true">
          <h1 id="Contact">Get in touch</h1>
        </Text>
      </TextWrap>
      <ContactForm />
      <ContactDetails>
        <Text dark="true" align="left">
          {reveal ? <p style={{display: "inline"}}>Phone Number: 07923 377445</p> : <><p style={{display: "inline"}}>Phone Number:&nbsp;</p><button onClick={handleClick}>Reveal contact details.</button></> }
        </Text>
        <Text dark="true" align="left">
          {reveal ? <p style={{display: "inline"}}>Email: lovedogslondon@gmail.com</p> : <><p style={{display: "inline"}}>Email:&nbsp;</p><button onClick={handleClick}>Reveal contact details.</button></> }
        </Text>
        <Text dark="true" align="left">
          {reveal ? <p style={{display: "inline"}}>Address: W9, London</p> : <><p style={{display: "inline"}}>Address:&nbsp;</p><button onClick={handleClick}>Reveal contact details.</button></> }
        </Text>
        {icons.map((elem, index) => {
          return (
            <a href={elem.node.name === 'facebook' ? 'https://www.facebook.com/lovedogslondon' : 'https://instagram.com/lovedogslondonltd'} key={index}>
              <GatsbyImage image={elem.node.childImageSharp.gatsbyImageData} alt="" />
            </a>
          )
        })}
      </ContactDetails>
    </Container>
  )
}

export default Contact