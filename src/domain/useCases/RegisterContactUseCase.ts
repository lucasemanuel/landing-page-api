import ContactEntity from '../entities/ContactEntity'
import ContactRepository from '../repositories/ContactRepository'
import CreateContactDTO from '../../dtos/CreateContactDTO'
import ContactFactory from '../../factories/ContactFactory'

class RegisterContactUseCase {
  constructor (private readonly contactRepository: ContactRepository) {}

  public async execute (data: CreateContactDTO): Promise<ContactEntity> {
    const contact = ContactFactory.create(data)
    await this.contactRepository.insert(contact)
    return contact
  }
}

export default RegisterContactUseCase
