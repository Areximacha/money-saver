import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <div>
    <h3>{title}</h3>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
