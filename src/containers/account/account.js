import React from 'react'
import useFetch from '../../hooks/useFetch'

import Layout from '../../components/layout'

const Account = () => {
  const query = '/api/transactions'
  const result = useFetch(query)

  console.log(result)

  return (
    <Layout title='Your Account'>
      <div>test</div>
    </Layout>
  )
}

export default Account
