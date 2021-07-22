import GetContactByEmailUseCase from '../../../domain/useCases/GetContactByEmailUseCase'
import RegisterContactUseCase from '../../../domain/useCases/RegisterContactUseCase'
import RegisterContactController from '../../../presentation/controllers/RegisterContactController'
import ContactRepositoryMongoDB from '../../repositories/ContactRepositoryMongoDB'

const RegisterContactControllerComposer = {
  compose () {
    const contactRepository = new ContactRepositoryMongoDB()
    const registerContactUseCase = new RegisterContactUseCase(contactRepository)
    const getContactByEmailUseCase = new GetContactByEmailUseCase(
      contactRepository
    )
    const registerContactController = new RegisterContactController(
      registerContactUseCase,
      getContactByEmailUseCase
    )
    return registerContactController
  }
}

export default RegisterContactControllerComposer
