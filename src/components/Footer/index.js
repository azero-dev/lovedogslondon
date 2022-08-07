import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

import { FooterArea, Logo } from './FooterElements'
import Text from '../Text/index'
import Button from '../Button/index'


const Footer = () => {
  //Query images
  const footerPic = useStaticQuery(graphql`
    query GettingFooterPic {
      allFile(filter: { name: { eq: "logo" } }) {
          nodes {
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
      }
    }
  `)
  const pic = footerPic.allFile.nodes[0].childImageSharp.gatsbyImageData

  return (
    <>
      <FooterArea>
        <Logo>
          <GatsbyImage image={pic} alt="Footer Logo" />
        </Logo>
        <div>
          <Text dark="true">
            <span>Copyright © Lovedogs London LTD <br/> Built by <Button to='https://github.com/azero-dev' name="aZero" secondary="true" align="left" display="inline" ></Button></span>
          </Text>
        </div>
      </FooterArea>
    </>
  )
}

export default Footer