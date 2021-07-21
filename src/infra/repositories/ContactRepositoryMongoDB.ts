import ContactEntity from '../../domain/entities/ContactEntity'
import ContactRepository from '../../domain/repositories/ContactRepository'
import ContactFactory from '../../factories/ContactFactory'
import MongoDB, { database } from '../database/MongoDB'

class ContactRepositoryMongoDB implements ContactRepository {
  private readonly database: MongoDB = database

  public async insert (contact: ContactEntity): Promise<ContactEntity> {
    await database.getCollection('contacts').insertOne({ ...contact })
    return contact
  }

  public async findByEmail (email: string): Promise<ContactEntity | null> {
    const contactDocument = await database
      .getCollection('contacts')
      .findOne({ email })
    if (contactDocument != null) {
      const { email, name, id } = contactDocument
      const contact = ContactFactory.create({ email, name, id })
      return contact
    }
    return null
  }
}

export default ContactRepositoryMongoDB
