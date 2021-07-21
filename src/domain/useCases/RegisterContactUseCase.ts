import ContactEntity from '../entities/ContactEntity'
import ContactRepository from '../repositories/ContactRepository'

class RegisterContactUseCase {
  constructor (private readonly contactRepository: ContactRepository) {}

  public async execute (contact: ContactEntity): Promise<ContactEntity> {
    await this.contactRepository.insert(contact)
    return contact
  }
}

export default RegisterContactUseCase
