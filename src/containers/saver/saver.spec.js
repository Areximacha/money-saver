import React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'
import AccountContext from '../../context/accountProvider'

import Saver from './saver'

const mockState = {
  transactions: [
    {
      amount: -2.5,
    },
    {
      amount: -5.25,
    },
  ],
}

const renderWithContext = node =>
  render(
    <AccountContext.Provider value={mockState}>{node}</AccountContext.Provider>
  )

describe('<Saver/>', () => {
  beforeEach(() => {
    global.fetch.resetMocks()
  })

  describe('@lifecycle', () => {
    it('loads with an initial saved state of false', () => {
      const { getByText } = renderWithContext(<Saver />)

      expect(getByText('This week you could save:')).toBeTruthy()
    })

    // This will produce a warning as we are updating the state in an async callback so it is running outside of a batch update.
    // https://github.com/kentcdodds/react-testing-library/issues/281
    it('updates state when button is clicked', async () => {
      global.fetch.mockResponseOnce(
        JSON.stringify({
          success: true,
        })
      )
      const { getByText } = renderWithContext(<Saver />)

      fireEvent.click(getByText('OMG SAVE NOW!'))

      const savedState = await waitForElement(() =>
        getByText('Well done!! You have saved:')
      )

      expect(savedState).toBeTruthy()
    })

    it('loads with an initial totalToSave state', () => {
      const { getByText } = renderWithContext(<Saver />)

      expect(getByText('£1.25')).toBeTruthy()
    })
  })
})
