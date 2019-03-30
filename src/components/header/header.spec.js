import React from 'react'
import { render } from 'react-testing-library'

import Header from './header'

const initProps = {
  title: 'batman',
}

describe('<Header/>', () => {
  describe('@render', () => {
    it('should render the title', () => {
      const { getByText } = render(<Header {...initProps} />)

      expect(getByText('batman')).toBeTruthy()
    })
  })
})
