import ContactEntity from '../domain/entities/ContactEntity'
import CreateContactDTO from '../dtos/CreateContactDTO'
import { v4 as uuidv4 } from 'uuid'

const ContactFactory = {
  create (data: CreateContactDTO): ContactEntity {
    const { name, email } = data
    const id = data.id ?? uuidv4(data.id)
    const contact = new ContactEntity(name, email, id)
    return contact
  }
}

export default ContactFactory
