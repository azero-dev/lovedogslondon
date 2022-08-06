import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { ServWrap, ServImg, ServText } from "./ServItemComponentElements"
import Text from "../../Text/index"
import Wrapper from "../../Wrapper/index"

const ServItem = (elem) => {
  const pict = elem.items.childImageSharp.gatsbyImageData
  const name = elem.items.name
  const info = {
    Walks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lectus facilisis arcu sollicitudin fermentum. Nam sit amet bibendum nulla. Maecenas eget tincidunt tellus. Mauris pharetra elementum risus quis commodo. In eros mauris, cursus vel augue eu, semper pellentesque libero. Nulla vulputate porttitor risus, id blandit arcu sollicitudin sit amet. Nam vitae placerat leo. Proin varius leo non mauris feugiat, non euismod ante euismod.',
    Daycare: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lectus facilisis arcu sollicitudin fermentum. Nam sit amet bibendum nulla. Maecenas eget tincidunt tellus. Mauris pharetra elementum risus quis commodo. In eros mauris, cursus vel augue eu, semper pellentesque libero. Nulla vulputate porttitor risus, id blandit arcu sollicitudin sit amet. Nam vitae placerat leo. Proin varius leo non mauris feugiat, non euismod ante euismod. ',
    Boarding: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lectus facilisis arcu sollicitudin fermentum. Nam sit amet bibendum nulla. Maecenas eget tincidunt tellus. Mauris pharetra elementum risus quis commodo. In eros mauris, cursus vel augue eu, semper pellentesque libero. Nulla vulputate porttitor risus, id blandit arcu sollicitudin sit amet. Nam vitae placerat leo. Proin varius leo non mauris feugiat, non euismod ante euismod. '
  }

  const text = () => {
    if (name === 'Walks') {
      return (info.Walks)
    } else if (name === 'Daycare') {
      return (info.Daycare)
    } else if (name === 'Boarding') {
      return (info.Boarding)
    }
  }

  return (
    <>
      <Wrapper>
        <ServWrap distribution={name === 'Daycare' ? false : 'left'}>
          <ServImg>
            <GatsbyImage image={pict} alt={`${name} logo`} />
          </ServImg>
          <ServText>
            <Text>
              <h1 id={name} >{ name }</h1>
            </Text>
            <Text align="justify">
              <p>{ text() }</p>
            </Text>
          </ServText>
        </ServWrap>
      </Wrapper>
    </>
  )
}

export default ServItem
