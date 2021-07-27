import ContactEntity from '../../domain/entities/ContactEntity'
import GetContactByEmailUseCase from '../../domain/useCases/GetContactByEmailUseCase'
import HttpRequest from '../helpers/HttpRequest'
import HttpResponse from '../helpers/HttpResponse'
import MissingParamError from '../../helpers/errors/MissingParamError'
import RegisterContactUseCase from '../../domain/useCases/RegisterContactUseCase'
import SendEmailUseCase from '../../domain/useCases/SendEmailUseCase'
import { BadRequest, Created, InternalServerError } from '../helpers/responses'

class RegisterContactController {
  constructor (
    private readonly registerContactUseCase: RegisterContactUseCase,
    private readonly getContactByEmailUseCase: GetContactByEmailUseCase,
    private readonly sendEmailUseCase: SendEmailUseCase
  ) {}

  public async route (request: HttpRequestExtends): Promise<HttpResponse> {
    try {
      const { name = '', email = '' } = request.body
      if (name.length === 0) {
        return BadRequest(new MissingParamError('name').message)
      }
      if (email.length === 0) {
        return BadRequest(new MissingParamError('email').message)
      }
      const existsContact = await this.getContactByEmailUseCase.execute(email)
      if (!(existsContact instanceof ContactEntity)) {
        const contact = await this.registerContactUseCase.execute({
          name,
          email
        })
        await this.sendEmailUseCase.execute(email)
        return Created(contact)
      }
      return BadRequest('This email has already been registered.')
    } catch (error) {
      console.log(error)
      return InternalServerError()
    }
  }
}

interface HttpRequestExtends extends HttpRequest {
  body: {
    name: string
    email: string
  }
}

export default RegisterContactController
