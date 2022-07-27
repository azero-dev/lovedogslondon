import * as React from 'react'
import { Link } from 'gatsby'
import { Container, TextWrap, ContactDetails } from './ContactElements'
import Text from '../../Text/index'
import ContactForm from './ContactForm/index'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Contact = () => {

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
          <p>Phone Number: 07923 377445</p>
          <p>Email: lovedogslondon@gmail.com</p>
          <p>Address: 27A Portnall Road, W9 3BA, London</p>
        </Text>
        {icons.map((elem, index) => {
          return (
            <Link to={elem.node.name === 'facebook' ? 'https://www.facebook.com/lovedogslondon' : 'https://instagram.com/lovedogslondonltd'} key={index}>
              <GatsbyImage image={elem.node.childImageSharp.gatsbyImageData} alt="" />
            </Link>
          )
        })}
      </ContactDetails>
    </Container>
  )
}

export default Contact