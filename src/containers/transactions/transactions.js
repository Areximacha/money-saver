import React from 'react'
import useFetch from '../../hooks/useFetch'

import Transaction from '../../components/transaction/transaction'

import TransactionsContainer from './transactions.style'

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

const getRecentOutgoingTransactions = () => {
  const { from, to } = getPastWeek()
  const query = `/api/transactions?from=${from}&to=${to}`
  const data = useFetch(query)

  if (data) {
    return data._embedded.transactions.filter(
      transaction => transaction.direction === 'OUTBOUND'
    )
  }
  return []
}

const Transactions = () => {
  const transactions = getRecentOutgoingTransactions()

  const renderTransactions = () =>
    transactions.map(transaction => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))

  console.log(transactions)

  return (
    <TransactionsContainer>
      <h4>Your Recent Outgoing Transactions</h4>
      <div>{renderTransactions()}</div>
    </TransactionsContainer>
  )
}

export default Transactions
