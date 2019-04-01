import React, { useReducer, useEffect } from 'react'
import AccountProvider from '../../context/accountProvider'
import accessToken from '../../config'

import Layout from '../../components/layout'
import Transactions from '../../containers/transactions/transactions'
import Saver from '../../containers/saver/saver'

import AccountContainer from './account.style'

const getPastWeek = () => {
  const date = new Date()

  const to = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    0
  )}-${String(date.getDate()).padStart(2, 0)}`

  date.setDate(date.getDate() - 6)
  const from = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    0
  )}-${String(date.getDate()).padStart(2, 0)}`

  return {
    from,
    to,
  }
}

const initialState = {
  transactions: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.transactions,
      }
    default:
      return state
  }
}

const Account = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchRecentTransactions = async () => {
    const { from, to } = getPastWeek()
    const query = `/api/transactions?from=${from}&to=${to}`

    const response = await fetch(query, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()

    dispatch({
      type: 'SET_TRANSACTIONS',
      transactions: json._embedded.transactions.filter(
        transaction => transaction.direction === 'OUTBOUND'
      ),
    })
  }

  useEffect(() => {
    fetchRecentTransactions()
  }, [])

  return (
    <Layout title='Your Account'>
      <AccountProvider.Provider value={state}>
        <AccountContainer>
          <Transactions />
          <Saver />
        </AccountContainer>
      </AccountProvider.Provider>
    </Layout>
  )
}

export default Account
