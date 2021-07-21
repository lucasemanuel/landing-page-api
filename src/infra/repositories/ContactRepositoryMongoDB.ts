import ContactEntity from '../../domain/entities/ContactEntity'
import ContactRepository from '../../domain/repositories/ContactRepository'
import MongoDB, { database } from '../database/MongoDB'

class ContactRepositoryMongoDB implements ContactRepository {
  private readonly database: MongoDB = database

  public async insert (contact: ContactEntity): Promise<ContactEntity> {
    await database.getCollection('contacts').insertOne({ ...contact })
    return contact
  }
}

export default ContactRepositoryMongoDB
