import HttpResponse from '../HttpResponse'

const Created = (body: object | undefined = undefined): HttpResponse => {
  return {
    body,
    statusCode: 201
  }
}

export default Created
