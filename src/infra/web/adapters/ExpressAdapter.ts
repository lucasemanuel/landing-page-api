import HttpRequest from '../../../presentation/helpers/HttpRequest'
import HttpResponse from '../../../presentation/helpers/HttpResponse'
import { Request, Response } from 'express'

const ExpressAdapter = {
  adapt (controller: any) {
    return (request: Request, response: Response): Response | any => {
      const httpRequest: HttpRequest = {
        body: request.body
      }
      controller.route(httpRequest).then((httpResponse: HttpResponse) => {
        return response.status(httpResponse.statusCode).json(httpResponse.body)
      })
    }
  }
}

export default ExpressAdapter
