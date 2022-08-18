import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Text from "../Text/index"
import Wrapper from "../Wrapper/index"
import ServItem from './ServItem/index'

const ServicesComponent = () => {
  //Query images
  const servicesImg = useStaticQuery(graphql`
    query GettingServImg {
      walk: file(
        name: { eq: "Walks" }
        relativeDirectory: { eq: "services" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
        name
      }
      daycare: file(
        name: { eq: "Daycare" }
        relativeDirectory: { eq: "services" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
        name
      }
      boarding: file(
        name: { eq: "Boarding" }
        relativeDirectory: { eq: "services" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
        name
      }
    }
  `)

  const ourServices = "Our aim is to make sure all dogs needs are met for their healthy physical and psychological growth. Socialising is a very important part of everyday dog life as much as it is for us humans. We stimulate them, encourage them in playing together and get to bond with each other because the sense of belonging to a pack is again fundamental for their happiness."

  return (
    <>
      <Wrapper>
        <Text>
          <h1>Services</h1>
        </Text>
        <Text align="justify">
          <p>{ ourServices }</p>
        </Text>
      </Wrapper>
      { Object.values(servicesImg).map((elem, index) => {
        return (<ServItem items={elem} key={index} />)
      }) }
    </>
  )
}

export default ServicesComponent
