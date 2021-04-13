import React from "react"
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Card } from "components/Core"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet title="About" />
      <Card>
        <h1>About</h1>
      </Card>
    </Layout>
  )
}

export default AboutPage
