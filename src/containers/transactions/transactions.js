import React from 'react'
import { useStateValue } from '../../context/accountProvider'

import Transaction from '../../components/transaction/transaction'

import TransactionsContainer from './transactions.style'

const Transactions = () => {
  const { transactions } = useStateValue()

  const renderTransactions = () =>
    transactions.map(transaction => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))

  return (
    <TransactionsContainer>
      <h4>Your Recent Outgoing Transactions</h4>
      <div>{renderTransactions()}</div>
    </TransactionsContainer>
  )
}

export default Transactions
