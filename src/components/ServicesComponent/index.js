import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ServWrap, ServImg, ServText } from "./ServicesComponentElements"
import Text from "../Text/index"
import Wrapper from "../Wrapper/index"

const ServicesComponent = () => {
  //Query images
  const servicesImg = useStaticQuery(graphql`
    query GettingServImg {
      walk: file(
        name: { eq: "Walking" }
        relativeDirectory: { eq: "services" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      daycare: file(
        name: { eq: "Daycare" }
        relativeDirectory: { eq: "services" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
      boarding: file(
        name: { eq: "Boarding" }
        relativeDirectory: { eq: "services" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  `)
  const servicesPics = servicesImg.walk.childImageSharp.gatsbyImageData

  return (
    <>
      <Wrapper>
        <Text>
          <h1>This are our services</h1>
        </Text>
        <Text align="justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            finibus enim id justo ultrices egestas. Proin risus mi, tempor non
            semper vel, tempor ac purus. Etiam malesuada nulla ultricies tortor
            vehicula aliquam. Pellentesque eleifend augue at risus scelerisque,
            id condimentum nulla scelerisque. Suspendisse scelerisque, mauris in
            pharetra gravida, tortor massa feugiat ex, sit amet malesuada ligula
            ante quis mauris. Nam facilisis vulputate gravida.{" "}
          </p>
        </Text>
      </Wrapper>
      <Wrapper>
        <ServWrap distribution="left">
          <ServImg>
            <GatsbyImage image={servicesPics} alt="walk logo" />
          </ServImg>
          <ServText>
            <Text>
              <h1>Text</h1>
            </Text>
            <Text align="justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                finibus enim id justo ultrices egestas. Proin risus mi, tempor
                non semper vel, tempor ac purus. Etiam malesuada nulla ultricies
                tortor vehicula aliquam. Pellentesque eleifend augue at risus
                scelerisque, id condimentum nulla scelerisque.
              </p>
            </Text>
          </ServText>
        </ServWrap>
      </Wrapper>
    </>
  )
}

export default ServicesComponent
