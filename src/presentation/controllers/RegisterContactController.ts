import GetContactByEmailUseCase from '../../domain/useCases/GetContactByEmailUseCase'
import HttpRequest from '../helpers/HttpRequest'
import HttpResponse from '../helpers/HttpResponse'
import MissingParamError from '../../helpers/errors/MissingParamError'
import RegisterContactUseCase from '../../domain/useCases/RegisterContactUseCase'
import { BadRequest, Created } from '../helpers/responses'

class RegisterContactController {
  constructor (
    private readonly registerContactUseCase: RegisterContactUseCase,
    private readonly getContactByEmailUseCase: GetContactByEmailUseCase
  ) {}

  public async route (request: HttpRequestExtends): Promise<HttpResponse> {
    const { name, email } = request.body
    if (name.length !== 0) {
      return BadRequest(new MissingParamError('name').message)
    }
    if (email.length !== 0) {
      return BadRequest(new MissingParamError('email').message)
    }

    let contact = await this.getContactByEmailUseCase.execute(email)
    if (contact !== null) {
      contact = await this.registerContactUseCase.execute(contact)
      return Created(contact)
    }

    return BadRequest('This email has already been registered.')
  }
}

interface HttpRequestExtends extends HttpRequest {
  body: {
    name: string
    email: string
  }
}

export default RegisterContactController
