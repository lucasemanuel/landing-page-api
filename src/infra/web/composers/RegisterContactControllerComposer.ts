import ContactRepositoryMongoDB from '../../repositories/ContactRepositoryMongoDB'
import EmailEntity from '../../../domain/entities/EmailEntity'
import EmailServiceNodeMailer from '../../services/EmailServiceNodeMailer'
import GetContactByEmailUseCase from '../../../domain/useCases/GetContactByEmailUseCase'
import RegisterContactController from '../../../presentation/controllers/RegisterContactController'
import RegisterContactUseCase from '../../../domain/useCases/RegisterContactUseCase'
import SendEmailUseCase from '../../../domain/useCases/SendEmailUseCase'

const RegisterContactControllerComposer = {
  compose () {
    const contactRepository = new ContactRepositoryMongoDB()
    const registerContactUseCase = new RegisterContactUseCase(contactRepository)
    const getContactByEmailUseCase = new GetContactByEmailUseCase(
      contactRepository
    )
    const email = new EmailEntity('Title', { text: 'Body' })
    const emailService = new EmailServiceNodeMailer(email)
    const sendEmailUseCase = new SendEmailUseCase(emailService)
    const registerContactController = new RegisterContactController(
      registerContactUseCase,
      getContactByEmailUseCase,
      sendEmailUseCase
    )
    return registerContactController
  }
}

export default RegisterContactControllerComposer
