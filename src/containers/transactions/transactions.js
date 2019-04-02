import React from 'react'
import { useStateValue } from '../../context/accountProvider'

import Transaction from '../../components/transaction/transaction'

import { TransactionsContainer, TransactionsBox } from './transactions.style'

const Transactions = () => {
  const { transactions } = useStateValue()

  const renderTransactions = () =>
    transactions.map(transaction => (
      <Transaction key={transaction.id} transaction={transaction} />
    ))

  return (
    <TransactionsContainer>
      <h3>Your Outgoing Transactions This Week</h3>
      <TransactionsBox>{renderTransactions()}</TransactionsBox>
    </TransactionsContainer>
  )
}

export default Transactions
