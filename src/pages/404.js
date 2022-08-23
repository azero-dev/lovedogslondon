import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Text from "../components/Text"
import Wrapper from '../components/Wrapper/index'
import Button from "../components/Button"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Wrapper>
      <Text>
        <h1>404: Page not Found</h1>
        <p>We don't know what happened, but it did't work...</p>
      </Text>
      <Button to="/" name="Go back to the homepage" ></Button>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
