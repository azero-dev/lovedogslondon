import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { ServWrap, ServImg, ServText } from "./ServItemComponentElements"
import Text from "../../Text/index"
import Wrapper from "../../Wrapper/index"

const ServItem = (elem) => {
  const pict = elem.items.childImageSharp.gatsbyImageData
  const name = elem.items.name
  const info = {
    Walks: <><p>Our walks take place in one of our local parks (Wormwood Scrubs, Kensington Gardens and Hampstead Heath) and it last between one and one and a half hours.</p>
    <p>-Morning walks Pick up time is from 8am and drop off after the walk.</p>
    <p>-Afternoon walks Pick up time is from 2pm and back after the walk.</p>
    <p>We all have loads of fun!</p></>,
    Daycare: <><p>We look after your best friend in a ‘home away from home’ kind of experience, sharing with them our home space. Dogs in daycare has 2 walks per day in one of our local parks. They have time to relax in between the walks and listen to some relaxing music. They really love it!</p>
    <p>Pick up from 8am and drop off between 4 and 5pm.</p></>,
    Boarding: <><p>It’s a great pleasure for us to look after your dog for 24h! We feed them what we are instructed by you and fresh water is always available to them. They can either have their own beds or choose one of ours. In between the morning and afternoon walks they can relax in the garden or anywhere in the house…obviously always in our company.</p></>
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
              { text() }
            </Text>
          </ServText>
        </ServWrap>
      </Wrapper>
  )
}

export default ServItem
