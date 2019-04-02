import React, { useState, useEffect } from 'react'
import uuidv4 from 'uuid/v4'
import { useStateValue } from '../../context/accountProvider'
import { accessToken, accountUid } from '../../config'

import { SaverContainer, SaverBox, SaverButton } from './saver.style'

const Saver = () => {
  const { transactions, savingsGoalUid } = useStateValue()
  const [saved, setSaved] = useState(false)
  const [totalToSave, setTotalToSave] = useState(0)

  useEffect(() => {
    setTotalToSave(getRoundUp())
  })

  const getRoundUp = () => {
    const remainingChange = transactions.map(
      transaction =>
        100 - (Math.abs(transaction.amount) % 1).toFixed(2).substring(2)
    )

    const roundUp = remainingChange.reduce((acc, amount) => {
      return acc + amount
    }, 0)

    return roundUp
  }

  const saveTotal = async () => {
    const transferUid = uuidv4()
    const query = `/api/savings-goals?accountUid=${accountUid}&savingsGoalUid=${savingsGoalUid}&transferUid=${transferUid}`

    const body = {
      amount: {
        currency: 'GBP',
        minorUnits: totalToSave,
      },
    }

    const response = await fetch(query, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const json = await response.json()

    if (json.success) {
      setSaved(true)
    }
  }

  return (
    <SaverContainer>
      <h3>Round Up Saver</h3>
      <SaverBox>
        <p>
          We round up all the transactions you made in the past 6 days to the
          nearest pound and give you the chance to throw it into your savings
          goal!
        </p>
        {saved ? (
          <>
            <span>Well done!! You have saved:</span>
            <h1>{`£${totalToSave / 100}`}</h1>
          </>
        ) : (
          <>
            <span>This week you could save:</span>
            <h1>{`£${totalToSave / 100}`}</h1>
            <SaverButton type='button' onClick={saveTotal}>
              OMG SAVE NOW!
            </SaverButton>
          </>
        )}
      </SaverBox>
    </SaverContainer>
  )
}

export default Saver
