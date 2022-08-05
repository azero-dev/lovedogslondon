import * as React from 'react'
import { HeadLink } from './NormalElements'


const Normal = () => {
  return (
    <>
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
      <HeadLink to="/#Contact" activeClassName="selected">
        Contact us
      </HeadLink>
    </>
  )
}

export default Normal