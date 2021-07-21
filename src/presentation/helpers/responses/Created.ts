import HttpResponse from '../HttpResponse'

const Created = (content: object | undefined = undefined): HttpResponse => {
  return {
    body: {
      content
    },
    statusCode: 201
  }
}

export default Created
