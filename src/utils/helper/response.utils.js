const httpStatus = require('http-status')

function makeResponseHelper (response) {
  return {
    sendSuccessResponse: (resData) => {
      const { data = null, message = 'OK', statusCode = httpStatus.OK } = resData
      const responseSchema = {
        status: statusCode,
        success: true,
        message,
        data
      }
      if (typeof resData === 'string') {
        responseSchema.message = resData
        responseSchema.data = null
      } else {
        responseSchema.message = message
        responseSchema.data = data
      }

      return response.status(statusCode).send(responseSchema)
    },
    // TODO: implement error response method
    sendErrorResponse: () => {

    }
  }
}

module.exports = makeResponseHelper
