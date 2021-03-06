import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'

import Header from './header/header'

import reset from '../emotion/reset.style'
import base from '../emotion/base.style'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`

const Layout = ({ children, title }) => {
  return (
    <>
      <Global styles={reset} />
      <Global styles={base} />
      <Container>
        <Header title={title} />
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: ``,
}

export default Layout
