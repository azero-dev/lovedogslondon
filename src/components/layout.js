import * as React from "react"
import { useState, useEffect } from "react";

import "./layout.css"
import Header from "./Header/index"
import { Main, Body } from './LayoutElemets'
import Footer from "./Footer/index"

const Layout = ({ children }) => {

  //Check scroll
  const [isShrunk, setShrunk] = useState(false)
  useEffect(() => {
    const handler = () => {
      setShrunk(isShrunk => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true
        }
        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false
        }
        return isShrunk
      })
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <Body inScroll={isShrunk}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Body>
  )
}

export default Layout