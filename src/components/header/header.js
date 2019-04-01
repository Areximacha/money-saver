import React from 'react'
import PropTypes from 'prop-types'

import HeaderContainer from './header.style'

const Header = ({ title }) => (
  <HeaderContainer>
    <h2>{title}</h2>
  </HeaderContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
