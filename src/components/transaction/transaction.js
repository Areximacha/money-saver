import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({ transaction }) => {
  return (
    <div>
      <div>{transaction.balance}</div>
      <div>{transaction.amount}</div>
      <div>{transaction.narrative}</div>
    </div>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
}

export default Transaction
