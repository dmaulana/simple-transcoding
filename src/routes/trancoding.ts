import * as T from '../types'
import * as express from 'express'
import * as ffmpeg from 'ffmpeg-static'
import Encode from '../utils/encode'
import Transcode from '../utils/transcoding'

export default function TranscodingRoutes (app: express.Application) {
    app.post('/encode', async (req, res) => {
      const {
          inputFile,
          outputPath
      } = req.body

      await Encode(inputFile,outputPath)

      return res.json({status: ffmpeg})
    })
    app.post('/transcode', async (req, res) => {
      const {
          outputPath
      } = req.body

      await Transcode(outputPath)

      return res.json({status: ffmpeg})
    })
  }