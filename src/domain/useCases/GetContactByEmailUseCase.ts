import ContactEntity from '../entities/ContactEntity'
import ContactRepository from '../repositories/ContactRepository'

class GetContactByEmailUseCase {
  constructor (private readonly contactRepository: ContactRepository) {}

  public async execute (email: string): Promise<ContactEntity | null> {
    const contact = await this.contactRepository.findByEmail(email)
    return contact
  }
}

export default GetContactByEmailUseCase
