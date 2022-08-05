import * as React from 'react'
import { Container, Highlight } from './AboutElements'
import Text from '../../Text/index'

const AboutText = elem => {
  return (
    <Container>
      { elem.part === "first" ? 
        <>
          <Text align="center">
            <h1>Lovedogs London</h1>
          </Text>
          <Text align="justify">
            <p>Isabella was born in the Italian countryside surrounded by the Alps where she grew up helping her aunt rear cattle. During that period she trained German shepherd dogs to drive the herd high up the mountains in the summer to help them escape the high temperatures. She loves dogs and she believes they are her best friends.</p>
            <p>Vekison was raised on a family owned farm in Belo Horizonte, Brazil, where he played an active role in the rearing and training of dogs, horses and other farm animals. He has been handling all types of dog breeds for the past 15 years.</p>
          </Text>
        </>
        :
        <>
          <Text align="justify">
            <p>When in our care, dogs have free time together and are able to socialise, sleep and play in a safe and clean environment. We believe that a ‘home away from home’ experience for your dog is the best way to look after them, making them feel as part of the family. They will be offered one of our comfortable beds or if you prefer, they can bring their own.</p>
            <p>We have NO KENNELS, NO CAGES AND NO EXTERNAL ARRANGEMENTS. All dog walks take place in one of the local parks and are a minimum of one hour.</p>
            <p>We are happy to pick up and drop off your dog within our collection area. Love Dogs can tailor walks to your dog‘s needs: we take care of all dog breeds, from puppies going on their first walk to more mature dogs that might need slower walks.</p>
          </Text>
          <Highlight>
            <Text dark="true" align="justify" >
              <p>London free collection:</p>
              <p>Kensington, Chelsea, Notting Hill, Bayswater, Ladbroke Grove, Holland Park, Earls Court, South Kensington, Kensal Rise, Belgravia Shepherds Bush, Fulham, Chiswick, Hammersmith, Maida Vale, Kightbridge, West Kensington, Regent's Park, Edgwere Road, West London, Mayfair, St Jhon's Wood,W2, W4, W6, W8, W9, W10, W11, W12, W14, SW1, SW3, SW5, SW6, SW7, SW10, NW1, NW5, NW6, NW10.</p>
            </Text>
          </Highlight>
        </>
      }
    </Container>
  )
}

export default AboutText