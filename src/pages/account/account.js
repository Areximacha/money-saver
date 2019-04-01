import React from 'react'

import Layout from '../../components/layout'
import Transactions from '../../containers/transactions/transactions'
import Saver from '../../containers/saver/saver'

import AccountContainer from './account.style'

const Account = () => {
  return (
    <Layout title='Your Account'>
      <AccountContainer>
        <Transactions />
        <Saver />
      </AccountContainer>
    </Layout>
  )
}

export default Account
