import * as express from 'express'

export default function StatusRoutes (app: express.Application) {
    app.get('/status', async (req, res) => {
      return res.json({status: 'OK'})
    })
  }
  