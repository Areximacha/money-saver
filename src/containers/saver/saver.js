import React from 'react'
import { useStateValue } from '../../context/accountProvider'

import SaverContainer from './saver.style'

const Saver = () => {
  const { transactions } = useStateValue()

  console.log(transactions)

  return <SaverContainer>saver</SaverContainer>
}

export default Saver
