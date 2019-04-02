import React from 'react'
import { render } from 'react-testing-library'

import Transaction from './transaction'

const initProps = {
  transaction: {
    narrative: 'spider-man',
    amount: -24.6,
    balance: 2938.3,
  },
}

describe('<Transaction/>', () => {
  describe('@render', () => {
    it('should render all the passed data properly', () => {
      const { getByText } = render(<Transaction {...initProps} />)

      expect(getByText('spider-man')).toBeTruthy()
      expect(getByText('£24.60')).toBeTruthy()
      expect(getByText('£2938.30')).toBeTruthy()
    })
  })
})
