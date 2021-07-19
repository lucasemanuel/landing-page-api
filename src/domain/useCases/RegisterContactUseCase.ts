import ContactEntity from '../entities/ContactEntity'
import ContactRepository from '../repositories/ContactRepository'
import RegisterContactDTO from '../dtos/RegisterContactDTO'

class RegisterContactUseCase {
  constructor (private readonly contactRepository: ContactRepository) {}

  public async execute (data: RegisterContactDTO): Promise<ContactEntity> {
    const contact = await this.contactRepository.insert(data)
    return contact
  }
}

export default RegisterContactUseCase
