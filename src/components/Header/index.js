import * as React from 'react'
import PropTypes from "prop-types"
import { HeadArea, Logo, HeadLink, Menu } from './HeaderElements'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'


const Header = ({ siteTitle }) => {
  return (
    <>
      <HeadArea>
        <Logo>
          <Link to="/">
            <StaticImage
              src="../../images/logo-min.png"
              width={90}
              alt="Logo"
              placeholder='tracedSVG'
              loading='eager'
            />
          </Link>
        </Logo>
        <Menu>
          <HeadLink to="/" activeClassName="selected">
            Home
          </HeadLink>
          <HeadLink to="/services" activeClassName="selected">
            Services
          </HeadLink>
          <HeadLink to="/gallery" activeClassName="selected">
            Gallery
          </HeadLink>
          <HeadLink to="/about" activeClassName="selected">
            About us
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