import HttpResponse from '../HttpResponse'

const InternalServerError = (
  message: string = 'Internal Server Error'
): HttpResponse => {
  return {
    body: {
      message
    },
    statusCode: 500
  }
}

export default InternalServerError
