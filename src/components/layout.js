import * as React from "react"
import { useState, useEffect, createContext } from "react";

import "./layout.css"
import HeaderHelper from './HeaderHelper/index'
import Header from "./Header/index"
import { Main, Body } from './LayoutElemets'
import Footer from "./Footer/index"

// Create Context
export const MyContext = createContext()

const Layout = ({ children }) => {

  //Check scroll
  const [isShrunk, setShrunk] = useState(false)
  useEffect(() => {
    const handler = () => {
      setShrunk(isShrunk => document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 ? true : false)
      }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <MyContext.Provider value={isShrunk}>
      <Body inScroll={isShrunk}>
        <script data-goatcounter="https://whoin.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        <Header />
        <HeaderHelper />
        <Main>{children}</Main>
        <Footer />
      </Body>
    </MyContext.Provider>
  )
}

export default Layout