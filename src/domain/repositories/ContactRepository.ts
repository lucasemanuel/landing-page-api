import ContactEntity from '../entities/ContactEntity'
import RegisterContactDTO from '../dtos/RegisterContactDTO'

interface ContactRepository {
  insert: (data: RegisterContactDTO) => Promise<ContactEntity>
}

export default ContactRepository
