import ContactEntity from '../entities/ContactEntity'

interface ContactRepository {
  insert: (contact: ContactEntity) => Promise<ContactEntity>
}

export default ContactRepository
