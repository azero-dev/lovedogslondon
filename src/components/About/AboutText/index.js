import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Btn } from './IntroElements'
import Button from '../../Button/index'
import Text from '../../Text/index'

const AboutText = () => {
  return (
    <Container>
      <Text>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque in leo pharetra iaculis quis eu nulla. Integer sed leo pellentesque, auctor orci quis, dapibus est. Nam sodales dui ac fringilla posuere. Aliquam arcu mi, consectetur vel volutpat vitae, hendrerit ut metus.</p>
        <p>Sed nec pharetra magna. Quisque molestie efficitur urna, quis convallis nibh auctor at. Nam sodales dui ac fringilla posuere. Aliquam arcu mi, consectetur vel volutpat vitae, hendrerit ut metus. Vivamus risus purus, egestas at nunc vitae, venenatis pellentesque tellus. Donec at vestibulum tellus, vel pretium massa. Nam luctus molestie purus. Nam egestas ante eget enim ornare luctus. Duis sagittis eros quis ipsum faucibus lobortis. Nunc lobortis laoreet sem, vel vehicula tortor vehicula id. Curabitur a pellentesque nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Text>
      <Btn>
        <Link to="/about">
          <Button name="Know our story" primary="true" />
        </Link>
      </Btn>
    </Container>
  )
}

export default AboutText