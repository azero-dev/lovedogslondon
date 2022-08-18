import * as React from 'react'
import Wrapper from '../../Wrapper/index'
import { Btn } from './IntroElements'
import Button from '../../Button/index'
import Text from '../../Text/index'

const Intro = () => {
  return (
    <Wrapper>
      <Text>
        <h1>About us</h1>
        <p>We like to think our Love for dogs as the perfect example of unconditional affection and we firmly believe these clever creatures teach us humans more lessons then we realise, everyday! They deserve the best. That’s why we are committed to take great care of the dogs we look after.</p>
        <p>We enjoy watching them grow from day to day, because they are your and our best friends. We spend our own day to day lives in their beautiful company and we feel privileged for that. Sharing good and bad weather, relax and play time, always in a safe environment. It’s impressing to see how friendships among them get strong and as sociable animals, for their own well-being, just like us, they need to create bonds and be part of a community/pack. We love what we do.</p>
      </Text>
      <Btn>
          <Button to="/about" name="Know our story" link="true"/>
      </Btn>
    </Wrapper>
  )
}

export default Intro