/* eslint import/no-extraneous-dependencies: "off" */

import compressionMiddleware from 'compression'
import express from 'express'

import htmlMiddleware from './middleware/html'

const app = express()

// Security reasons, this should be the default in express
app.set('x-powered-by', false)

  // Making sure everything works on a Heroku + Cloudflare infrastructure
app.enable('trust proxy')

app.use(compressionMiddleware())
app.use(express.static('public', { maxAge: 86400000 * 365, index: false }))
app.use(htmlMiddleware())

app.listen(process.env.PORT || 5000)
