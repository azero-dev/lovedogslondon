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

  const ourServices = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis turpis eget turpis tristique, at tempus lorem facilisis. Aliquam ornare sollicitudin mauris, vitae commodo purus euismod eu. Vestibulum tincidunt sagittis risus. Donec sed condimentum sapien. Donec dignissim nisi vitae semper scelerisque. Nulla suscipit justo eget pretium rhoncus. Cras molestie consectetur justo, sit amet vehicula augue sagittis id. Nam viverra sapien vel turpis molestie posuere."

  return (
    <>
      <Wrapper>
        <Text>
          <h1>This are our services</h1>
        </Text>
        <Text align="justify">
          <p>{ ourServices }</p>
        </Text>
      </Wrapper>
      { Object.values(servicesImg).map(elem => {
        return (<ServItem items={elem} />)
      }) }
    </>
  )
}

export default ServicesComponent
