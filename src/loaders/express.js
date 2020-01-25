const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')

module.exports = (app) => {
  // set development mode
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  app.get('/status', (req, res) => res.status(200).send({ message: 'OK' }))

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // for secure
  app.use(helmet())
}
