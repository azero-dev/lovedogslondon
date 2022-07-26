import * as React from 'react'
import { HeadArea, Logo, HeadLink, Menu } from './HeaderElements'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const Header = () => {
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

export default Header