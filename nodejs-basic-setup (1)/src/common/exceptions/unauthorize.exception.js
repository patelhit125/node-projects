const { HTTP_UNAUTHORIZE } = require('../../../constants')
const GeneralError = require('./general-error')

class UnauthorizeException extends GeneralError {
  constructor(message) {
    super()
    this.message = message || 'Unauthenticated.'
    this.status = HTTP_UNAUTHORIZE
  }
}

export default UnauthorizeException
