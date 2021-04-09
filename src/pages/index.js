import React from "react"
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Title } from "components/Core"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Home" />
      <Title>Home</Title>
    </Layout>
  )
}

export default IndexPage
