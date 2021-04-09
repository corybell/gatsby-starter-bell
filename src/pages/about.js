import React from "react"
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Title } from "components/Core"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet title="About" />
      <Title>About</Title>
    </Layout>
  )
}

export default AboutPage
