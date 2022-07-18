import * as React from 'react'
import PropTypes from "prop-types"
import { HeadArea, Logo, HeadLink, Menu } from './HeaderElements'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const Header = ({ siteTitle }) => {
  const dataLogo = useStaticQuery(graphql`
    query HeaderLogo {
      file(relativePath: { eq: "logo-min.png" }) {
        childImageSharp {
          gatsbyImageData(width: 90)
        }
      }
    }
  `)

  const logo = getImage(dataLogo.file.childImageSharp.gatsbyImageData)

  return (
    <>
      <HeadArea>
        <Logo>
          <Link to="/">
            <GatsbyImage image={logo} alt="Logo"/>
          </Link>
        </Logo>
        <Menu>
          <HeadLink to="/" activeClassName="selected">
            Home
          </HeadLink>
          <HeadLink to="/about" activeClassName="selected">
            About us
          </HeadLink>
          <HeadLink to="/gallery" activeClassName="selected">
            Gallery
          </HeadLink>
          <HeadLink to="/services" activeClassName="selected">
            Services
          </HeadLink>
          <HeadLink to="/contact" activeClassName="selected">
            Contact us
          </HeadLink>
        </Menu>
      </HeadArea>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `FacuSounds`,
}

export default Header