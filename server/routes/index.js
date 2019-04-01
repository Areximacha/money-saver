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
  console.log(req.query)
  try {
    const response = await fetch(
      'https://api-sandbox.starlingbank.com/api/v2/account/300336cd-2185-adfe-bf73-de4a32dff68d/savings-goals',
      {
        method: req.method || 'GET',
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

module.exports = router
