import ContactEntity from '../entities/ContactEntity'

interface ContactRepository {
  insert: (contact: ContactEntity) => Promise<ContactEntity>
  findByEmail: (email: string) => Promise<ContactEntity | null>
}

export default ContactRepository
