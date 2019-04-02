const express = require('express')
const fetch = require('isomorphic-fetch')

const router = express.Router()

router.get('/transactions', async (req, res) => {
  const { from, to } = req.query
  const params = from && to ? `?from=${from}&to=${to}` : ``
  try {
    const response = await fetch(
      `https://api-sandbox.starlingbank.com/api/v1/transactions${params}`,
      {
        headers: {
          Accept: req.headers.accept,
          Authorization: req.headers.authorization,
        },
      }
    )
    const json = await response.json()

    res.status(200).json(json)
  } catch (error) {
    res.status(403).json({ error })
  }
})

router.get('/savings-goals', async (req, res) => {
  try {
    const response = await fetch(
      `https://api-sandbox.starlingbank.com/api/v2/account/${
        req.query.accountUid
      }/savings-goals`,
      {
        headers: {
          Accept: req.headers.accept,
          Authorization: req.headers.authorization,
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    res.status(200).json(json)
  } catch (error) {
    res.status(403).json({ error })
  }
})

router.put('/savings-goals', async (req, res) => {
  const baseUrl = `https://api-sandbox.starlingbank.com/api/v2/account/`
  const url =
    req.query.savingsGoalUid && req.query.transferUid
      ? `${baseUrl}${req.query.accountUid}/savings-goals/${
          req.query.savingsGoalUid
        }/add-money/${req.query.transferUid}`
      : `${baseUrl}${req.query.accountUid}/savings-goals`

  console.log(req.body)

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: req.headers.accept,
        Authorization: req.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
    const json = await response.json()

    res.status(200).json(json)
  } catch (error) {
    res.status(403).json({ error })
  }
})

module.exports = router
