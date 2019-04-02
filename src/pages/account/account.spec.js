import React from 'react'
import renderer from 'react-test-renderer'

import Account from './account'

describe('<Account/>', () => {
  describe('@renders', () => {
    it('renders as expected', () => {
      const tree = renderer.create(<Account />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
