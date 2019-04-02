import React from 'react'
import renderer from 'react-test-renderer'
import AccountContext from '../../context/accountProvider'

import Transactions from './transactions'

const mockState = {
  transactions: [],
}

const renderWithContext = node =>
  renderer.create(
    <AccountContext.Provider value={mockState}>{node}</AccountContext.Provider>
  )

describe('<Transactions/>', () => {
  describe('@renders', () => {
    it('renders correctly', () => {
      const tree = renderWithContext(<Transactions />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
