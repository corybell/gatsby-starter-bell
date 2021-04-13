import React from "react"
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Card } from "components/Core"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet title="Contact" />
      <Card>
        <h1>Contact</h1>
      </Card>
    </Layout>
  )
}

export default ContactPage
