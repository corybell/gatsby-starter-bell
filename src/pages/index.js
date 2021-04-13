import React from "react"
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Card } from "components/Core"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Home" />
      <Card>
        <h1>Home</h1>
      </Card>
    </Layout>
  )
}

export default IndexPage
