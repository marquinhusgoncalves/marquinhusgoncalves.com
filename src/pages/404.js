import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Titles from "../components/Titles"
import NotFound from "../components/NotFound"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Paage not found" />
    <Titles title="404 - Page not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
