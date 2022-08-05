import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { HeadArea, Logo, Menu } from './HeaderElements'
import Normal from './Normal/index'
import Responsive from './Responsive/index'


const Header = () => {

  //Handling resizing
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const breakPoint = 1024;
  useEffect(() => {
    const handleWinResize = () => {setWindowWidth(window.innerWidth)}
    window.addEventListener("resize", handleWinResize)
    return() => window.removeEventListener("resize", handleWinResize)
  }, [])

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
          {windowWidth > breakPoint ? <Normal /> : <Responsive />}
        </Menu>
      </HeadArea>
    </>
  )
}

export default Header