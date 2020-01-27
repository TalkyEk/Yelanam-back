const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const routes = require('./routes')
const { makeResponseHelper } = require('./../utils/helper')

module.exports = (app) => {
  // set development mode
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  app.get('/status', (req, res) => res.status(200).send({ message: 'OK' }))

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // add response helper
  app.use((req, res, next) => {
    req.makeResponse = makeResponseHelper(res)
    next()
  })

  // for secure
  app.use(helmet())

  routes(app)
}
