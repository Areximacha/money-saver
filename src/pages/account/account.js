import React, { useReducer, useEffect } from 'react'
import AccountProvider from '../../context/accountProvider'
import { accessToken, accountUid } from '../../config'

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
  savingsGoalUid: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.transactions,
      }
    case 'SET_SAVINGSGOALID':
      return {
        ...state,
        savingsGoalUid: action.savingsGoalUid,
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
        transaction =>
          transaction.direction === 'OUTBOUND' &&
          transaction.source !== 'INTERNAL_TRANSFER'
      ),
    })
  }

  const savingsGoalRequest = async (method, body) => {
    const query = `/api/savings-goals?accountUid=${accountUid}`

    const response = await fetch(query, {
      method: method || 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body,
    })

    const json = await response.json()

    return json
  }

  const fetchSavingsGoal = async () => {
    const json = await savingsGoalRequest()

    const roundupSavingsGoal = json.savingsGoalList.find(
      goal => goal.name === 'Round Up Saver'
    )

    if (roundupSavingsGoal) {
      dispatch({
        type: 'SET_SAVINGSGOALID',
        savingsGoalUid: roundupSavingsGoal.savingsGoalUid,
      })
    } else {
      createSavingsGoal()
    }
  }

  const createSavingsGoal = async () => {
    const requestBody = {
      name: 'Round Up Saver',
      currency: 'GBP',
    }

    const json = await savingsGoalRequest('PUT', JSON.stringify(requestBody))
    dispatch({
      type: 'SET_SAVINGSGOALID',
      savingsGoalUid: json.savingsGoalUid,
    })
  }

  useEffect(() => {
    fetchSavingsGoal()
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
