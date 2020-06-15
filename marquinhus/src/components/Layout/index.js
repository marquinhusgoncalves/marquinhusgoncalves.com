import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from "../Footer"

import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => (
  <S.LayoutWrapped>
    <GlobalStyles />
    <Header />
    <S.LayoutMainWrapped>{children}</S.LayoutMainWrapped>
    <Footer />
  </S.LayoutWrapped>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
