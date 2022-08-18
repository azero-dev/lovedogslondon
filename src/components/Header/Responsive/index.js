import * as React from 'react'
import { useState, useContext  } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { HeadLink, DropdownMenu, Content, Burger } from './ResponsiveElements'
import { MyContext } from '../../layout'


const Responsive = children => {
  //Query burgers
  const getBurger = useStaticQuery(graphql`
    query GettingBurger {
      burgerClose: file(name: {eq: "burgerClose"}) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
      burgerOpen: file(name: {eq: "burgerOpen"}) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  `)
  const burgerClose = getBurger.burgerClose.childImageSharp.gatsbyImageData
  const burgerOpen = getBurger.burgerOpen.childImageSharp.gatsbyImageData

  //handleClick
  const [isBurgerClose, setIsBurgerClose] = useState(true)
  const handleClick = () => {
    setIsBurgerClose(!isBurgerClose)
  }

  //Get Context info
  const shrink = useContext(MyContext)

  return (
    <>
      <DropdownMenu>
        <Burger onClick={handleClick}>
          {isBurgerClose ? <GatsbyImage image={burgerClose} alt="burger"/> : <GatsbyImage image={burgerOpen} alt="burger"/>}
        </Burger>
        <Content close={isBurgerClose} shrink={shrink} >
          <HeadLink onClick={handleClick} to="/" activeClassName="selected">
            Home
          </HeadLink>
          <HeadLink onClick={handleClick} to="/services" activeClassName="selected">
            Services
          </HeadLink>
          <HeadLink onClick={handleClick} to="/gallery" activeClassName="selected">
            Gallery
          </HeadLink>
          <HeadLink onClick={handleClick} to="/about" activeClassName="selected">
            About us
          </HeadLink>
          <HeadLink onClick={handleClick} to="/#Contact" activeClassName="selected">
            Contact us
          </HeadLink>
        </Content>
      </DropdownMenu>
    </>
  )
}

export default Responsive






