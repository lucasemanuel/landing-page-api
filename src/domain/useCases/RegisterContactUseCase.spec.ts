import ContactEntity from '../entities/ContactEntity'

interface RegisterContactDTO {
  name: string
  email: string
}

class RegisterContactUseCase {
  constructor (private readonly contactRepository: ContactRepository) {}

  public async execute (
    data: RegisterContactDTO
  ): Promise<ContactEntity | null> {
    const contact = await this.contactRepository.insert(data)
    return contact
  }
}

interface ContactRepository {
  insert: (data: RegisterContactDTO) => Promise<ContactEntity>
}

class ContactRepositorySpy implements ContactRepository {
  public name: string
  public email: string

  public async insert (data: RegisterContactDTO): Promise<ContactEntity> {
    Object.assign(this, data)
    return new ContactEntity('any_name', 'any_email@email.com', 'any_id')
  }
}

const makeSut = (): any => {
  const contactRepositorySpy = new ContactRepositorySpy()
  const sut = new RegisterContactUseCase(contactRepositorySpy)
  return {
    sut,
    contactRepositorySpy
  }
}

describe('Register Contact Use Case', () => {
  test('should call ContactRepository with correct params', async () => {
    const { contactRepositorySpy, sut } = makeSut()
    await sut.execute({
      name: 'any_name',
      email: 'any_email@email.com'
    })
    expect(contactRepositorySpy.name).toBe('any_name')
    expect(contactRepositorySpy.email).toBe('any_email@email.com')
  })
  test('should return a ContactEntity', async () => {
    const { sut } = makeSut()
    const contact = await sut.execute({
      name: 'any_name',
      email: 'any_email@email.com'
    })
    expect(contact).toBeInstanceOf(ContactEntity)
  })
})
