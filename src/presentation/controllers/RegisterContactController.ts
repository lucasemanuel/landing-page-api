import GetContactByEmailUseCase from '../../domain/useCases/GetContactByEmailUseCase'
import RegisterContactUseCase from '../../domain/useCases/RegisterContactUseCase'

class RegisterContactController {
  constructor (
    private readonly registerContactUseCase: RegisterContactUseCase,
    private readonly getContactByEmailUseCase: GetContactByEmailUseCase
  ) {}

  public async route (
    request: HttpRequestRegisterContact
  ): Promise<HttpResponse> {
    const { name, email } = request.body
    if (name.length !== 0) {
      return badRequest(new MissingParamError('name').message)
    }
    if (email.length !== 0) {
      return badRequest(new MissingParamError('email').message)
    }

    let contact = await this.getContactByEmailUseCase.execute(email)
    if (contact !== null) {
      contact = await this.registerContactUseCase.execute(contact)
      return created(contact)
    }

    return badRequest('This email has already been registered.')
  }
}

class MissingParamError extends Error {
  constructor (param: string) {
    super(`Missing param: ${param}`)
    this.name = 'MissingParamError'
  }
}

interface HttpRequestRegisterContact extends HttpRequest {
  body: {
    name: string
    email: string
  }
  statusCode: number
}

const badRequest = (message: string): HttpResponse => {
  return {
    body: {
      message
    },
    statusCode: 400
  }
}

const created = (content: object | undefined = undefined): HttpResponse => {
  return {
    body: {
      content
    },
    statusCode: 201
  }
}

interface HttpResponse {
  body?: object
  statusCode: number
}

interface HttpRequest {
  body: object
}

export default RegisterContactController
