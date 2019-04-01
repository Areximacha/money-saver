import React from 'react'
import PropTypes from 'prop-types'

import {
  TransactionCard,
  TransactionLeft,
  TransactionRight,
} from './transaction.style'

const Transaction = ({ transaction: { narrative, amount, balance } }) => {
  return (
    <TransactionCard>
      <TransactionLeft>
        <h4>{narrative}</h4>
      </TransactionLeft>
      <TransactionRight>
        <h4>{`£${Math.abs(amount).toFixed(2)}`}</h4>
        <small>{`£${balance.toFixed(2)}`}</small>
      </TransactionRight>
    </TransactionCard>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
}

export default Transaction
