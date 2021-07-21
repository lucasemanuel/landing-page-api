import HttpResponse from '../HttpResponse'

const BadRequest = (message: string): HttpResponse => {
  return {
    body: {
      message
    },
    statusCode: 400
  }
}

export default BadRequest
