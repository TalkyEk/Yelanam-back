// TODO implement decorators

const getUser = (req) => {
  // TODO replace with data from db
  const response = {
    id: 1,
    email: 'test@gmail.com',
    nick: '@test'
  }
  req.makeResponse.sendSuccessResponse({ data: response })
}

module.exports = {
  getUser
}
