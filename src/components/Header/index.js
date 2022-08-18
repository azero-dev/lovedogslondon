import * as React from 'react'
import { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { HeadArea, Logo, Menu } from './HeaderElements'
import Normal from './Normal/index'
import Responsive from './Responsive/index'


const Header = () => {
  //Getting Logo
  const getLogo = useStaticQuery(graphql`
    query GettingLogo {
      file(name: {eq: "logo-min"}) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, width: 90)
        }
      }
    }
  `)
  const logo = getLogo.file.childImageSharp.gatsbyImageData


  //Handling resizing
  const [windowWidth, setWindowWidth] = useState(0)
  const breakPoint = 1024;
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleWinResize = () => {setWindowWidth(window.innerWidth)}
    window.addEventListener("resize", handleWinResize)
    return() => window.removeEventListener("resize", handleWinResize)
  }, [])

  return (
    <>
      <HeadArea>
        <Logo>
          <Link to="/">
            <GatsbyImage image={logo} alt="Logo" />
          </Link>
        </Logo>
        <Menu>
          {windowWidth > breakPoint ? <Normal /> : <Responsive />}
        </Menu>
      </HeadArea>
    </>
  )
}

export default Header