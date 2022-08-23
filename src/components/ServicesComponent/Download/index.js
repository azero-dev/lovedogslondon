import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Wrapper from "../../Wrapper/index"
import Button from '../../Button/index'

const Download = () => {

  const getFile = useStaticQuery(graphql`
    query GetFile {
      file(name: { eq: "AFTC" }) {
        publicURL
      }
    }
  `)
  const file = getFile.file.publicURL

  return (
    <Wrapper>
      <Button to={file} name="Download Agreement form and Terms & Conditions" />
    </Wrapper>
  )
}

export default Download
